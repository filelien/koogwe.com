import nodemailer from 'nodemailer';
import { log } from '../lib/logger.js';

let transporter = null;
let smtpReady = false;

export function isSmtpReady() {
  return smtpReady;
}

export function getTransporter() {
  if (transporter) return transporter;

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASSWORD;
  const smtpSecure = process.env.SMTP_SECURE === 'true';
  const smtpRequireTLS = process.env.SMTP_REQUIRE_TLS === 'true';

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) return null;

  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number.parseInt(smtpPort, 10),
    secure: smtpSecure,
    requireTLS: smtpRequireTLS,
    auth: { user: smtpUser, pass: smtpPass },
  });

  return transporter;
}

export async function sendMail({ to, fromName, replyToName, replyToEmail, subject, html, text }) {
  const smtp = getTransporter();

  if (!smtp) {
    const error = new Error('Configuration SMTP absente');
    error.code = 'SMTP_NOT_CONFIGURED';
    throw error;
  }

  return smtp.sendMail({
    from: `"${fromName}" <${process.env.SMTP_USER}>`,
    replyTo: replyToEmail ? `"${replyToName}" <${replyToEmail}>` : undefined,
    to,
    subject,
    html,
    text,
  });
}

export async function verifySmtpOnBoot() {
  const smtp = getTransporter();
  if (!smtp) {
    log.warn('smtp_skipped', { reason: 'missing_env' });
    smtpReady = false;
    return;
  }
  try {
    await smtp.verify();
    smtpReady = true;
    log.info('smtp_verified');
  } catch (error) {
    smtpReady = false;
    log.error('smtp_verify_failed', { message: error.message });
  }
}

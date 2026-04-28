import { config } from '../config.js';
import { log } from '../lib/logger.js';
import { sendMail } from '../services/mailService.js';
import { clean, cleanMessage, htmlEscape, limit } from '../utils/sanitize.js';
import {
  contactPayloadSchema,
  driverPayloadSchema,
  formatZodIssues,
} from '../validators/contactSchemas.js';

function jsonError(res, req, status, error) {
  return res.status(status).json({ success: false, error, requestId: req.requestId });
}

export async function postContact(req, res) {
  try {
    if (req.body?.website) {
      return res.json({ success: true, message: 'Message recu.', requestId: req.requestId });
    }

    const normalized = {
      name: limit(clean(req.body?.name), 100),
      email: limit(clean(req.body?.email), 160),
      phone: limit(clean(req.body?.phone), 30),
      subject: limit(clean(req.body?.subject), 120),
      message: limit(cleanMessage(req.body?.message), 2500),
    };

    const parsed = contactPayloadSchema.safeParse(normalized);
    if (!parsed.success) {
      const detail = formatZodIssues(parsed.error);
      return jsonError(res, req, 400, detail);
    }

    const payload = parsed.data;

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;">
        <h2 style="color:#1f2937;border-bottom:2px solid #0f766e;padding-bottom:8px;">Nouveau contact KOOGWE</h2>
        <p><strong>Nom:</strong> ${htmlEscape(payload.name)}</p>
        <p><strong>Email:</strong> ${htmlEscape(payload.email)}</p>
        <p><strong>Telephone:</strong> ${htmlEscape(payload.phone || '-')}</p>
        <p><strong>Sujet:</strong> ${htmlEscape(payload.subject)}</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
        <p style="white-space:pre-wrap;line-height:1.6;">${htmlEscape(payload.message)}</p>
      </div>
    `;

    const text = [
      'Nouveau contact KOOGWE',
      '',
      `Nom: ${payload.name}`,
      `Email: ${payload.email}`,
      `Telephone: ${payload.phone || '-'}`,
      `Sujet: ${payload.subject}`,
      '',
      payload.message,
    ].join('\n');

    const info = await sendMail({
      to: config.contactEmail,
      fromName: 'KOOGWE Contact',
      replyToName: payload.name,
      replyToEmail: payload.email,
      subject: `[KOOGWE Contact] ${payload.subject}`,
      html,
      text,
    });

    res.json({
      success: true,
      message:
        'Votre message a bien ete envoye. Merci, nous revenons vers vous rapidement.',
      messageId: info.messageId,
      requestId: req.requestId,
    });
  } catch (error) {
    log.error('contact_send_failed', {
      requestId: req.requestId,
      code: error.code,
      message: error.message,
    });
    const status = error.code === 'SMTP_NOT_CONFIGURED' ? 503 : 500;
    const msg =
      status === 503
        ? 'Service email indisponible: configuration SMTP manquante.'
        : "Erreur interne lors de l'envoi du message.";
    jsonError(res, req, status, msg);
  }
}

export async function postDriverContact(req, res) {
  try {
    if (req.body?.website) {
      return res.json({ success: true, message: 'Demande recue.', requestId: req.requestId });
    }

    const normalized = {
      fullName: limit(clean(req.body?.fullName), 120),
      email: limit(clean(req.body?.email), 160),
      phone: limit(clean(req.body?.phone), 30),
      city: limit(clean(req.body?.city), 80),
      experience: limit(clean(req.body?.experience), 500),
      hasVtcCard: Boolean(req.body?.hasVtcCard),
      hasVehicle: Boolean(req.body?.hasVehicle),
      availability: limit(clean(req.body?.availability), 120),
      motivation: limit(cleanMessage(req.body?.motivation), 3000),
    };

    const parsed = driverPayloadSchema.safeParse(normalized);
    if (!parsed.success) {
      return jsonError(res, req, 400, formatZodIssues(parsed.error));
    }

    const payload = parsed.data;

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;">
        <h2 style="color:#1f2937;border-bottom:2px solid #0f766e;padding-bottom:8px;">Nouvelle candidature chauffeur</h2>
        <p><strong>Nom complet:</strong> ${htmlEscape(payload.fullName)}</p>
        <p><strong>Email:</strong> ${htmlEscape(payload.email)}</p>
        <p><strong>Telephone:</strong> ${htmlEscape(payload.phone)}</p>
        <p><strong>Ville:</strong> ${htmlEscape(payload.city)}</p>
        <p><strong>Carte VTC:</strong> ${payload.hasVtcCard ? 'Oui' : 'Non'}</p>
        <p><strong>Vehicule disponible:</strong> ${payload.hasVehicle ? 'Oui' : 'Non'}</p>
        <p><strong>Disponibilite:</strong> ${htmlEscape(payload.availability || '-')}</p>
        <p><strong>Experience:</strong> ${htmlEscape(payload.experience || '-')}</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
        <h3 style="margin:0 0 8px 0;">Motivation</h3>
        <p style="white-space:pre-wrap;line-height:1.6;">${htmlEscape(payload.motivation)}</p>
      </div>
    `;

    const text = [
      'Nouvelle candidature chauffeur KOOGWE',
      '',
      `Nom complet: ${payload.fullName}`,
      `Email: ${payload.email}`,
      `Telephone: ${payload.phone}`,
      `Ville: ${payload.city}`,
      `Carte VTC: ${payload.hasVtcCard ? 'Oui' : 'Non'}`,
      `Vehicule disponible: ${payload.hasVehicle ? 'Oui' : 'Non'}`,
      `Disponibilite: ${payload.availability || '-'}`,
      `Experience: ${payload.experience || '-'}`,
      '',
      'Motivation:',
      payload.motivation,
    ].join('\n');

    const info = await sendMail({
      to: config.driverContactEmail,
      fromName: 'KOOGWE Candidature Chauffeur',
      replyToName: payload.fullName,
      replyToEmail: payload.email,
      subject: `[KOOGWE Chauffeur] Candidature - ${payload.fullName}`,
      html,
      text,
    });

    res.json({
      success: true,
      message: 'Votre candidature chauffeur a ete envoyee avec succes.',
      messageId: info.messageId,
      requestId: req.requestId,
    });
  } catch (error) {
    log.error('driver_contact_failed', {
      requestId: req.requestId,
      code: error.code,
      message: error.message,
    });
    const status = error.code === 'SMTP_NOT_CONFIGURED' ? 503 : 500;
    const msg =
      status === 503
        ? 'Service email indisponible: configuration SMTP manquante.'
        : "Erreur interne lors de l'envoi de la candidature chauffeur.";
    jsonError(res, req, status, msg);
  }
}

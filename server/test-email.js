import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Obtenir le répertoire du fichier actuel
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Charger le fichier .env depuis le répertoire server/
dotenv.config({ path: join(__dirname, '.env') });

const testEmail = async () => {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASSWORD;
  const smtpSecure = process.env.SMTP_SECURE === 'true';
  const smtpRequireTLS = process.env.SMTP_REQUIRE_TLS === 'true';
  const toEmail = 'koogwe@outlook.fr';

  console.log('🧪 Test d\'envoi d\'email...\n');
  console.log('Configuration:');
  console.log(`  Host: ${smtpHost}`);
  console.log(`  Port: ${smtpPort}`);
  console.log(`  User: ${smtpUser}`);
  console.log(`  Secure: ${smtpSecure}`);
  console.log(`  Require TLS: ${smtpRequireTLS}`);
  console.log(`  Destinataire: ${toEmail}\n`);

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.error('❌ Configuration SMTP incomplète!');
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(smtpPort, 10),
    secure: smtpSecure,
    requireTLS: smtpRequireTLS,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    // Vérifier la connexion
    console.log('🔍 Vérification de la connexion SMTP...');
    await transporter.verify();
    console.log('✅ Connexion SMTP réussie!\n');

    // Envoyer un email de test
    console.log('📧 Envoi de l\'email de test...');
    const info = await transporter.sendMail({
      from: `"KOOGWE Test" <${smtpUser}>`,
      to: toEmail,
      subject: '[KOOGWE] Test d\'envoi d\'email',
      html: `
        <h2>Test d'envoi d'email KOOGWE</h2>
        <p>Si vous recevez cet email, la configuration SMTP fonctionne correctement!</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
        <p><strong>Expéditeur SMTP:</strong> ${smtpUser}</p>
      `,
      text: `Test d'envoi d'email KOOGWE\n\nSi vous recevez cet email, la configuration SMTP fonctionne correctement!\n\nDate: ${new Date().toLocaleString('fr-FR')}\nExpéditeur SMTP: ${smtpUser}`
    });

    console.log('✅ Email envoyé avec succès!');
    console.log(`📧 Message ID: ${info.messageId}`);
    console.log(`📬 Destinataire: ${toEmail}`);
    console.log('\n✅ Vérifiez votre boîte mail koogwe@outlook.fr');
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi:', error.message);
    console.error('\nDétails de l\'erreur:');
    console.error(error);
    process.exit(1);
  }
};

testEmail();


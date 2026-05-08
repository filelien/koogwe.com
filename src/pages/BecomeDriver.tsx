import React from 'react';
import { Download, FileText, CheckCircle, Shield, Car, User, Building2, AlertCircle, ArrowRight, Clock, Phone, Mail, FileImage, FileSpreadsheet, FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const requirements = [
  {
    id: 1,
    icon: Building2,
    title: 'Carte professionnelle VTC',
    description: 'Vous devez être titulaire d\'une carte professionnelle de conducteur VTC, délivrée par la préfecture de votre département de résidence. Pour l\'obtenir :',
    details: [
      'Réussir l\'examen VTC organisé par la Chambre des Métiers et de l\'Artisanat (CMA), portant sur la réglementation des transports, la sécurité routière, la gestion d\'entreprise, le français et l\'anglais.',
      'Ou justifier d\'une expérience professionnelle d\'au moins un an en tant que conducteur de transport de personnes (taxi, LOTI, etc.).',
      'La carte professionnelle VTC est valable 5 ans et doit être renouvelée avant expiration.'
    ]
  },
  {
    id: 2,
    icon: User,
    title: 'Permis de conduire',
    description: 'Vous devez être titulaire d\'un permis de conduire de catégorie B en cours de validité, obtenu depuis au moins 3 ans (ou 2 ans en cas de conduite accompagnée). Le permis ne doit faire l\'objet d\'aucune suspension ni annulation.'
  },
  {
    id: 3,
    icon: Shield,
    title: 'Aptitude médicale',
    description: 'Vous devez passer une visite médicale auprès d\'un médecin agréé par la préfecture, attestant que vous êtes apte à la conduite professionnelle de véhicules légers. Ce certificat médical est à renouveler tous les 5 ans (tous les 2 ans après 60 ans).'
  },
  {
    id: 4,
    icon: AlertCircle,
    title: 'Casier judiciaire',
    description: 'L\'obtention de la carte professionnelle VTC est soumise à une vérification du bulletin n°2 du casier judiciaire. Certaines condamnations sont incompatibles avec l\'exercice de la profession (infractions routières graves, violences, atteintes aux personnes, etc.).'
  },
  {
    id: 5,
    icon: Building2,
    title: 'Inscription au registre VTC',
    description: 'Avant de commencer à exercer, vous devez vous inscrire au registre des VTC tenu par le ministère chargé des transports. Cette inscription atteste que vous remplissez toutes les conditions réglementaires. Elle se fait en ligne sur le site du registre national des VTC.'
  },
  {
    id: 6,
    icon: Car,
    title: 'Véhicule conforme',
    description: 'Votre véhicule doit respecter les critères suivants :',
    details: [
      'Avoir entre 4 et 9 places (conducteur inclus).',
      'Être en bon état général et avoir passé le contrôle technique à jour.',
      'Disposer d\'une assurance responsabilité civile professionnelle couvrant le transport de personnes à titre onéreux.',
      'Être de moins de 6 ans (sauf dérogation locale).'
    ]
  },
  {
    id: 7,
    icon: Shield,
    title: 'Assurance professionnelle',
    description: 'Vous devez souscrire une assurance RC professionnelle spécifique au transport de personnes à titre onéreux. L\'assurance personnelle classique ne suffit pas. Cette assurance couvre les dommages causés aux passagers et aux tiers pendant l\'exercice de votre activité.'
  }
];

const documents = [
  'Carte professionnelle VTC en cours de validité',
  'Permis de conduire catégorie B (3 ans minimum)',
  'Certificat médical d\'aptitude à la conduite',
  'Attestation d\'inscription au registre des VTC',
  'Carte grise du véhicule',
  'Attestation d\'assurance RC professionnelle',
  'Pièce d\'identité en cours de validité',
  'Justificatif de domicile de moins de 3 mois',
  'Photo d\'identité récente',
  'RIB pour le versement de vos revenus'
];

const downloadRequirements = () => {
  const content = `GUIDE COMPLET - CONDITIONS POUR DEVENIR CHAUFFEUR VTC

1. CARTE PROFESSIONNELLE VTC
Vous devez être titulaire d'une carte professionnelle de conducteur VTC, délivrée par la préfecture de votre département de résidence.
Pour l'obtenir :
- Réussir l'examen VTC organisé par la Chambre des Métiers et de l'Artisanat (CMA), portant sur la réglementation des transports, la sécurité routière, la gestion d'entreprise, le français et l'anglais.
- Ou justifier d'une expérience professionnelle d'au moins un an en tant que conducteur de transport de personnes (taxi, LOTI, etc.).
La carte professionnelle VTC est valable 5 ans et doit être renouvelée avant expiration.

2. PERMIS DE CONDUIRE
Vous devez être titulaire d'un permis de conduire de catégorie B en cours de validité, obtenu depuis au moins 3 ans (ou 2 ans en cas de conduite accompagnée). Le permis ne doit faire l'objet d'aucune suspension ni annulation.

3. APTITUDE MÉDICALE
Vous devez passer une visite médicale auprès d'un médecin agréé par la préfecture, attestant que vous êtes apte à la conduite professionnelle de véhicules légers. Ce certificat médical est à renouveler tous les 5 ans (tous les 2 ans après 60 ans).

4. CASIER JUDICIAIRE
L'obtention de la carte professionnelle VTC est soumise à une vérification du bulletin n°2 du casier judiciaire. Certaines condamnations sont incompatibles avec l'exercice de la profession (infractions routières graves, violences, atteintes aux personnes, etc.).

5. INSCRIPTION AU REGISTRE VTC
Avant de commencer à exercer, vous devez vous inscrire au registre des VTC tenu par le ministère chargé des transports. Cette inscription atteste que vous remplissez toutes les conditions réglementaires.

6. VÉHICULE CONFORME
Votre véhicule doit respecter les critères suivants :
- Avoir entre 4 et 9 places (conducteur inclus)
- Être en bon état général et avoir passé le contrôle technique à jour
- Disposer d'une assurance responsabilité civile professionnelle couvrant le transport de personnes à titre onéreux
- Être de moins de 6 ans (sauf dérogation locale)

7. ASSURANCE PROFESSIONNELLE
Vous devez souscrire une assurance RC professionnelle spécifique au transport de personnes à titre onéreux. L'assurance personnelle classique ne suffit pas.

DOCUMENTS À FOURNIR :
- Carte professionnelle VTC en cours de validité
- Permis de conduire catégorie B (3 ans minimum)
- Certificat médical d'aptitude à la conduite
- Attestation d'inscription au registre des VTC
- Carte grise du véhicule
- Attestation d'assurance RC professionnelle
- Pièce d'identité en cours de validité
- Justificatif de domicile de moins de 3 mois
- Photo d'identité récente
- RIB pour le versement de vos revenus

KOOGWE - Première plateforme VTC de Guyane française
Contact : koogwe@outlook.fr`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'guide-chauffeur-vtc-koogwe.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const downloadFiles = [
  {
    id: 1,
    name: 'Guide complet VTC',
    description: 'Guide PDF avec toutes les conditions et démarches',
    filename: 'guide-vtc-koogwe.pdf',
    type: 'pdf',
    icon: FileText,
    color: 'red',
    size: '245 KB',
    action: () => {
      // Generate PDF-like content
      const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj
2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj
3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj
4 0 obj
<<
/Length 500
>>
stream
BT
/F1 24 Tf
100 700 Td
(GUIDE CHAUFFEUR VTC - KOOGWE) Tj
/F1 14 Tf
0 -40 Td
(Conditions requises pour devenir chauffeur VTC en Guyane) Tj
/F1 12 Tf
0 -30 Td
(1. Carte professionnelle VTC delivree par la prefecture) Tj
0 -20 Td
(2. Permis B valide depuis au moins 3 ans) Tj
0 -20 Td
(3. Certificat medical d aptitude) Tj
0 -20 Td
(4. Casier judiciaire vierge) Tj
0 -20 Td
(5. Inscription au registre VTC) Tj
0 -20 Td
(6. Vehicule conforme 4-9 places) Tj
0 -20 Td
(7. Assurance RC professionnelle) Tj
ET
endstream
endobj
5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000000822 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
901
%%EOF`;
      const blob = new Blob([pdfContent], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'guide-vtc-koogwe.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  },
  {
    id: 2,
    name: 'Liste des documents',
    description: 'Document Word avec la liste complète des pièces',
    filename: 'liste-documents-vtc.doc',
    type: 'word',
    icon: FileSpreadsheet,
    color: 'blue',
    size: '18 KB',
    action: () => {
      const htmlContent = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head><meta charset='utf-8'><title>Liste Documents VTC</title></head>
<body>
<h1>LISTE DES DOCUMENTS À FOURNIR - CHAUFFEUR VTC</h1>
<h2>KOOGWE - Guyane Française</h2>
<ol>
<li>Carte professionnelle VTC en cours de validité</li>
<li>Permis de conduire catégorie B (3 ans minimum)</li>
<li>Certificat médical d'aptitude à la conduite</li>
<li>Attestation d'inscription au registre des VTC</li>
<li>Carte grise du véhicule</li>
<li>Attestation d'assurance RC professionnelle</li>
<li>Pièce d'identité en cours de validité</li>
<li>Justificatif de domicile de moins de 3 mois</li>
<li>Photo d'identité récente</li>
<li>RIB pour le versement de vos revenus</li>
</ol>
<p><strong>Contact KOOGWE:</strong> koogwe@outlook.fr</p>
</body>
</html>`;
      const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'liste-documents-vtc.doc';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  },
  {
    id: 3,
    name: 'Badge chauffeur',
    description: 'Image modèle du badge officiel',
    filename: 'badge-chauffeur-koogwe.png',
    type: 'image',
    icon: FileImage,
    color: 'emerald',
    size: '125 KB',
    action: () => {
      // Create a canvas-based badge image
      const canvas = document.createElement('canvas');
      canvas.width = 400;
      canvas.height = 250;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, 400, 250);
        gradient.addColorStop(0, '#059669');
        gradient.addColorStop(1, '#0d9488');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 400, 250);
        // Border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4;
        ctx.strokeRect(10, 10, 380, 230);
        // Title
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 28px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('CHAUFFEUR VTC', 200, 60);
        // Logo circle
        ctx.beginPath();
        ctx.arc(200, 120, 40, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.fillStyle = '#059669';
        ctx.font = 'bold 20px Arial';
        ctx.fillText('K', 200, 128);
        // Name placeholder
        ctx.fillStyle = '#ffffff';
        ctx.font = '20px Arial';
        ctx.fillText('NOM DU CHAUFFEUR', 200, 190);
        // ID
        ctx.font = '14px Arial';
        ctx.fillText('ID: KOOGWE-2025-XXXX', 200, 215);
        // Download
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'badge-chauffeur-koogwe.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  },
  {
    id: 4,
    name: 'Fiche véhicule',
    description: 'Formulaire PDF pour déclarer votre véhicule',
    filename: 'fiche-vehicule-vtc.pdf',
    type: 'pdf',
    icon: FileText,
    color: 'orange',
    size: '32 KB',
    action: () => {
      const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj
2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj
3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj
4 0 obj
<<
/Length 600
>>
stream
BT
/F1 20 Tf
100 750 Td
(FICHE VEHICULE VTC - KOOGWE) Tj
/F1 12 Tf
0 -30 Td
(INFORMATIONS CONDUCTEUR) Tj
0 -20 Td
(Nom: ________________________________) Tj
0 -20 Td
(Prenom: ________________________________) Tj
0 -20 Td
(Telephone: ________________________________) Tj
0 -20 Td
(Email: ________________________________) Tj
0 -30 Td
(INFORMATIONS VEHICULE) Tj
0 -20 Td
(Marque: ________________________________) Tj
0 -20 Td
(Modele: ________________________________) Tj
0 -20 Td
(Immatriculation: ________________________) Tj
0 -20 Td
(Annee: ______ Nombre de places: ______) Tj
0 -20 Td
(Date controle technique: __________________) Tj
ET
endstream
endobj
5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000000922 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
1001
%%EOF`;
      const blob = new Blob([pdfContent], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'fiche-vehicule-vtc.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  },
  {
    id: 5,
    name: 'Contrat partenaire',
    description: 'Document Word du contrat de partenariat',
    filename: 'contrat-partenaire.doc',
    type: 'word',
    icon: FileSpreadsheet,
    color: 'purple',
    size: '45 KB',
    action: () => {
      const htmlContent = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head><meta charset='utf-8'><title>Contrat Partenaire</title></head>
<body>
<h1>CONTRAT DE PARTENARIAT CHAUFFEUR</h1>
<h2>KOOGWE - Plateforme VTC</h2>
<p><strong>Entre:</strong></p>
<p>La société KOOGWE, plateforme de mise en relation</p>
<p><strong>Et:</strong></p>
<p>Le chauffeur partenaire (à compléter)</p>
<h3>Article 1 - Objet du contrat</h3>
<p>Le présent contrat a pour objet de définir les conditions de collaboration entre KOOGWE et le chauffeur pour la mise en relation avec des clients.</p>
<h3>Article 2 - Obligations du chauffeur</h3>
<ul>
<li>Être titulaire d'une carte VTC valide</li>
<li>Disposer d'un véhicule conforme</li>
<li>Respecter le code de la route</li>
<li>Maintenir une note de satisfaction élevée</li>
</ul>
<h3>Article 3 - Rémunération</h3>
<p>Le chauffeur perçoit 80% du montant des courses réalisées.</p>
<p>Date: _________________</p>
<p>Signature: _________________</p>
</body>
</html>`;
      const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'contrat-partenaire.doc';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  },
  {
    id: 6,
    name: 'Flyer promotionnel',
    description: 'Image pour partager KOOGWE',
    filename: 'flyer-koogwe-promo.jpg',
    type: 'image',
    icon: FileImage,
    color: 'pink',
    size: '180 KB',
    action: () => {
      const canvas = document.createElement('canvas');
      canvas.width = 600;
      canvas.height = 800;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Background
        const gradient = ctx.createLinearGradient(0, 0, 600, 800);
        gradient.addColorStop(0, '#064e3b');
        gradient.addColorStop(0.5, '#059669');
        gradient.addColorStop(1, '#0d9488');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 600, 800);
        // Header
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(50, 50, 500, 2);
        // Logo
        ctx.beginPath();
        ctx.arc(300, 150, 60, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.fillStyle = '#059669';
        ctx.font = 'bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('K', 300, 168);
        // Title
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 42px Arial';
        ctx.fillText('KOOGWE', 300, 280);
        ctx.font = '24px Arial';
        ctx.fillText('Votre VTC en Guyane', 300, 320);
        // Features
        const features = [
          '✓ Réservation rapide',
          '✓ Chauffeurs pros',
          '✓ Tarifs transparents',
          '✓ Disponible 24/7'
        ];
        ctx.font = '22px Arial';
        features.forEach((feature, i) => {
          ctx.fillText(feature, 300, 400 + i * 40);
        });
        // QR Code placeholder
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(200, 580, 200, 200);
        ctx.fillStyle = '#059669';
        ctx.font = '16px Arial';
        ctx.fillText('[QR CODE]', 300, 690);
        // Footer
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(50, 50, 500, 2);
        ctx.font = '20px Arial';
        ctx.fillText('koogwe@outlook.fr', 300, 60);
        // Download
        const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'flyer-koogwe-promo.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
];

const BecomeDriver: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield size={16} />
              Devenir Chauffeur Partenaire
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Rejoignez KOOGWE
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8">
              Première plateforme VTC de Guyane française. Gagnez en liberté et en revenus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#requirements"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-700 rounded-2xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Voir les conditions
                <ArrowRight size={20} />
              </a>
              <button
                onClick={downloadRequirements}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-700/50 backdrop-blur-sm text-white border border-white/30 rounded-2xl font-semibold hover:bg-emerald-700/70 transition-all duration-300"
              >
                <Download size={20} />
                Télécharger le guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '48h', label: 'Délai de réponse' },
              { value: '5 ans', label: 'Validité carte VTC' },
              { value: '4-9', label: 'Places véhicule' },
              { value: '100%', label: 'Accompagnement' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400">{stat.value}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Conditions requises
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Pour devenir chauffeur VTC en Guyane, vous devez remplir les conditions réglementaires suivantes.
            </p>
          </div>

          {/* Download Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-8 mb-12 border border-emerald-200 dark:border-emerald-800"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-800 rounded-2xl flex items-center justify-center">
                  <FileText className="text-emerald-600 dark:text-emerald-400" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Guide complet à télécharger</h3>
                  <p className="text-gray-600 dark:text-gray-400">Toutes les conditions et documents requis en format texte</p>
                </div>
              </div>
              <button
                onClick={downloadRequirements}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Télécharger le guide
              </button>
            </div>
          </motion.div>

          {/* Requirements Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <motion.div
                key={req.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <req.icon className="text-emerald-600 dark:text-emerald-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {req.id}
                      </span>
                      <h3 className="font-bold text-gray-900 dark:text-white">{req.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{req.description}</p>
                    {req.details && (
                      <ul className="space-y-2">
                        {req.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Documents à fournir
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Préparez ces documents pour compléter votre inscription.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                  <FileText className="text-emerald-600 dark:text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Liste des documents</h3>
              </div>

              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={16} className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <FolderOpen size={16} />
              Espace de téléchargement
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Documents et modèles à télécharger
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Téléchargez les guides, formulaires et documents nécessaires pour votre inscription.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadFiles.map((file, index) => (
              <motion.div
                key={file.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all hover:shadow-lg group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    file.color === 'red' ? 'bg-red-100 dark:bg-red-900/30' :
                    file.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                    file.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/30' :
                    file.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30' :
                    file.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                    'bg-pink-100 dark:bg-pink-900/30'
                  }`}>
                    <file.icon size={28} className={`${
                      file.color === 'red' ? 'text-red-600 dark:text-red-400' :
                      file.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                      file.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' :
                      file.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                      file.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                      'text-pink-600 dark:text-pink-400'
                    }`} />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase ${
                    file.type === 'pdf' ? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300' :
                    file.type === 'word' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' :
                    'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300'
                  }`}>
                    {file.type}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{file.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{file.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-500">{file.size}</span>
                  <button
                    onClick={file.action}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    <Download size={16} />
                    Télécharger
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à nous rejoindre ?
            </h2>
            <p className="text-xl text-emerald-100 mb-12">
              Contactez notre équipe pour démarrer votre inscription. Réponse sous 48h ouvrées.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <a href="mailto:koogwe@outlook.fr" className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors">
                <Mail className="mx-auto mb-3" size={32} />
                <p className="font-semibold">Email</p>
                <p className="text-emerald-100 text-sm">koogwe@outlook.fr</p>
              </a>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Phone className="mx-auto mb-3" size={32} />
                <p className="font-semibold">Téléphone</p>
                <p className="text-emerald-100 text-sm">+594 594 00 00 00</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Clock className="mx-auto mb-3" size={32} />
                <p className="font-semibold">Délai</p>
                <p className="text-emerald-100 text-sm">48h ouvrées</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-xl font-bold mb-4">Comment postuler ?</h3>
              <ol className="text-left space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <span>Rassemblez tous les documents requis listés ci-dessus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <span>Envoyez-nous un email à <strong>koogwe@outlook.fr</strong> avec l'objet "Candidature chauffeur VTC"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <span>Joignez vos documents (carte VTC, permis, assurance) en PDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <span>Notre équipe vous contactera sous 48h pour finaliser votre inscription</span>
                </li>
              </ol>
              <a
                href="mailto:koogwe@outlook.fr?subject=Candidature%20chauffeur%20VTC"
                className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors"
              >
                <Mail size={20} />
                Envoyer ma candidature
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-8 bg-gray-100 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-500">
            Les informations légales sont fournies à titre indicatif et conformes à la réglementation française en vigueur. 
            Pour toute question spécifique, consultez la préfecture de Guyane ou la Chambre des Métiers et de l'Artisanat.
          </p>
        </div>
      </section>
    </main>
  );
};

export default BecomeDriver;

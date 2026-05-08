import React, { useState } from 'react';
import { Download, FileText, CheckCircle, Shield, Car, User, Building2, AlertCircle, ArrowRight, Clock, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n/context';

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

const BecomeDriver: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'requirements' | 'documents'>('requirements');

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

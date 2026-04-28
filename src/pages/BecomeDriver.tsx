import React from 'react';
import DriverApplicationForm from '../components/DriverApplicationForm';

const BecomeDriver: React.FC = () => (
  <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pt-20">
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Devenir chauffeur Loto VTC</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Rejoignez notre réseau de chauffeurs professionnels en Guyane et développez votre activité.</p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Pourquoi rejoindre Loto VTC ?</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Liberté d'organisation : choisissez vos horaires et vos zones de travail.</li>
          <li>Clientèle locale : accédez à une base de passagers grandissante en Guyane.</li>
          <li>Paiement sécurisé : les courses sont réglées par carte bancaire via Stripe, vous recevez vos revenus de manière fiable.</li>
          <li>Application intuitive : interface chauffeur simple et claire avec navigation GPS intégrée.</li>
          <li>Accompagnement : notre équipe vous aide dans vos démarches et vous accompagne au quotidien.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Conditions requises</h2>
        <ol className="list-decimal ml-6 mb-6 space-y-4 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Carte professionnelle VTC</strong> :
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Être titulaire d'une carte professionnelle de conducteur VTC, délivrée par la préfecture.</li>
              <li>Réussir l'examen VTC ou justifier d'une expérience professionnelle d'au moins un an.</li>
              <li>Carte valable 5 ans, à renouveler avant expiration.</li>
            </ul>
          </li>
          <li>
            <strong>Permis de conduire</strong> :
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Permis B en cours de validité depuis au moins 3 ans (ou 2 ans en conduite accompagnée).</li>
              <li>Pas de suspension ni annulation.</li>
            </ul>
          </li>
          <li>
            <strong>Aptitude médicale</strong> :
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Visite médicale auprès d'un médecin agréé, à renouveler tous les 5 ans (2 ans après 60 ans).</li>
            </ul>
          </li>
          <li>
            <strong>Casier judiciaire</strong> :
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Vérification du bulletin n°2, certaines condamnations sont incompatibles.</li>
            </ul>
          </li>
          <li>
            <strong>Inscription au registre VTC</strong> :
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Inscription obligatoire sur le registre national des VTC.</li>
            </ul>
          </li>
          <li>
            <strong>Véhicule conforme</strong> :
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>4 à 9 places, bon état, contrôle technique à jour.</li>
              <li>Assurance RC professionnelle, véhicule de moins de 6 ans (sauf dérogation).</li>
            </ul>
          </li>
          <li>
            <strong>Assurance professionnelle</strong> :
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Assurance RC professionnelle spécifique au transport de personnes à titre onéreux.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Récapitulatif des documents à fournir</h2>
        <ul className="list-disc ml-6 mb-6 space-y-1 text-gray-700 dark:text-gray-300">
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
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Comment postuler ?</h2>
        <ol className="list-decimal ml-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Rassemblez tous les documents requis.</li>
          <li>Contactez notre équipe support pour démarrer votre inscription :</li>
        </ol>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-6 mb-6">
          <p className="mb-2"><strong>Email :</strong> <a href="mailto:contact@koogwe.com" className="text-emerald-600 dark:text-emerald-400 underline hover:text-emerald-700">contact@koogwe.com</a></p>
          <p className="mb-2"><strong>Objet :</strong> Indiquez "Candidature chauffeur VTC"</p>
          <p className="mb-2"><strong>Pièces jointes :</strong> Joignez vos documents (carte VTC, permis, assurance) en PDF</p>
          <p><strong>Délai :</strong> Réponse sous 48h ouvrées</p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Les informations légales sont fournies à titre indicatif et conformes à la réglementation française en vigueur. Pour toute question spécifique, consultez la préfecture de Guyane ou la Chambre des Métiers et de l'Artisanat.</p>
      </section>

      <DriverApplicationForm />
    </div>
  </main>
);

export default BecomeDriver;

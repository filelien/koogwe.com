import { FormEvent, useState } from 'react';
import { CheckCircle, Send, User, Mail, Phone, MapPin, Car, FileText, XCircle } from 'lucide-react';

type DriverApplicationData = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  availability: string;
  experience: string;
  motivation: string;
  hasVtcCard: boolean;
  hasVehicle: boolean;
};

const initialState: DriverApplicationData = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  availability: '',
  experience: '',
  motivation: '',
  hasVtcCard: false,
  hasVehicle: false,
};

export default function DriverApplicationForm() {
  const [data, setData] = useState<DriverApplicationData>(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/contact/driver`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, website: '' }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Echec envoi candidature');
      }

      setStatus({
        type: 'success',
        message: result.message || 'Votre candidature a ete envoyee avec succes.',
      });
      setData(initialState);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : "Une erreur s'est produite.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Candidature chauffeur</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Completez ce formulaire pour rejoindre KOOGWE. Notre equipe vous recontacte rapidement.
      </p>

      {status.type && (
        <div
          className={`mb-6 p-4 rounded-xl border flex items-center gap-3 ${
            status.type === 'success'
              ? 'bg-emerald-50 border-emerald-300 text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-100 dark:border-emerald-700'
              : 'bg-red-50 border-red-300 text-red-900 dark:bg-red-900/20 dark:text-red-100 dark:border-red-700'
          }`}
        >
          {status.type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
          <p>{status.message}</p>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <label className="relative block">
            <User className="absolute left-3 top-11 text-gray-400" size={18} />
            <span className="text-sm text-gray-700 dark:text-gray-300">Nom complet *</span>
            <input
              required
              value={data.fullName}
              onChange={(e) => setData((prev) => ({ ...prev, fullName: e.target.value }))}
              className="w-full mt-2 pl-10 pr-3 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Ex: Jean Dupont"
            />
          </label>

          <label className="relative block">
            <Mail className="absolute left-3 top-11 text-gray-400" size={18} />
            <span className="text-sm text-gray-700 dark:text-gray-300">Email *</span>
            <input
              type="email"
              required
              value={data.email}
              onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full mt-2 pl-10 pr-3 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="vous@email.com"
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="relative block">
            <Phone className="absolute left-3 top-11 text-gray-400" size={18} />
            <span className="text-sm text-gray-700 dark:text-gray-300">Telephone *</span>
            <input
              required
              value={data.phone}
              onChange={(e) => setData((prev) => ({ ...prev, phone: e.target.value }))}
              className="w-full mt-2 pl-10 pr-3 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="+594 ..."
            />
          </label>

          <label className="relative block">
            <MapPin className="absolute left-3 top-11 text-gray-400" size={18} />
            <span className="text-sm text-gray-700 dark:text-gray-300">Ville *</span>
            <input
              required
              value={data.city}
              onChange={(e) => setData((prev) => ({ ...prev, city: e.target.value }))}
              className="w-full mt-2 pl-10 pr-3 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Cayenne"
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm text-gray-700 dark:text-gray-300">Disponibilite</span>
            <input
              value={data.availability}
              onChange={(e) => setData((prev) => ({ ...prev, availability: e.target.value }))}
              className="w-full mt-2 px-3 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Semaine / week-end / nuits..."
            />
          </label>
          <label className="block">
            <span className="text-sm text-gray-700 dark:text-gray-300">Experience (optionnel)</span>
            <input
              value={data.experience}
              onChange={(e) => setData((prev) => ({ ...prev, experience: e.target.value }))}
              className="w-full mt-2 px-3 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Ex: 2 ans de VTC"
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-600 rounded-xl">
            <FileText size={18} className="text-gray-400" />
            <input
              type="checkbox"
              checked={data.hasVtcCard}
              onChange={(e) => setData((prev) => ({ ...prev, hasVtcCard: e.target.checked }))}
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Je possede une carte VTC</span>
          </label>

          <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-600 rounded-xl">
            <Car size={18} className="text-gray-400" />
            <input
              type="checkbox"
              checked={data.hasVehicle}
              onChange={(e) => setData((prev) => ({ ...prev, hasVehicle: e.target.checked }))}
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Je dispose d'un vehicule conforme</span>
          </label>
        </div>

        <label className="block">
          <span className="text-sm text-gray-700 dark:text-gray-300">Motivation *</span>
          <textarea
            required
            rows={5}
            value={data.motivation}
            onChange={(e) => setData((prev) => ({ ...prev, motivation: e.target.value }))}
            className="w-full mt-2 px-3 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
            placeholder="Parlez-nous de votre profil et de votre motivation..."
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-lg transition-all disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={18} />
              Envoyer ma candidature
            </>
          )}
        </button>
      </form>
    </section>
  );
}

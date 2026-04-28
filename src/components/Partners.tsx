import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Car, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { useTranslation } from '../i18n/context';

// Créer le client Supabase seulement si les variables d'environnement sont définies et valides
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Vérifier que l'URL est valide (commence par http:// ou https://)
const isValidUrl = supabaseUrl && (supabaseUrl.startsWith('http://') || supabaseUrl.startsWith('https://'));

const supabase = isValidUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  category: string;
  price_range: string;
  available_for: string[];
}

const partnerLogos = [
  { name: 'CFAO Motors', logo: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'GBH Guyane', logo: 'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Ford Guyane', logo: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&auto=format' },
  { name: 'Nissan Guyane', logo: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Kia Guyane', logo: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400' }
];

export default function Partners() {
  const { t } = useTranslation();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loadingVehicles, setLoadingVehicles] = useState(true);
  const [vehiclesError, setVehiclesError] = useState<string | null>(null);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    setLoadingVehicles(true);
    setVehiclesError(null);
    if (!supabase) {
      setLoadingVehicles(false);
      setVehiclesError('Catalogue temporairement indisponible.');
      return;
    }
    try {
      const { data, error } = await supabase
      .from('vehicle_catalog')
      .select('*')
      .eq('is_available', true)
      .limit(6);
      if (data && !error) {
        setVehicles(data);
      } else if (error) {
        setVehiclesError('Impossible de charger les vehicules pour le moment.');
      }
    } catch (error) {
      console.error('Erreur lors du chargement des véhicules:', error);
      setVehiclesError('Impossible de charger les vehicules pour le moment.');
    } finally {
      setLoadingVehicles(false);
    }
  };

  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full font-semibold mb-6">
            {t('partners.badge')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('partners.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('partners.description')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
          {partnerLogos.map((partner, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100 dark:border-gray-700"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-24 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <p className="font-semibold text-gray-900 dark:text-white text-center">{partner.name}</p>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('partners.catalog')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {!loadingVehicles && vehicles.length > 0 ? (
              vehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                    <Car className="text-gray-400 dark:text-gray-500" size={80} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {vehicle.brand} {vehicle.model}
                      </h4>
                      <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                        {vehicle.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{vehicle.price_range}</p>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.available_for.map((type, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {type === 'vtc' ? 'VTC' : type === 'rideshare' ? 'Covoiturage' : type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : loadingVehicles ? (
              <div className="col-span-full text-center py-12">
                <div className="inline-block">
                  <div className="w-12 h-12 rounded-full border-4 border-gray-300 border-t-emerald-500 animate-spin"></div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-4">{t('partners.loading')}</p>
              </div>
            ) : vehiclesError ? (
              <div className="col-span-full">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800 p-12 text-center">
                  <div className="mb-4">
                    <Car className="mx-auto text-emerald-600 dark:text-emerald-400" size={64} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Catalogue en cours de configuration</h4>
                  <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-6">
                    Notre sélection de véhicules sera bientôt disponible. Contactez-nous pour connaître les dernières offres.
                  </p>
                  <a href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Nous contacter
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ) : (
              <div className="col-span-full text-center py-12">
                <Car className="mx-auto text-gray-400 dark:text-gray-500 mb-4" size={64} />
                <p className="text-gray-500 dark:text-gray-400">Aucun vehicule disponible actuellement.</p>
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t('partners.fleetManagement')}</h4>
            <p className="text-gray-600 dark:text-gray-300">
              {t('partners.fleetDesc')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Car className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t('partners.leasing')}</h4>
            <p className="text-gray-600 dark:text-gray-300">
              {t('partners.leasingDesc')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t('partners.growth')}</h4>
            <p className="text-gray-600 dark:text-gray-300">
              {t('partners.growthDesc')}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3841338/pexels-photo-3841338.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10">
            <Users className="mx-auto mb-6 text-teal-200" size={64} />
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('partners.becomePartner')}
            </h3>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              {t('partners.becomePartnerDesc')}
            </p>
            <Link
              to="/contact"
              className="inline-flex px-10 py-4 bg-white text-teal-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              {t('partners.contactUs')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

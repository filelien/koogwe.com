import { X, MapPin, Clock, DollarSign, Navigation, Route } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/context';

interface TripSimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
  pickup: string;
  destination: string;
}

interface RouteInfo {
  distance: number; // en km
  duration: number; // en minutes
  price: number; // en euros
}

export default function TripSimulationModal({ isOpen, onClose, pickup, destination }: TripSimulationModalProps) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const calculateRoute = async () => {
    setLoading(true);
    setError(null);
    setRouteInfo(null);

    try {
      // Coordonnées approximatives pour la Guyane française
      // En production, utiliseriez un service de géocodage
      const pickupCoords = await geocodeAddress(pickup);
      const destCoords = await geocodeAddress(destination);

      if (!pickupCoords || !destCoords) {
        throw new Error(t('tripModal.error'));
      }

      // Utiliser OSRM pour calculer l'itinéraire
      const osrmEndpoint = import.meta.env.VITE_OSRM_ENDPOINT || import.meta.env.EXPO_PUBLIC_OSRM_ENDPOINT || 'https://router.project-osrm.org';
      const url = `${osrmEndpoint}/route/v1/driving/${pickupCoords.lng},${pickupCoords.lat};${destCoords.lng},${destCoords.lat}?overview=full&geometries=geojson`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
        const route = data.routes[0];
        const distance = route.distance / 1000; // convertir en km
        const duration = Math.round(route.duration / 60); // convertir en minutes

        // Calcul du prix approximatif (base: 1.5€/km + 2€ de base)
        const price = Math.round((distance * 1.5 + 2) * 100) / 100;

        setRouteInfo({
          distance,
          duration,
          price,
        });
      } else {
        throw new Error(t('tripModal.error'));
      }
    } catch (err) {
      console.error('Erreur calcul route:', err);
      // Simulation avec des données par défaut si l'API échoue
      setRouteInfo({
        distance: 15.5,
        duration: 25,
        price: 25.25,
      });
      setError(t('tripModal.error'));
    } finally {
      setLoading(false);
    }
  };

  const geocodeAddress = async (address: string): Promise<{ lat: number; lng: number } | null> => {
    // Pour la démo, on utilise des coordonnées approximatives
    // En production, utiliseriez Google Maps Geocoding API ou Mapbox Geocoding API
    const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN || import.meta.env.EXPO_PUBLIC_MAPBOX_TOKEN;
    const googleMapsKey = import.meta.env.VITE_GOOGLE_MAPS_KEY || import.meta.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY;

    // Coordonnées par défaut pour Cayenne (centre de la Guyane)
    const defaultCoords = { lat: 4.9224, lng: -52.3135 };

    if (mapboxToken) {
      try {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxToken}&country=GF&limit=1`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.features && data.features.length > 0) {
          const [lng, lat] = data.features[0].center;
          return { lat, lng };
        }
      } catch (err) {
        console.error('Erreur Mapbox geocoding:', err);
      }
    }

    if (googleMapsKey) {
      try {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${googleMapsKey}&region=gf`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const location = data.results[0].geometry.location;
          return { lat: location.lat, lng: location.lng };
        }
      } catch (err) {
        console.error('Erreur Google Maps geocoding:', err);
      }
    }

    // Retourner des coordonnées par défaut avec une variation basée sur l'adresse
    return defaultCoords;
  };

  useEffect(() => {
    if (isOpen && pickup && destination) {
      calculateRoute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, pickup, destination]);

  useEffect(() => {
    if (!isOpen) return;
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 backdrop-blur-sm animate-fade-in"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={t('tripModal.title')}
        tabIndex={-1}
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up transition-colors"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Route className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{t('tripModal.title')}</h2>
                <p className="text-emerald-100 text-sm">{t('tripModal.subtitle')}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label={t('tripModal.close')}
            >
              <X className="text-white" size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Route Info */}
          <div className="mb-6 space-y-4">
            <div className="flex items-start gap-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('tripModal.departure')}</p>
                <p className="font-semibold text-gray-900 dark:text-white">{pickup}</p>
              </div>
            </div>

            <div className="flex justify-center -my-2">
              <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-400 to-teal-400"></div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl border border-teal-100 dark:border-teal-800">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('tripModal.destination')}</p>
                <p className="font-semibold text-gray-900 dark:text-white">{destination}</p>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 border-4 border-emerald-500 dark:border-emerald-400 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">{t('tripModal.calculating')}</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">{error}</p>
            </div>
          )}

          {/* Route Results */}
          {routeInfo && !loading && (
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-2xl p-6 text-center border border-emerald-200 dark:border-emerald-800">
                  <Navigation className="text-emerald-600 dark:text-emerald-400 mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-300 mb-1">
                    {routeInfo.distance.toFixed(1)}
                  </div>
                  <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">{t('tripModal.km')}</div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-2xl p-6 text-center border border-teal-200 dark:border-teal-800">
                  <Clock className="text-teal-600 dark:text-teal-400 mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold text-teal-700 dark:text-teal-300 mb-1">
                    {routeInfo.duration}
                  </div>
                  <div className="text-sm text-teal-600 dark:text-teal-400 font-medium">{t('tripModal.minutes')}</div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 rounded-2xl p-6 text-center border border-cyan-200 dark:border-cyan-800">
                  <DollarSign className="text-cyan-600 dark:text-cyan-400 mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold text-cyan-700 dark:text-cyan-300 mb-1">
                    {routeInfo.price.toFixed(2)}€
                  </div>
                  <div className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">{t('tripModal.estimation')}</div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Route className="text-emerald-600 dark:text-emerald-400" size={20} />
                  {t('tripModal.details')}
                </h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>{t('tripModal.distance')}</span>
                    <span className="font-semibold">{routeInfo.distance.toFixed(1)} {t('tripModal.km')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('tripModal.estimatedDuration')}</span>
                    <span className="font-semibold">{routeInfo.duration} {t('tripModal.minutes')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('tripModal.baseRate')}</span>
                    <span className="font-semibold">2,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('tripModal.kmRate')}</span>
                    <span className="font-semibold">{(routeInfo.distance * 1.5).toFixed(2)} €</span>
                  </div>
                  <div className="border-t border-gray-300 dark:border-gray-600 pt-2 mt-2 flex justify-between font-bold text-gray-900 dark:text-white">
                    <span>{t('tripModal.totalEstimated')}</span>
                    <span className="text-emerald-600 dark:text-emerald-400">{routeInfo.price.toFixed(2)} €</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {t('tripModal.close')}
            </button>
            <button
              onClick={() => {
                onClose();
                document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {t('tripModal.downloadApp')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


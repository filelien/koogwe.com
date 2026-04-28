import { MapPin, Clock, Shield } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from '../i18n/context';
import TripSimulationModal from './TripSimulationModal';

export default function Hero() {
  const { t } = useTranslation();
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSimulation = () => {
    if (pickup && destination) {
      setIsModalOpen(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/258510/pexels-photo-258510.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
              {t('hero.subtitle')}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 mb-4 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <p className="text-lg sm:text-xl text-emerald-200 mb-12 max-w-3xl mx-auto font-semibold">
            {t('slogan')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white">
              <Clock className="text-emerald-300" size={20} />
              <span className="font-medium">{t('hero.available247')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white">
              <Shield className="text-emerald-300" size={20} />
              <span className="font-medium">{t('hero.verifiedDrivers')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white">
              <MapPin className="text-emerald-300" size={20} />
              <span className="font-medium">{t('hero.realTimeGPS')}</span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('hero.simulateTrip')}</h3>
            <div className="space-y-4">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600 dark:text-emerald-400" size={20} />
                <input
                  type="text"
                  placeholder={t('hero.pickup')}
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-emerald-500 dark:focus:border-emerald-400 focus:outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-600 dark:text-teal-400" size={20} />
                <input
                  type="text"
                  placeholder={t('hero.destination')}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-emerald-500 dark:focus:border-emerald-400 focus:outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                />
              </div>
              <button
                onClick={handleSimulation}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                {t('hero.estimateTrip')}
              </button>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 rounded-full font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t('hero.orderRide')}
            </button>
            <button
              onClick={() => document.getElementById('drivers')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              {t('hero.becomeDriver')}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>

      <TripSimulationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pickup={pickup}
        destination={destination}
      />
    </section>
  );
}

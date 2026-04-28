import { MapPin, CheckCircle, Clock } from 'lucide-react';
import { useState, useMemo } from 'react';
import MapView from './MapView';
import { useTranslation } from '../i18n/context';
import { languages } from '../i18n/translations';

export default function Coverage() {
  const { t } = useTranslation();
  const [selectedCity, setSelectedCity] = useState('Cayenne');
  
  const cities = useMemo(() => [
    {
      name: 'Cayenne',
      status: 'active' as const,
      population: '~60 000 hab.',
      description: t('coverage.cayenneDesc')
    },
    {
      name: 'Kourou',
      status: 'active' as const,
      population: '~25 000 hab.',
      description: t('coverage.kourouDesc')
    },
    {
      name: 'Saint-Laurent-du-Maroni',
      status: 'active' as const,
      population: '~45 000 hab.',
      description: t('coverage.saintLaurentDesc')
    },
    {
      name: 'Matoury',
      status: 'coming' as const,
      population: '~32 000 hab.',
      description: t('coverage.matouryDesc')
    },
    {
      name: 'Remire-Montjoly',
      status: 'coming' as const,
      population: '~26 000 hab.',
      description: t('coverage.remireDesc')
    }
  ], [t]);

  return (
    <section id="coverage" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full font-semibold mb-6">
            <MapPin size={20} />
            <span>{t('coverage.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('coverage.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('coverage.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8">{t('coverage.interactiveMap')}</h3>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-8 border border-white/20">
                <MapView selectedCity={selectedCity} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="text-emerald-300" size={20} />
                    <span className="font-semibold">3 {t('coverage.activeCities')}</span>
                  </div>
                  <p className="text-sm text-emerald-100">{t('coverage.activeNow')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="text-emerald-300" size={20} />
                    <span className="font-semibold">2 {t('coverage.activeCities')}</span>
                  </div>
                  <p className="text-sm text-emerald-100">{t('coverage.comingSoon')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('coverage.citiesCovered')}</h3>
            {cities.map((city, index) => (
              <div
                key={index}
                onClick={() => setSelectedCity(city.name)}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700 ${
                  selectedCity === city.name ? 'ring-2 ring-emerald-500 dark:ring-emerald-400' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin
                        className={city.status === 'active' ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-gray-500'}
                        size={24}
                      />
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{city.name}</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{city.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{city.population}</p>
                  </div>
                  <div>
                    {city.status === 'active' ? (
                      <span className="inline-flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold">
                        <CheckCircle size={16} />
                        {t('coverage.active')}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-semibold">
                        <Clock size={16} />
                        {t('coverage.coming')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{t('coverage.multilingual')}</h3>
            <p className="text-gray-300 text-lg">
              {t('coverage.multilingualDesc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {languages.map((lang) => (
              <div
                key={lang.code}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <div className="text-5xl mb-4">{lang.flag}</div>
                <p className="font-bold text-lg mb-1">{lang.name}</p>
                <p className="text-sm text-gray-400">{lang.code.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

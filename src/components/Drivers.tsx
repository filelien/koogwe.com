import { DollarSign, Clock, TrendingUp, Car, Check } from 'lucide-react';
import { useTranslation } from '../i18n/context';
import { useNavigate } from 'react-router-dom';

export default function Drivers() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const benefits = [
    t('drivers.benefit1'),
    t('drivers.benefit2'),
    t('drivers.benefit3'),
    t('drivers.benefit4'),
    t('drivers.benefit5'),
    t('drivers.benefit6')
  ];

  const stats = [
    { icon: DollarSign, value: '2000€+', label: t('drivers.stat1'), color: 'from-emerald-500 to-teal-600' },
    { icon: Clock, value: '100%', label: t('drivers.stat2'), color: 'from-teal-500 to-cyan-600' },
    { icon: TrendingUp, value: '500+', label: t('drivers.stat3'), color: 'from-cyan-500 to-blue-600' },
    { icon: Car, value: '5 000+', label: t('drivers.stat4'), color: 'from-blue-500 to-violet-600' }
  ];
  return (
    <section id="drivers" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full font-semibold mb-6">
              {t('drivers.badge')}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('drivers.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t('drivers.description')}
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                    <Check className="text-emerald-600" size={16} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/devenir-chauffeur')}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {t('drivers.join')}
              </button>
              <button
                onClick={() => document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 rounded-full font-bold text-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-300"
              >
                {t('drivers.seeVehicles')}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/1416169/pexels-photo-1416169.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt={t('drivers.badge')}
                className="w-full h-80 object-cover rounded-2xl mb-8"
              />

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                {t('drivers.requirements')}
              </h3>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                {t('drivers.requirementsDesc')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Car className="text-white" size={40} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-center">{t('drivers.vehicle')}</h4>
                <p className="text-emerald-100 text-center mb-4">{t('drivers.vehicleDesc')}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-emerald-200">
                  <Check size={16} />
                  <span>{t('drivers.vehicleGoodCondition')}</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-center">{t('drivers.license')}</h4>
                <p className="text-emerald-100 text-center mb-4">{t('drivers.licenseDesc')}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-emerald-200">
                  <Check size={16} />
                  <span>{t('drivers.licenseExperience')}</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Check className="text-white" size={40} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-center">{t('drivers.verification')}</h4>
                <p className="text-emerald-100 text-center mb-4">{t('drivers.verificationDesc')}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-emerald-200">
                  <Check size={16} />
                  <span>{t('drivers.verificationQuick')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

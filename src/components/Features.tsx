import { Zap, MapPin, CreditCard, Star, History, Users, Navigation, DollarSign } from 'lucide-react';
import { useTranslation } from '../i18n/context';

export default function Features() {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Zap,
      title: t('features.quickOrder'),
      description: t('features.quickOrderDesc'),
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: MapPin,
      title: t('features.realTimeGPS'),
      description: t('features.realTimeGPSDesc'),
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: CreditCard,
      title: t('features.securePayments'),
      description: t('features.securePaymentsDesc'),
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Star,
      title: t('features.rating'),
      description: t('features.ratingDesc'),
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: History,
      title: t('features.history'),
      description: t('features.historyDesc'),
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: Users,
      title: t('features.carpooling'),
      description: t('features.carpoolingDesc'),
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Navigation,
      title: t('features.fleetManagement'),
      description: t('features.fleetManagementDesc'),
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: DollarSign,
      title: t('features.transparentPricing'),
      description: t('features.transparentPricingDesc'),
      color: 'from-rose-500 to-red-600'
    }
  ];
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('features.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('features.ready')}
            </h3>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              {t('features.readyDesc')}
            </p>
            <button
              onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-white text-emerald-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              {t('features.downloadNow')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

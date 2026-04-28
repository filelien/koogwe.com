import { Shield, CheckCircle, Lock, HeadphonesIcon, MapPin, FileCheck } from 'lucide-react';
import { useTranslation } from '../i18n/context';

export default function Security() {
  const { t } = useTranslation();
  
  const securityFeatures = [
    {
      icon: CheckCircle,
      title: t('security.driverVerification'),
      description: t('security.driverVerificationDesc'),
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: MapPin,
      title: t('security.realTimeTracking'),
      description: t('security.realTimeTrackingDesc'),
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: HeadphonesIcon,
      title: t('security.support247'),
      description: t('security.support247Desc'),
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Lock,
      title: t('security.dataProtection'),
      description: t('security.dataProtectionDesc'),
      color: 'from-blue-500 to-violet-600'
    }
  ];

  const trustStats = [
    { value: '100%', label: t('security.verifiedDrivers') },
    { value: '24/7', label: t('security.supportAvailable') },
    { value: '10k+', label: t('security.secureRides') },
    { value: '4.8/5', label: t('security.averageRating') }
  ];
  return (
    <section id="security" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full font-semibold mb-6">
            <Shield size={20} />
            <span>{t('security.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('security.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('security.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-600 hover:border-emerald-300 dark:hover:border-emerald-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <FileCheck className="text-emerald-400 mb-6" size={64} />
                <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                  {t('security.verificationProcess')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                      <CheckCircle className="text-emerald-400" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{t('security.identityVerification')}</p>
                      <p className="text-gray-400">{t('security.identityVerificationDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                      <CheckCircle className="text-emerald-400" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{t('security.validLicense')}</p>
                      <p className="text-gray-400">{t('security.validLicenseDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                      <CheckCircle className="text-emerald-400" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{t('security.criminalRecord')}</p>
                      <p className="text-gray-400">{t('security.criminalRecordDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                      <CheckCircle className="text-emerald-400" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{t('security.professionalInsurance')}</p>
                      <p className="text-gray-400">{t('security.professionalInsuranceDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <img
                    src="https://images.pexels.com/photos/5668837/pexels-photo-5668837.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt={t('security.badge')}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  <div className="text-center">
                    <p className="text-xl font-semibold mb-2">{t('security.localTrust')}</p>
                    <p className="text-gray-400">
                      {t('security.localTrustDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

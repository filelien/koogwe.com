import { Smartphone, Star, Download as DownloadIcon } from 'lucide-react';
import { useTranslation } from '../i18n/context';

export default function Download() {
  const { t } = useTranslation();
  const iosUrl = import.meta.env.VITE_IOS_APP_URL || '#';
  const androidUrl = import.meta.env.VITE_ANDROID_APP_URL || '#';
  return (
    <section id="download" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full font-semibold mb-6">
              <Smartphone size={20} />
              <span>{t('download.badge')}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('download.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t('download.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={iosUrl}
                target={iosUrl === '#' ? undefined : '_blank'}
                rel={iosUrl === '#' ? undefined : 'noopener noreferrer'}
                className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-xl"
                aria-label="Telecharger KOOGWE sur App Store"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">{t('download.downloadOn')}</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>

              <a
                href={androidUrl}
                target={androidUrl === '#' ? undefined : '_blank'}
                rel={androidUrl === '#' ? undefined : 'noopener noreferrer'}
                className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-xl"
                aria-label="Telecharger KOOGWE sur Google Play"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">{t('download.availableOn')}</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <span className="font-bold text-gray-900 dark:text-white">{t('download.rating')}</span>
              </div>
              <div className="h-8 w-px bg-gray-300 dark:bg-gray-600"></div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('download.moreThan')}</p>
                <p className="font-bold text-gray-900 dark:text-white">{t('download.downloads')}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-start gap-4">
                <DownloadIcon className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    {t('download.firstRide')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('download.firstRideDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{t('download.scanToDownload')}</h3>
                <p className="text-emerald-100">
                  {t('download.scanDesc')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 flex items-center justify-center mb-8">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=https://koogwe.app/download"
                  alt="QR Code pour télécharger l'application KOOGWE"
                  className="w-64 h-64 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <img
                  src="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="KOOGWE App Screenshot 1"
                  className="rounded-xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/887839/pexels-photo-887839.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="KOOGWE App Screenshot 2"
                  className="rounded-xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/887758/pexels-photo-887758.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="KOOGWE App Screenshot 3"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('download.step1')}</h4>
            <p className="text-gray-600 dark:text-gray-300">{t('download.step1Desc')}</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('download.step2')}</h4>
            <p className="text-gray-600 dark:text-gray-300">{t('download.step2Desc')}</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('download.step3')}</h4>
            <p className="text-gray-600 dark:text-gray-300">{t('download.step3Desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

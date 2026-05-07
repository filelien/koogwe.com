import { useTranslation } from '../i18n/context';

const fallbackImages = {
  tembe: 'https://images.unsplash.com/photo-1522542550061-71fd4b42f3a3?auto=format&fit=crop&w=1200&q=80',
  paddle: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  landscape: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  roadSign: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
};

function onImageFallback(event: { currentTarget: HTMLImageElement }, fallback: string) {
  event.currentTarget.src = fallback;
}

export default function CultureHighlight() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 font-semibold text-sm">
              {t('culture.label')}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              {t('culture.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              {t('culture.description')}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-emerald-50 dark:bg-emerald-900/20 p-6 shadow-lg border border-emerald-100 dark:border-emerald-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('culture.tembe')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('culture.tembeDesc')}</p>
              </div>
              <div className="rounded-3xl bg-cyan-50 dark:bg-cyan-900/20 p-6 shadow-lg border border-cyan-100 dark:border-cyan-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('culture.paddle')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('culture.paddleDesc')}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-900">
              <img
                src="/images/guyana-tembe.jpg"
                alt="Art tembé guyanais"
                className="w-full h-80 object-cover"
                loading="lazy"
                onError={(event) => onImageFallback(event, fallbackImages.tembe)}
              />
              <div className="p-5">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{t('culture.tembe')}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('culture.tembeDesc')}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg">
                <img
                  src="/images/guyana-paddle.jpg"
                  alt="Pagaie guyanaise peinte"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                  onError={(event) => onImageFallback(event, fallbackImages.paddle)}
                />
                <div className="p-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{t('culture.paddle')}</p>
                </div>
              </div>
              <div className="rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg">
                <img
                  src="/images/guyana-landscape.jpg"
                  alt="Paysage guyanais avec palmiers"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                  onError={(event) => onImageFallback(event, fallbackImages.landscape)}
                />
                <div className="p-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{t('culture.landscape')}</p>
                </div>
              </div>
              <div className="rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg">
                <img
                  src="/images/guyana-road-sign.jpg"
                  alt="Panneau de route guyanais"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                  onError={(event) => onImageFallback(event, fallbackImages.roadSign)}
                />
                <div className="p-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{t('culture.roadSign')}</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">{t('culture.photoText')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

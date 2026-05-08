import { useTranslation } from '../i18n/context';
import { languages } from '../i18n/translations';
import { Globe, Download } from 'lucide-react';

const fallbackImages = {
  tembe: 'https://images.unsplash.com/photo-1522542550061-71fd4b42f3a3?auto=format&fit=crop&w=1200&q=80',
  paddle: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  landscape: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  roadSign: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
};

function onImageFallback(event: { currentTarget: HTMLImageElement }, fallback: string) {
  event.currentTarget.src = fallback;
}

const downloadImage = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error('Erreur lors du téléchargement:', error);
    window.open(url, '_blank');
  }
};

export default function CultureHighlight() {
  const { t, language } = useTranslation();

  return (
    <section id="culture" className="py-24 bg-white dark:bg-gray-900 transition-colors">
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
            {/* Main large image - Art Tembé (now at top) */}
            <div className="rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-900 group">
              <div className="relative">
                <img
                  src="/images/guyana-tembe.jpg"
                  alt={t('culture.tembeDesc')}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  onError={(event) => onImageFallback(event, fallbackImages.tembe)}
                />
                <button
                  onClick={() => downloadImage('/images/guyana-tembe.jpg', 'art-tembe-guyanais.jpg')}
                  className="absolute top-4 right-4 p-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all opacity-0 group-hover:opacity-100"
                  title="Télécharger l'image"
                >
                  <Download size={20} className="text-emerald-600 dark:text-emerald-400" />
                </button>
              </div>
              <div className="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/20 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{t('culture.tembe')}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('culture.tembeDesc')}</p>
                </div>
                <button
                  onClick={() => downloadImage('/images/guyana-tembe.jpg', 'art-tembe-guyanais.jpg')}
                  className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors"
                  title="Télécharger"
                >
                  <Download size={18} className="text-emerald-600 dark:text-emerald-400" />
                </button>
              </div>
            </div>


            {/* Guyane Stats Section */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 shadow-xl text-white">
              <div className="flex items-center gap-2 mb-5">
                <Globe className="text-emerald-300" size={20} />
                <h3 className="font-semibold">La Guyane en chiffres</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-300">83.5K</p>
                  <p className="text-xs text-emerald-100">km² de territoire</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-300">281K</p>
                  <p className="text-xs text-emerald-100">habitants</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-300">5</p>
                  <p className="text-xs text-emerald-100">langues parlées</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-300">1964</p>
                  <p className="text-xs text-emerald-100">département français</p>
                </div>
              </div>
              <p className="text-xs text-emerald-200 mt-4 text-center">KOOGWE, le transport local au cœur de la Guyane</p>
            </div>
          </div>

          <div className="grid gap-4">
            {/* Signalisation locale - maintenant en haut */}
            <div className="rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg group">
              <div className="relative">
                <img
                  src="/images/guyana-road-sign.jpg"
                  alt={t('culture.roadSign')}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                  onError={(event) => onImageFallback(event, fallbackImages.roadSign)}
                />
                <button
                  onClick={() => downloadImage('/images/guyana-road-sign.jpg', 'panneau-routier-guyane.jpg')}
                  className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white dark:hover:bg-gray-800 transition-all opacity-0 group-hover:opacity-100"
                  title="Télécharger l'image"
                >
                  <Download size={16} className="text-green-600 dark:text-green-400" />
                </button>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{t('culture.roadSign')}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{t('culture.roadSignDesc')}</p>
                </div>
                <button
                  onClick={() => downloadImage('/images/guyana-road-sign.jpg', 'panneau-routier-guyane.jpg')}
                  className="p-1.5 hover:bg-green-200 dark:hover:bg-green-800 rounded-lg transition-colors"
                  title="Télécharger"
                >
                  <Download size={14} className="text-green-600 dark:text-green-400" />
                </button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Art Tembé - format large */}
              <div className="rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-900 group sm:col-span-2">
                <div className="relative">
                  <img
                    src="/images/guyana-landscape.jpg"
                    alt={t('culture.landscape')}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    onError={(event) => onImageFallback(event, fallbackImages.landscape)}
                  />
                  <button
                    onClick={() => downloadImage('/images/guyana-landscape.jpg', 'littoral-guyanais-cayenne.jpg')}
                    className="absolute top-4 right-4 p-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all opacity-0 group-hover:opacity-100"
                    title="Télécharger l'image"
                  >
                    <Download size={20} className="text-emerald-600 dark:text-emerald-400" />
                  </button>
                </div>
                <div className="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/20 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{t('culture.landscape')}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t('culture.landscapeDesc')}</p>
                  </div>
                  <button
                    onClick={() => downloadImage('/images/guyana-landscape.jpg', 'littoral-guyanais-cayenne.jpg')}
                    className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    title="Télécharger"
                  >
                    <Download size={18} className="text-blue-600 dark:text-blue-400" />
                  </button>
                </div>
              </div>
              {/* Pagaie traditionnelle - maintenant en bas */}
              <div className="rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg group">
                <div className="relative">
                  <img
                    src="/images/guyana-paddle.jpg"
                    alt={t('culture.paddleDesc')}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                    onError={(event) => onImageFallback(event, fallbackImages.paddle)}
                  />
                  <button
                    onClick={() => downloadImage('/images/guyana-paddle.jpg', 'pagaie-traditionnelle-guyane.jpg')}
                    className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white dark:hover:bg-gray-800 transition-all opacity-0 group-hover:opacity-100"
                    title="Télécharger l'image"
                  >
                    <Download size={16} className="text-amber-600 dark:text-amber-400" />
                  </button>
                </div>
                <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{t('culture.paddle')}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{t('culture.paddleDesc')}</p>
                  </div>
                  <button
                    onClick={() => downloadImage('/images/guyana-paddle.jpg', 'pagaie-traditionnelle-guyane.jpg')}
                    className="p-1.5 hover:bg-amber-200 dark:hover:bg-amber-800 rounded-lg transition-colors"
                    title="Télécharger"
                  >
                    <Download size={14} className="text-amber-600 dark:text-amber-400" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

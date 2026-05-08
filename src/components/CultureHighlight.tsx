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
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/20 p-6 shadow-lg border border-emerald-100 dark:border-emerald-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('culture.tembe')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('culture.tembeDesc')}</p>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 shadow-lg border border-amber-100 dark:border-amber-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('culture.paddle')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('culture.paddleDesc')}</p>
              </div>
            </div>

            {/* Languages Section */}
            <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-5">
                <Globe className="text-emerald-400" size={20} />
                <h3 className="font-semibold text-white">{t('coverage.multilingual')}</h3>
              </div>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                      language === lang.code
                        ? 'bg-emerald-500/30 ring-2 ring-emerald-400'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{lang.name}</p>
                      <p className="text-xs text-gray-400">
                        {lang.code === 'fr' && 'France / Guyane'}
                        {lang.code === 'en' && 'Royaume-Uni'}
                        {lang.code === 'pt' && 'Brésil'}
                        {lang.code === 'es' && 'Espagne'}
                        {lang.code === 'cr' && 'Guyane Française'}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-gray-500">{lang.code.toUpperCase()}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">{t('coverage.multilingualDesc')}</p>
            </div>
          </div>

          <div className="grid gap-4">
            {/* Main large image - Littoral guyanais */}
            <div className="rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-900 group">
              <div className="relative">
                <img
                  src="/images/guyana-landscape.jpg"
                  alt="Plage de Cayenne - Cocotiers et océan Atlantique"
                  className="w-full h-80 object-cover"
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
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Littoral guyanais</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Plage de Cayenne - Cocotiers et océan Atlantique</p>
                </div>
                <button
                  onClick={() => downloadImage('/images/guyana-landscape.jpg', 'littoral-guyanais-cayenne.jpg')}
                  className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors"
                  title="Télécharger"
                >
                  <Download size={18} className="text-emerald-600 dark:text-emerald-400" />
                </button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg group">
                <div className="relative">
                  <img
                    src="/images/guyana-tembe.jpg"
                    alt="Motifs colorés tembé - Art traditionnel guyanais"
                    className="w-full h-40 object-cover"
                    loading="lazy"
                    onError={(event) => onImageFallback(event, fallbackImages.tembe)}
                  />
                  <button
                    onClick={() => downloadImage('/images/guyana-tembe.jpg', 'art-tembe-guyanais.jpg')}
                    className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white dark:hover:bg-gray-800 transition-all opacity-0 group-hover:opacity-100"
                    title="Télécharger l'image"
                  >
                    <Download size={16} className="text-emerald-600 dark:text-emerald-400" />
                  </button>
                </div>
                <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{t('culture.tembe')}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Motifs créole guyanais</p>
                  </div>
                  <button
                    onClick={() => downloadImage('/images/guyana-tembe.jpg', 'art-tembe-guyanais.jpg')}
                    className="p-1.5 hover:bg-emerald-200 dark:hover:bg-emerald-800 rounded-lg transition-colors"
                    title="Télécharger"
                  >
                    <Download size={14} className="text-emerald-600 dark:text-emerald-400" />
                  </button>
                </div>
              </div>
              <div className="rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg group">
                <div className="relative">
                  <img
                    src="/images/guyana-paddle.jpg"
                    alt="Pagaie traditionnelle peinte - Artisanat guyanais"
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
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Pagaie décorative</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Artisanat fluvial traditionnel</p>
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
              <div className="rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg group">
                <div className="relative">
                  <img
                    src="/images/guyana-road-sign.jpg"
                    alt="Panneau routier en Guyane - Signalisation locale"
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
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Signalisation locale</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Sur les routes de Guyane française</p>
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
            </div>
            <div className="rounded-[2rem] border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-5 shadow-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center font-medium">🇬🇫 KOOGWE célèbre les traditions et le patrimoine culturel de la Guyane française</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

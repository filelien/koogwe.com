import { useTranslation } from '../i18n/context';
import Reveal from './motion/Reveal';

const cultureImages = {
  tembe: '/images/guyana-tembe.png',
  paddle: '/images/guyana-paddle.png',
  streets: '/images/guyana-streets.png',
  landscape: '/images/guyana-landscape.png',
} as const;

const fallbackImages = {
  tembe: 'https://images.unsplash.com/photo-1522542550061-71fd4b42f3a3?auto=format&fit=crop&w=1200&q=80',
  paddle: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  streets: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  landscape: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
};

function onImageFallback(event: { currentTarget: HTMLImageElement }, fallback: string) {
  event.currentTarget.src = fallback;
}

type CulturePhotoCardProps = {
  src: string;
  fallback: string;
  alt: string;
  title: string;
  description: string;
  variant?: 'contain' | 'cover';
  imageClassName?: string;
  delay?: number;
};

function CulturePhotoCard({
  src,
  fallback,
  alt,
  title,
  description,
  variant = 'cover',
  imageClassName = '',
  delay = 0,
}: CulturePhotoCardProps) {
  const isContain = variant === 'contain';

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group h-full rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col">
        <div className={`relative overflow-hidden ${isContain ? 'bg-neutral-50 dark:bg-gray-800 flex items-center justify-center min-h-[13rem] sm:min-h-[15rem]' : 'min-h-[14rem] sm:min-h-[18rem]'}`}>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={(event) => onImageFallback(event, fallback)}
            className={
              isContain
                ? `max-h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.02] ${imageClassName}`
                : `w-full h-full min-h-[14rem] sm:min-h-[18rem] object-cover object-center transition-transform duration-700 group-hover:scale-105 ${imageClassName}`
            }
          />
          {!isContain && (
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
          )}
        </div>
        <div className="p-5 flex-1 flex flex-col border-t border-gray-100 dark:border-gray-800">
          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{title}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
        </div>
      </article>
    </Reveal>
  );
}

export default function CultureHighlight() {
  const { t } = useTranslation();

  return (
    <section id="culture" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <Reveal className="space-y-6">
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
              <div className="rounded-3xl bg-amber-50 dark:bg-amber-900/20 p-6 shadow-lg border border-amber-100 dark:border-amber-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('culture.streets')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('culture.streetsDesc')}</p>
              </div>
              <div className="rounded-3xl bg-sky-50 dark:bg-sky-900/20 p-6 shadow-lg border border-sky-100 dark:border-sky-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('culture.landscape')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('culture.landscapeDesc')}</p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            <CulturePhotoCard
              src={cultureImages.tembe}
              fallback={fallbackImages.tembe}
              alt={t('culture.tembeAlt')}
              title={t('culture.tembe')}
              description={t('culture.tembeDesc')}
              variant="contain"
              delay={0}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <CulturePhotoCard
                src={cultureImages.streets}
                fallback={fallbackImages.streets}
                alt={t('culture.streetsAlt')}
                title={t('culture.streets')}
                description={t('culture.streetsDesc')}
                delay={0.08}
              />
              <CulturePhotoCard
                src={cultureImages.landscape}
                fallback={fallbackImages.landscape}
                alt={t('culture.landscapeAlt')}
                title={t('culture.landscape')}
                description={t('culture.landscapeDesc')}
                imageClassName="object-[center_30%]"
                delay={0.12}
              />
            </div>

            <CulturePhotoCard
              src={cultureImages.paddle}
              fallback={fallbackImages.paddle}
              alt={t('culture.paddleAlt')}
              title={t('culture.paddle')}
              description={t('culture.paddleDesc')}
              variant="contain"
              delay={0.16}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

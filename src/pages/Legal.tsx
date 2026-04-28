import PageHero from '../components/motion/PageHero';
import Reveal from '../components/motion/Reveal';
import { useTranslation } from '../i18n/context';

export default function Legal() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <PageHero
        badge={t('staticPages.legalBadge')}
        title={t('staticPages.legalHeroTitle')}
        subtitle={t('staticPages.legalHeroSubtitle')}
      />

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <article className="max-w-none space-y-8 text-gray-600 dark:text-gray-300">
            <section>
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                {t('staticPages.legalSection1Title')}
              </h2>
              <p className="leading-relaxed">{t('staticPages.legalSection1Text')}</p>
            </section>
            <section>
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                {t('staticPages.legalSection2Title')}
              </h2>
              <p className="leading-relaxed">{t('staticPages.legalSection2Text')}</p>
            </section>
            <section>
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                {t('staticPages.legalSection3Title')}
              </h2>
              <p className="leading-relaxed">{t('staticPages.legalSection3Text')}</p>
            </section>
          </article>
        </Reveal>
      </div>
    </main>
  );
}

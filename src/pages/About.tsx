import { Heart, Target, Users } from 'lucide-react';
import PageHero from '../components/motion/PageHero';
import Reveal from '../components/motion/Reveal';
import { useTranslation } from '../i18n/context';

export default function About() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: Target,
      titleKey: 'staticPages.aboutMissionTitle',
      bodyKey: 'staticPages.aboutMissionText',
      accent: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Heart,
      titleKey: 'staticPages.aboutVisionTitle',
      bodyKey: 'staticPages.aboutVisionText',
      accent: 'from-teal-500 to-cyan-600',
    },
    {
      icon: Users,
      titleKey: 'staticPages.aboutValuesTitle',
      bodyKey: 'staticPages.aboutValuesText',
      accent: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <PageHero
        badge={t('staticPages.aboutBadge')}
        title={t('staticPages.aboutHeroTitle')}
        subtitle={t('staticPages.aboutHeroSubtitle')}
      />

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.titleKey} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-gray-100 bg-gray-50/80 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
                  <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.accent} text-white shadow-md`}
                  >
                    <Icon size={26} />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t(card.titleKey)}</h2>
                  <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">{t(card.bodyKey)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-16 rounded-3xl border border-emerald-200/70 bg-gradient-to-r from-emerald-50 via-white to-teal-50 p-10 text-center dark:border-emerald-900/40 dark:from-emerald-950/30 dark:via-gray-900 dark:to-teal-950/20">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-100">{t('staticPages.aboutClosing')}</p>
        </Reveal>
      </div>
    </main>
  );
}

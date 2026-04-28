import { Mail, Clock, MessageCircle } from 'lucide-react';
import PageHero from '../components/motion/PageHero';
import Reveal from '../components/motion/Reveal';
import ContactForm from '../components/ContactForm';
import { useTranslation } from '../i18n/context';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <PageHero
        badge={t('staticPages.contactBadge')}
        title={t('staticPages.contactHeroTitle')}
        subtitle={t('staticPages.contactHeroSubtitle')}
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <Reveal className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl border border-emerald-200/80 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-emerald-900/40 dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/40">
                <Mail className="text-emerald-700 dark:text-emerald-400" size={22} />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('staticPages.contactEmailTitle')}
              </h2>
              <a
                href="mailto:koogwe@outlook.fr"
                className="mt-2 inline-block text-emerald-600 hover:underline dark:text-emerald-400"
              >
                koogwe@outlook.fr
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/40">
                <Clock className="text-teal-700 dark:text-teal-400" size={22} />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('staticPages.contactHoursTitle')}
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{t('staticPages.contactHoursText')}</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 dark:border-emerald-900/30 dark:from-emerald-950/40 dark:to-teal-950/40">
              <MessageCircle className="mb-3 text-emerald-600 dark:text-emerald-400" size={22} />
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {t('staticPages.contactAsideHint')}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </main>
  );
}

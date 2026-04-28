import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import PageHero from '../components/motion/PageHero';
import Reveal from '../components/motion/Reveal';
import { useTranslation } from '../i18n/context';

export default function FAQ() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(0);

  const items = [0, 1, 2, 3, 4].map((i) => ({
    q: t(`staticPages.faqQ${i}`),
    a: t(`staticPages.faqA${i}`),
  }));

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <PageHero
        badge={t('staticPages.faqBadge')}
        title={t('staticPages.faqHeroTitle')}
        subtitle={t('staticPages.faqHeroSubtitle')}
      />

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {items.map((item, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <button
                  type="button"
                  onClick={() => setOpen(open === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-gray-50 dark:hover:bg-gray-800/80"
                  aria-expanded={open === index}
                >
                  <span className="font-semibold text-gray-900 dark:text-white">{item.q}</span>
                  <motion.span animate={{ rotate: open === index ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown className="shrink-0 text-emerald-600 dark:text-emerald-400" size={22} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="border-t border-gray-100 px-6 pb-5 pt-0 text-gray-600 dark:border-gray-800 dark:text-gray-300">
                        <p className="pt-4 leading-relaxed">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}

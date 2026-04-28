import { motion } from 'framer-motion';

type Props = {
  badge?: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ badge, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-500/30 blur-3xl animate-pulse" />
        <div className="absolute -right-10 bottom-0 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {badge && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-300/90"
          >
            {badge}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100/90"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

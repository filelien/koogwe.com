import { motion } from 'framer-motion';
import Coverage from '../components/Coverage';
import { useTranslation } from '../i18n/context';

export default function CoveragePage() {
  const { t } = useTranslation();

  return (
    <motion.main
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('header.coverage')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Nos zones de couverture
          </p>
        </motion.div>
      </div>
      <Coverage />
    </motion.main>
  );
}

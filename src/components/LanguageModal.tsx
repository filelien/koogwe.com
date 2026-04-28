import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/context';
import { languages, Language } from '../i18n/translations';

export default function LanguageModal() {
  const { language, setLanguage } = useTranslation();
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasSelectedLanguage = localStorage.getItem('language-selected');
    if (!hasSelectedLanguage) {
      setIsFirstVisit(true);
    }
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language-selected', 'true');
    setIsFirstVisit(false);
  };

  return (
    <AnimatePresence>
      {isFirstVisit && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 px-6 sm:px-12 py-12 text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl font-bold mb-3"
              >
                Application multilingue
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-white/90"
              >
                KOOGWE parle votre langue pour mieux vous servir
              </motion.p>
            </div>

            {/* Languages Grid */}
            <div className="p-8 sm:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {languages.map((lang, index) => (
                  <motion.button
                    key={lang.code}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotateZ: 2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLanguageSelect(lang.code as Language)}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-6 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    {/* Background animation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-teal-500/0 group-hover:from-emerald-400/10 group-hover:to-teal-500/10 transition-all duration-300" />

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.15,
                        }}
                        className="text-6xl mb-4"
                      >
                        {lang.flag}
                      </motion.div>

                      <div className="mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {lang.code.toUpperCase()}
                        </h3>
                      </div>

                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
                        {lang.name}
                      </p>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold"
                      >
                        Cliquez pour sélectionner
                      </motion.div>
                    </div>

                    {/* Hover border effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-500 transition-all duration-300" />
                  </motion.button>
                ))}
              </div>

              {/* Footer text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-12 text-gray-600 dark:text-gray-400"
              >
                <p className="text-sm">
                  Vous pourrez changer de langue à tout moment via le menu en haut à droite
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

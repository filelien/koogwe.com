import { Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/context';
import { languages, Language } from '../i18n/translations';

interface LanguageSelectorProps {
  isScrolled?: boolean;
}

export default function LanguageSelector({ isScrolled = false }: LanguageSelectorProps) {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600' 
            : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 drop-shadow-md'
        }`}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe size={18} />
        <span className="text-sm font-medium hidden sm:inline">
          {languages.find(l => l.code === language)?.flag || '🌐'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-2xl z-[100] overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as Language);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors ${
                language === lang.code 
                  ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-semibold' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
              {language === lang.code && (
                <span className="ml-auto text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


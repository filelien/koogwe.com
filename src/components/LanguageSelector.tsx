import { Globe, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/context';
import { languages, Language } from '../i18n/translations';

interface LanguageSelectorProps {
  isScrolled?: boolean;
}

export default function LanguageSelector({ isScrolled = false }: LanguageSelectorProps) {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);
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

  const currentLanguage = languages.find(l => l.code === language);

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
        <span className="text-lg hidden sm:inline leading-none">
          {currentLanguage?.flag || '🌐'}
        </span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-[100] overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest px-2">
              Sélectionnez votre langue
            </h3>
          </div>
          <div className="p-2 space-y-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as Language);
                  setIsOpen(false);
                }}
                onMouseEnter={() => setIsHovered(lang.code)}
                onMouseLeave={() => setIsHovered(null)}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 rounded-lg transition-all duration-200 transform ${
                  language === lang.code 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-md' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                } ${isHovered === lang.code && language !== lang.code ? 'translate-x-1' : ''}`}
              >
                <span className={`text-2xl transition-transform duration-300 ${isHovered === lang.code && language !== lang.code ? 'scale-125' : 'scale-100'}`}>
                  {lang.flag}
                </span>
                <div className="flex-1">
                  <div className="font-semibold">{lang.name}</div>
                  <div className={`text-xs ${language === lang.code ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                    {lang.code.toUpperCase()}
                  </div>
                </div>
                {language === lang.code && (
                  <span className="text-white animate-bounce">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


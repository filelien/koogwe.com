import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from './translations';

type TranslationContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('koogwe-language');
    return (saved as Language) || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('koogwe-language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language] as unknown;
    
    // Navigate through the translation object
    for (const k of keys) {
      if (value && typeof value === 'object' && k in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback to French if translation missing
        value = translations.fr as unknown;
        for (const k2 of keys) {
          if (value && typeof value === 'object' && k2 in (value as Record<string, unknown>)) {
            value = (value as Record<string, unknown>)[k2];
          } else {
            value = undefined;
            break;
          }
        }
        break;
      }
    }
    
    // Return the translation if found, otherwise return the key
    if (typeof value === 'string' && value.length > 0) {
      return value;
    }
    
    // Final fallback: return the key itself
    console.warn(`Translation missing for key: ${key} in language: ${language}`);
    return key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}


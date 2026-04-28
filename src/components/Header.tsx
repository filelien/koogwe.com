import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import { useTranslation } from '../i18n/context';
import koogweLogo from '../assets/images/koogwe-logo.png';

export default function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
      isActive
        ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30'
        : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
      isActive
        ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20'
        : 'text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50' : 'bg-white dark:bg-gray-800 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            <img src={koogweLogo} alt="KOOGWE" className="w-8 h-8 rounded-full object-cover" />
            KOOGWE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/fonctionnalites" className={navLinkClass}>
              {t('header.features')}
            </NavLink>
            <NavLink to="/chauffeurs" className={navLinkClass}>
              {t('header.drivers')}
            </NavLink>
            <NavLink to="/entreprises" className={navLinkClass}>
              {t('header.partners')}
            </NavLink>
            <NavLink to="/couverture" className={navLinkClass}>
              {t('header.coverage')}
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              {t('header.contact')}
            </NavLink>
          </nav>

          {/* Right side items */}
          <div className="flex items-center gap-3">
            <Link
              to="/devenir-chauffeur"
              className="hidden sm:inline-flex px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
            >
              {t('hero.becomeDriver')}
            </Link>
            <ThemeToggle isScrolled={isScrolled} />
            <LanguageSelector isScrolled={isScrolled} />

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <NavLink
              to="/fonctionnalites"
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.features')}
            </NavLink>
            <NavLink
              to="/chauffeurs"
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.drivers')}
            </NavLink>
            <NavLink
              to="/entreprises"
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.partners')}
            </NavLink>
            <NavLink
              to="/couverture"
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.coverage')}
            </NavLink>
            <NavLink
              to="/contact"
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.contact')}
            </NavLink>
            <NavLink
              to="/a-propos"
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.about')}
            </NavLink>
            <NavLink
              to="/faq"
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.faqNav')}
            </NavLink>
            <Link
              to="/devenir-chauffeur"
              className="block w-full mt-3 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium text-center hover:shadow-lg transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('hero.becomeDriver')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

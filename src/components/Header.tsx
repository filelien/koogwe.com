import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import { useTranslation } from '../i18n/context';
import koogweLogo from '../assets/images/koogwe-logo.png';

export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navSolid = isScrolled || !isHome;

  const scrollToSection = (id: string) => {
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navigateTo = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const linkScrollClass = navSolid
    ? 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'
    : 'text-white hover:text-emerald-300 drop-shadow-md';

  const navPageClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium whitespace-nowrap transition-colors rounded-lg px-2 py-1.5 ${
      navSolid
        ? isActive
          ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/80'
        : isActive
          ? 'text-white bg-white/20'
          : 'text-white hover:bg-white/10 drop-shadow-md'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navSolid ? 'bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link
              to="/"
              className={`flex items-center gap-3 text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent ${
                !navSolid ? 'drop-shadow-lg' : ''
              }`}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img src={koogweLogo} alt="" className="w-11 h-11 rounded-full object-cover shadow-md" />
              KOOGWE
            </Link>
          </div>

          <nav className="hidden lg:flex items-center flex-wrap gap-x-2 gap-y-2 justify-end max-w-4xl">
            <button
              type="button"
              onClick={() => scrollToSection('features')}
              className={`text-sm font-medium transition-colors whitespace-nowrap px-2 py-1.5 rounded-lg ${linkScrollClass}`}
            >
              {t('header.features')}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('drivers')}
              className={`text-sm font-medium transition-colors whitespace-nowrap px-2 py-1.5 rounded-lg ${linkScrollClass}`}
            >
              {t('header.drivers')}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('partners')}
              className={`text-sm font-medium transition-colors whitespace-nowrap px-2 py-1.5 rounded-lg ${linkScrollClass}`}
            >
              {t('header.partners')}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('coverage')}
              className={`text-sm font-medium transition-colors whitespace-nowrap px-2 py-1.5 rounded-lg ${linkScrollClass}`}
            >
              {t('header.coverage')}
            </button>
            <NavLink to="/contact" className={navPageClass}>
              {t('header.contact')}
            </NavLink>
            <NavLink to="/a-propos" className={navPageClass}>
              {t('header.about')}
            </NavLink>
            <NavLink to="/faq" className={navPageClass}>
              {t('header.faqNav')}
            </NavLink>
            <button
              type="button"
              onClick={() => scrollToSection('download')}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm"
            >
              {t('header.download')}
            </button>
            <button
              type="button"
              onClick={() => navigateTo('/devenir-chauffeur')}
              className={`text-sm font-medium transition-colors whitespace-nowrap px-4 py-2 rounded-lg ${
                navSolid
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {t('hero.becomeDriver')}
            </button>
            <div className="ml-1 flex items-center gap-2">
              <ThemeToggle isScrolled={navSolid} />
              <LanguageSelector isScrolled={navSolid} />
            </div>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              navSolid
                ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg transition-colors animate-slide-up">
          <div className="px-4 py-4 space-y-2">
            <button
              type="button"
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors font-medium"
            >
              {t('header.features')}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('drivers')}
              className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors font-medium"
            >
              {t('header.drivers')}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('partners')}
              className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors font-medium"
            >
              {t('header.partners')}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('coverage')}
              className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors font-medium"
            >
              {t('header.coverage')}
            </button>
            <NavLink
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-4 py-3 rounded-lg font-medium text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
            >
              {t('header.contact')}
            </NavLink>
            <NavLink
              to="/a-propos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-4 py-3 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
            >
              {t('header.about')}
            </NavLink>
            <NavLink
              to="/faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-4 py-3 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
            >
              {t('header.faqNav')}
            </NavLink>
            <button
              type="button"
              onClick={() => scrollToSection('download')}
              className="block w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium text-center hover:shadow-lg transition-all"
            >
              {t('header.download')}
            </button>
            <button
              type="button"
              onClick={() => navigateTo('/devenir-chauffeur')}
              className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors font-medium"
            >
              {t('hero.becomeDriver')}
            </button>
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="px-2 flex items-center gap-2">
                <ThemeToggle isScrolled={true} />
                <LanguageSelector isScrolled={true} />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

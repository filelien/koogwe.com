import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n/context';
import koogweLogo from '../assets/images/koogwe-logo.png';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
              <img src={koogweLogo} alt="" className="w-12 h-12 rounded-full object-cover transition-transform group-hover:scale-105" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                KOOGWE
              </h3>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.about')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/a-propos" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.ourStory')}
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.ourTeam')}
                </Link>
              </li>
              <li>
                <Link to="/devenir-chauffeur" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.careers')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.press')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.services')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/devenir-chauffeur" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.becomeDriver')}
                </Link>
              </li>
              <li>
                <Link to="/#partners" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.partners')}
                </Link>
              </li>
              <li>
                <Link to="/#download" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.companies')}
                </Link>
              </li>
              <li>
                <Link to="/#partners" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.fleetManagement')}
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.carpooling')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.support')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/#coverage" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.helpCenter')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link to="/#security" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.security')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.contactUs')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="border-t border-gray-800 dark:border-gray-700 pt-8 mb-8"
        >
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/80 to-gray-900 p-8 md:p-10 text-center md:text-left md:flex md:items-center md:justify-between md:gap-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">{t('staticPages.footerPromoTitle')}</h3>
              <p className="text-emerald-100/90 max-w-xl">{t('staticPages.footerPromoDesc')}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 font-semibold text-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 whitespace-nowrap"
            >
              {t('staticPages.footerPromoCta')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">{t('footer.contact')}</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin size={20} className="text-emerald-400" />
                  <span>{t('footer.address')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail size={20} className="text-emerald-400" />
                  <a href="mailto:koogwe@outlook.fr" className="hover:text-emerald-400 transition-colors">
                    koogwe@outlook.fr
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone size={20} className="text-emerald-400" />
                  <a href="tel:+594594000000" className="hover:text-emerald-400 transition-colors">
                    +594 594 00 00 00
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t('footer.newsletter')}</h4>
              <p className="text-gray-400 mb-4">
                {t('footer.newsletterDesc')}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-gray-500"
                />
                <button
                  type="button"
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {t('footer.subscribe')}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8 border-t border-gray-800">
            <div className="flex items-center gap-3">
              <img src={koogweLogo} alt="KOOGWE" className="w-12 h-12 rounded-full object-cover" />
              <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                KOOGWE
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full md:w-auto">
              <p className="text-gray-400 text-sm">
                © {currentYear} KOOGWE. {t('footer.allRightsReserved')}.
              </p>
              <div className="flex flex-wrap gap-6 text-sm justify-center md:justify-end">
                <Link to="/mentions-legales" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.terms')}
                </Link>
                <Link to="/mentions-legales" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.privacy')}
                </Link>
                <Link to="/mentions-legales" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.legal')}
                </Link>
                <Link to="/mentions-legales" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.rgpd')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

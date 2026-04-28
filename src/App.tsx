import { Routes, Route, ScrollRestoration } from 'react-router-dom';
import { TranslationProvider } from './i18n/context';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BecomeDriver from './pages/BecomeDriver';
import Contact from './pages/Contact';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';
import Features from './pages/Features';
import DriversPage from './pages/DriversPage';
import PartnersPage from './pages/PartnersPage';
import CoveragePage from './pages/CoveragePage';

function AppContent() {
  return (
    <>
      <ScrollRestoration />
      <ThemeProvider>
        <TranslationProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fonctionnalites" element={<Features />} />
                <Route path="/chauffeurs" element={<DriversPage />} />
                <Route path="/entreprises" element={<PartnersPage />} />
                <Route path="/couverture" element={<CoveragePage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/devenir-chauffeur" element={<BecomeDriver />} />
                <Route path="/mentions-legales" element={<Legal />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </TranslationProvider>
      </ThemeProvider>
    </>
  );
}

export default AppContent;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <ThemeProvider>
        <TranslationProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/devenir-chauffeur" element={<BecomeDriver />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/mentions-legales" element={<Legal />} />
            </Routes>
            <Footer />
          </div>
        </TranslationProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;

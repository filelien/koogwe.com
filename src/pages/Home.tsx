import Hero from '../components/Hero';
import CultureHighlight from '../components/CultureHighlight';
import Features from '../components/Features';
import Drivers from '../components/Drivers';
import Partners from '../components/Partners';
import Security from '../components/Security';
import Coverage from '../components/Coverage';
import Download from '../components/Download';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Hero />
      <CultureHighlight />
      <div>
        <Features />
      </div>
      <div>
        <Drivers />
      </div>
      <div>
        <Partners />
      </div>
      <div>
        <Security />
      </div>
      <div>
        <Coverage />
      </div>
      <div>
        <Download />
      </div>
    </main>
  );
}

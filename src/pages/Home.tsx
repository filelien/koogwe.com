import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Drivers from '../components/Drivers';
import Partners from '../components/Partners';
import Security from '../components/Security';
import Coverage from '../components/Coverage';
import Download from '../components/Download';

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <Hero />
      <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <Features />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <Drivers />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <Partners />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <Security />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <Coverage />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <Download />
      </motion.div>
    </motion.main>
  );
}

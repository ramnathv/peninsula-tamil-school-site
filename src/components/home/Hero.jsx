import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { heroContent, schoolInfo, t } from '../../data/content';

export default function Hero() {
  const { language } = useLanguage();
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/banner_1.webp`}
          alt="Students celebrating Pongal, a traditional Tamil harvest festival at Peninsula Tamil School"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-tamil-maroon/90 via-tamil-red/80 to-tamil-maroon/90" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
          >
            {t(heroContent.title, language)}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/95 mb-8 font-light"
          >
            {t(heroContent.subtitle, language)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={schoolInfo.enrollmentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-tamil-red font-bold rounded-lg shadow-xl hover:bg-bg-cream hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
            >
              {t(heroContent.primaryCTA, language)}
            </a>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-lg"
            >
              {t(heroContent.secondaryCTA, language)}
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

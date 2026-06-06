import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { classesContent, schoolInfo, t } from '../data/content';
import {
  ChevronDownIcon,
  ClockIcon,
  MapPinIcon,
  CalendarIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import { fetchClassesCMS } from '../services/cmsService';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

function ClassLevelCard({ level, index, isOpen, onToggle }) {
  const { language } = useLanguage();

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-bg-warm transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tamil-red/10 text-tamil-red font-bold text-lg">
            {index + 1}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-tamil-red">
            {t(level.name, language)}
          </h3>
        </div>
        <ChevronDownIcon
          className={`w-6 h-6 text-tamil-red transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''
            }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-gray-200 pt-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                {t(level.description, language)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ClassesPage() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);
  const [classesList, setClassesList] = useState(classesContent.levels);

  useEffect(() => {
    const loadClasses = async () => {
      const url = import.meta.env.VITE_CMS_CLASSES_URL;
      const data = await fetchClassesCMS(url, classesContent.levels);
      setClassesList(data);
    };
    loadClasses();
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tamil-red to-tamil-maroon text-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t(classesContent.pageTitle, language)}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {t(classesContent.pageSubtitle, language)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl text-text-secondary leading-relaxed text-center">
              {t(classesContent.intro, language)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Class Levels */}
      <section className="section-padding bg-bg-warm pt-0">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {classesList.map((level, index) => (
              <ClassLevelCard
                key={index}
                level={level}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="section-padding bg-gradient-to-br from-tamil-orange/10 to-tamil-gold/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-tamil-red mb-12 text-center">
              {t(classesContent.schedule.title, language)}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-tamil-red/10 rounded-full flex items-center justify-center mb-4">
                  <ClockIcon className="w-8 h-8 text-tamil-red" />
                </div>
                <h3 className="text-xl font-bold text-tamil-red mb-2">{language === 'en' ? 'When' : 'எப்போது'}</h3>
                <p className="text-lg text-text-secondary">{t(classesContent.schedule.when, language)}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-tamil-red/10 rounded-full flex items-center justify-center mb-4">
                  <MapPinIcon className="w-8 h-8 text-tamil-red" />
                </div>
                <h3 className="text-xl font-bold text-tamil-red mb-2">{language === 'en' ? 'Where' : 'எங்கே'}</h3>
                <p className="text-lg text-text-secondary">{t(classesContent.schedule.where, language)}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-tamil-red/10 rounded-full flex items-center justify-center mb-4">
                  <CalendarIcon className="w-8 h-8 text-tamil-red" />
                </div>
                <h3 className="text-xl font-bold text-tamil-red mb-2">{language === 'en' ? 'Duration' : 'காலம்'}</h3>
                <p className="text-lg text-text-secondary">{t(classesContent.schedule.duration, language)}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-tamil-red/10 rounded-full flex items-center justify-center mb-4">
                  <AcademicCapIcon className="w-8 h-8 text-tamil-red" />
                </div>
                <h3 className="text-xl font-bold text-tamil-red mb-2">{language === 'en' ? 'Mode' : 'முறை'}</h3>
                <p className="text-lg text-text-secondary">{t(classesContent.schedule.mode, language)}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section-padding bg-bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-tamil-red mb-12 text-center">
              {t(classesContent.expectations.title, language)}
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {classesContent.expectations.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-tamil-red hover:shadow-md transition-shadow duration-300"
                >
                  <p className="text-lg text-text-secondary leading-relaxed">
                    {t(item, language)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-tamil-red to-tamil-maroon text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Ready to Start Learning Tamil?' : 'தமிழ் கற்கத் தயாரா?'}
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              {language === 'en'
                ? 'Enroll your child today and join our vibrant Tamil learning community!'
                : 'உங்கள் குழந்தையை இன்றே சேர்த்து எங்கள் துடிப்பான தமிழ் கற்றல் சமூகத்தில் இணையுங்கள்!'}
            </p>
            <a
              href={schoolInfo.enrollmentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-tamil-red font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              {language === 'en' ? 'Enroll Now' : 'இப்போது பதிவு செய்யுங்கள்'}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

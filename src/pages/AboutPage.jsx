import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { aboutContent, schoolInfo, t } from '../data/content';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

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

export default function AboutPage() {
  const { language } = useLanguage();

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
              {t(aboutContent.pageTitle, language)}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {t(aboutContent.pageSubtitle, language)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-tamil-red mb-8 text-center"
            >
              {t(aboutContent.story.title, language)}
            </motion.h2>

            <div className="space-y-6">
              {aboutContent.story.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className="text-lg text-text-secondary leading-relaxed"
                >
                  {t(paragraph, language)}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      {/* Offerings Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-tamil-red mb-12 text-center"
            >
              {t(aboutContent.offerings.title, language)}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {aboutContent.offerings.items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <CheckCircleIcon className="w-6 h-6 text-tamil-red flex-shrink-0 mt-1" />
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {t(item, language)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="section-padding bg-gradient-to-br from-tamil-orange to-tamil-gold">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t(aboutContent.joinCommunity.title, language)}
            </h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              {t(aboutContent.joinCommunity.text, language)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-tamil-red font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {language === 'en' ? 'Contact Us' : 'எங்களை தொடர்பு கொள்ளுங்கள்'}
              </Link>
              <a
                href={schoolInfo.enrollmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-tamil-red text-white font-bold rounded-lg shadow-lg hover:bg-tamil-maroon hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {language === 'en' ? 'Enroll Now' : 'இப்போது பதிவு செய்யுங்கள்'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

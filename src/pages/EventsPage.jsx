import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { eventsData, t } from '../data/content';
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
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

function EventCard({ event }) {
  const isFeatured = event.featured;
  const isHoliday = event.description && (
    event.description.includes('No classes') ||
    event.description.includes('School is closed')
  );

  return (
    <motion.div
      variants={itemVariants}
      className={`bg-white rounded-xl shadow-sm border-2 overflow-hidden hover:shadow-lg transition-all duration-300 ${isFeatured
        ? 'border-tamil-red shadow-md'
        : isHoliday
          ? 'border-gray-200 opacity-80'
          : 'border-gray-200'
        } ${isFeatured ? 'transform hover:scale-105' : 'hover:-translate-y-1'}`}
    >
      <div className="flex">
        {/* Date Badge */}
        <div
          className={`flex flex-col items-center justify-center p-6 text-center min-w-[100px] ${isFeatured
            ? 'bg-gradient-to-br from-tamil-red to-tamil-maroon text-white'
            : isHoliday
              ? 'bg-gray-100 text-gray-500'
              : 'bg-tamil-red/10 text-tamil-red'
            }`}
        >
          <span className="text-sm font-semibold uppercase tracking-wide">
            {event.date.month}
          </span>
          <span className="text-4xl font-bold leading-none mt-1">
            {event.date.day}
          </span>
        </div>

        {/* Event Details */}
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-tamil-red leading-tight">
              {event.title}
            </h3>
            {isFeatured && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-tamil-gold text-white whitespace-nowrap">
                Featured
              </span>
            )}
          </div>

          {event.time && (
            <div className="flex items-center gap-2 text-text-secondary mb-2">
              <ClockIcon className="w-5 h-5 text-tamil-orange" />
              <span className="text-sm">{event.time}</span>
            </div>
          )}

          {event.location && (
            <div className="flex items-center gap-2 text-text-secondary mb-3">
              <MapPinIcon className="w-5 h-5 text-tamil-orange" />
              <span className="text-sm">{event.location}</span>
            </div>
          )}

          <p className="text-text-secondary leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventsPage() {
  const { language } = useLanguage();
  const featuredEvents = eventsData.filter(event => event.featured);
  const regularEvents = eventsData.filter(event => !event.featured);

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
            <div className="flex items-center justify-center gap-4 mb-6">
              <CalendarIcon className="w-12 h-12" />
              <h1 className="text-4xl md:text-5xl font-bold">
                School Events
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90">
              Join us for cultural celebrations, assessments, and special events throughout the year
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-tamil-red mb-4">
                Featured Events
              </h2>
              <p className="text-xl text-text-secondary">
                Don't miss these special celebrations and gatherings!
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-5xl mx-auto space-y-6"
            >
              {featuredEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* All Events */}
      <section className={`section-padding ${featuredEvents.length > 0 ? 'bg-bg-warm' : ''}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-tamil-red mb-4">
              {featuredEvents.length > 0 ? 'Full Calendar' : 'All Events'}
            </h2>
            <p className="text-xl text-text-secondary">
              Academic year 2025-2026 schedule
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-5xl mx-auto space-y-6"
          >
            {(featuredEvents.length > 0 ? regularEvents : eventsData).map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Important Note */}
      <section className="section-padding bg-gradient-to-br from-tamil-orange/10 to-tamil-gold/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-l-8 border-tamil-orange">
              <h3 className="text-2xl md:text-3xl font-bold text-tamil-red mb-4">
                Stay Updated!
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Event dates and details are subject to change. Please check your email regularly for updates and announcements from Peninsula Tamil School.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-tamil-red text-white font-semibold rounded-lg shadow-md hover:bg-tamil-maroon hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="https://tinyurl.com/PTScalendar2025-26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-tamil-red font-semibold rounded-lg border-2 border-tamil-red hover:bg-bg-light-orange transition-all duration-200"
                >
                  Download 2025-2026 Calendar
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

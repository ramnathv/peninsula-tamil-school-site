import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { upcomingEvents } from '../../data/content';
import { fetchEventsCMS } from '../../services/cmsService';

export default function EventsPreview() {
  const [events, setEvents] = useState(upcomingEvents);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    const loadEvents = async () => {
      const url = import.meta.env.VITE_CMS_EVENTS_URL;
      const data = await fetchEventsCMS(url, upcomingEvents);
      // Slice to the first 2 events for the homepage preview to maintain a compact, polished layout
      const previewEvents = data.slice(0, 2);
      setEvents(previewEvents);
    };
    loadEvents();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="section-padding bg-bg-warm">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-tamil-red mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Join us for cultural celebrations and community gatherings
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {events.map((event, index) => (
            <motion.div
              key={`${event.title}-${index}`}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg border-2 border-tamil-orange/20 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex gap-6 p-6">
                {/* Date Badge */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-tamil-orange to-tamil-gold flex flex-col items-center justify-center text-white shadow-lg">
                    <span className="text-sm font-bold uppercase tracking-wider">
                      {event.month}
                    </span>
                    <span className="text-3xl font-bold leading-none">
                      {event.day}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-tamil-red mb-2 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/events"
            className="inline-flex items-center text-tamil-red font-semibold text-lg hover:text-tamil-orange transition-colors"
          >
            View All Events
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

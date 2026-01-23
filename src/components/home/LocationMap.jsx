import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { schoolInfo } from '../../data/content';

export default function LocationMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Address',
      content: schoolInfo.address.full,
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: schoolInfo.phone,
      link: `tel:${schoolInfo.phone}`,
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: schoolInfo.email,
      link: `mailto:${schoolInfo.email}`,
    },
    {
      icon: ClockIcon,
      title: 'Class Hours',
      content: `${schoolInfo.schedule.day}, ${schoolInfo.schedule.time}`,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-tamil-red mb-4">
            Find Us
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {schoolInfo.address.full}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl border-4 border-tamil-orange/20"
          >
            <iframe
              src="https://www.google.com/maps?q=Hillsdale+High+School,+San+Mateo,+CA&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peninsula Tamil School Location"
            />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-tamil-red mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-bg-warm hover:bg-bg-light-orange transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-tamil-orange to-tamil-gold flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-tamil-red mb-1">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-text-secondary hover:text-tamil-orange transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-text-secondary">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="pt-6"
            >
              <Link to="/contact" className="btn-primary w-full text-center">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

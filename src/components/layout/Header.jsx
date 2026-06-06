import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, LanguageIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../../context/LanguageContext';
import { schoolInfo, navigationTranslations, t } from '../../data/content';

const navigation = [
  { nameKey: 'home', href: '/' },
  { nameKey: 'about', href: '/about' },
  { nameKey: 'classes', href: '/classes' },
  { nameKey: 'events', href: '/events' },
  { nameKey: 'gallery', href: '/gallery' },
  { nameKey: 'contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white border-b-2 border-tamil-red'
        }`}
      role="banner"
    >
      <nav className="container-custom" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={`${import.meta.env.BASE_URL}images/tamil_school_logo.webp`}
              alt="Peninsula Tamil School Logo"
              className="w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <h1 className="text-lg md:text-xl font-bold text-tamil-red leading-tight">
                {schoolInfo.name}
              </h1>
              <p className="text-xs text-text-secondary hidden sm:block">
                Tamil Language & Culture
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.nameKey}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-tamil-red relative group ${location.pathname === item.href
                    ? 'text-tamil-red'
                    : 'text-text-primary'
                  }`}
              >
                {t(navigationTranslations[item.nameKey], language)}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-tamil-red transition-all duration-300 ${location.pathname === item.href
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                    }`}
                />
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-text-primary hover:text-tamil-red rounded-lg hover:bg-bg-warm transition-all duration-200 min-h-[44px]"
              aria-label={language === 'en' ? 'Switch to Tamil language' : 'Switch to English language'}
              aria-live="polite"
              title={language === 'en' ? 'Switch to Tamil' : 'Switch to English'}
            >
              <LanguageIcon className="w-6 h-6" />
              <span className="text-sm font-bold">{language === 'en' ? 'த' : 'EN'}</span>
            </button>

            <a
              href={schoolInfo.enrollmentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              {t(navigationTranslations.enrollNow, language)}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-3 rounded-lg text-text-primary hover:bg-bg-warm transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-200 bg-white overflow-hidden"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <nav className="container-custom py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.nameKey}
                  to={item.href}
                  className={`block py-3 px-4 rounded-lg font-medium transition-colors ${location.pathname === item.href
                      ? 'bg-bg-light-orange text-tamil-red'
                      : 'text-text-primary hover:bg-bg-warm'
                    }`}
                >
                  {t(navigationTranslations[item.nameKey], language)}
                </Link>
              ))}

              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-lg font-medium text-text-primary hover:bg-bg-warm transition-colors min-h-[48px]"
                aria-label={language === 'en' ? 'Switch to Tamil language' : 'Switch to English language'}
                aria-live="polite"
              >
                <LanguageIcon className="w-6 h-6" />
                <span>{language === 'en' ? 'தமிழில் படிக்க' : 'Read in English'}</span>
              </button>

              <a
                href={schoolInfo.enrollmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center btn-primary mt-4"
              >
                {t(navigationTranslations.enrollNow, language)}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

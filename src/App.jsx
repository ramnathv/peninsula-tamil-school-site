import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClassesPage from './pages/ClassesPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import { fetchSettingsCMS } from './services/cmsService';
import { schoolInfo, heroContent } from './data/content';

// ScrollToTop component resets window scroll position on every route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  useEffect(() => {
    // Prevent search engine indexing on staging/preview domains (like github.io)
    const hostname = window.location.hostname;
    if (hostname.includes('github.io') || hostname.includes('staging') || hostname.includes('preview')) {
      let meta = document.querySelector('meta[name="robots"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'robots';
        document.head.appendChild(meta);
      }
      meta.content = 'noindex, nofollow';
    }
  }, []);

  useEffect(() => {
    const loadSettings = async () => {
      const url = import.meta.env.VITE_CMS_SETTINGS_URL;
      if (!url) return;

      const data = await fetchSettingsCMS(url);
      if (data) {
        // Dynamically merge into schoolInfo
        if (data.enrollmentLink) schoolInfo.enrollmentLink = data.enrollmentLink;
        if (data.email) schoolInfo.email = data.email;
        if (data.phone) schoolInfo.phone = data.phone;
        if (data.addressVenue) {
          schoolInfo.address.venue = data.addressVenue;
        }
        if (data.addressFull) {
          schoolInfo.address.full = data.addressFull;
        }
        if (data.scheduleDay && schoolInfo.schedule) {
          schoolInfo.schedule.day = data.scheduleDay;
        }
        if (data.scheduleTime && schoolInfo.schedule) {
          schoolInfo.schedule.time = data.scheduleTime;
        }

        // Social media and Nonprofit status mapping
        if (data.facebook && schoolInfo.social) {
          schoolInfo.social.facebook = data.facebook;
        }
        if (data.instagram && schoolInfo.social) {
          schoolInfo.social.instagram = data.instagram;
        }
        if (data.nonprofitEin && schoolInfo.nonprofit) {
          schoolInfo.nonprofit.ein = data.nonprofitEin;
        }
        if (data.nonprofitStatus && schoolInfo.nonprofit) {
          schoolInfo.nonprofit.status = data.nonprofitStatus;
        }

        // Homepage Hero headings mapping
        if (data.heroTitleEn && heroContent.title) {
          heroContent.title.en = data.heroTitleEn;
        }
        if (data.heroTitleTa && heroContent.title) {
          heroContent.title.ta = data.heroTitleTa;
        }
        if (data.heroSubtitleEn && heroContent.subtitle) {
          heroContent.subtitle.en = data.heroSubtitleEn;
        }
        if (data.heroSubtitleTa && heroContent.subtitle) {
          heroContent.subtitle.ta = data.heroSubtitleTa;
        }

        setSettingsLoaded(true);
      }
    };
    loadSettings();
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <LanguageProvider>
        <div className="flex flex-col min-h-screen">
          {/* Skip to main content link for keyboard accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-tamil-red focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-grow pt-20" role="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/classes" element={<ClassesPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;

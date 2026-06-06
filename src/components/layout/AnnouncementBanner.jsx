import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { fetchAnnouncementCMS } from '../../services/cmsService';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function AnnouncementBanner() {
  const { language } = useLanguage();
  const [announcement, setAnnouncement] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const loadAnnouncement = async () => {
      const url = import.meta.env.VITE_CMS_ANNOUNCEMENT_URL;
      if (!url) return;

      const data = await fetchAnnouncementCMS(url);
      if (data && data.active) {
        setAnnouncement(data);
      }
    };
    loadAnnouncement();
  }, []);

  if (!announcement || dismissed) return null;

  const text = language === 'ta' ? announcement.text_ta : announcement.text_en;
  if (!text) return null;

  return (
    <div className="bg-gradient-to-r from-tamil-red via-tamil-orange to-tamil-gold text-white text-sm py-2 px-4 relative flex items-center justify-center text-center z-[60] w-full">
      <div className="max-w-4xl mx-auto pr-8 font-medium">
        {announcement.link_url ? (
          <a
            href={announcement.link_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center justify-center gap-1 inline-flex"
          >
            {text}
            <span className="text-xs"> ↗</span>
          </a>
        ) : (
          <span>{text}</span>
        )}
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 p-1 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
        aria-label="Dismiss announcement"
      >
        <XMarkIcon className="w-4 h-4" />
      </button>
    </div>
  );
}

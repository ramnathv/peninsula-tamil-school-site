import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryContent, t } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import GalleryGrid from '../components/gallery/GalleryGrid';
import Lightbox from '../components/gallery/Lightbox';
import { fetchGalleryCMS } from '../services/cmsService';

const GalleryPage = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState(galleryContent.images);
  const [filteredImages, setFilteredImages] = useState(galleryContent.images);

  useEffect(() => {
    const loadGallery = async () => {
      const url = import.meta.env.VITE_CMS_GALLERY_URL;
      const data = await fetchGalleryCMS(url, galleryContent.images);
      setImages(data);
    };
    loadGallery();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(images);
    } else {
      setFilteredImages(
        images.filter(img => img.category === selectedCategory)
      );
    }
  }, [selectedCategory, images]);

  return (
    <div className="min-h-screen bg-bg-cream">

      {/* Hero Section with Creative Background Pattern */}
      <section className="relative bg-gradient-to-br from-tamil-red via-tamil-orange to-tamil-gold overflow-hidden">
        {/* Decorative kolam-inspired pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border-4 border-white rotate-45 transform"></div>
          <div className="absolute bottom-10 left-1/3 w-40 h-40 border-4 border-white rounded-lg rotate-12"></div>
          <div className="absolute bottom-20 right-1/4 w-28 h-28 border-4 border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              {t(galleryContent.title, language)}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              {t(galleryContent.subtitle, language)}
            </p>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64 C240,100 480,100 720,64 C960,28 1200,28 1440,64 L1440,120 L0,120 Z" fill="#FFF8F0" />
          </svg>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {galleryContent.categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-6 py-3 rounded-full font-medium text-lg transition-all duration-300 min-h-[48px]
                  ${selectedCategory === category.id
                    ? 'bg-tamil-red text-white shadow-lg shadow-tamil-red/30'
                    : 'bg-white text-text-secondary hover:bg-bg-light-orange border-2 border-tamil-orange/20'
                  }
                `}
              >
                {t(category.label, language)}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-bg-cream">
        <div className="container mx-auto px-4">
          <GalleryGrid
            images={filteredImages}
            onImageClick={setSelectedImage}
            selectedCategory={selectedCategory}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-bg-warm to-bg-light-orange">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-tamil-gold/20">
              <p className="text-lg md:text-xl text-text-secondary mb-4">
                {t(galleryContent.callToAction.text, language)}
              </p>
              <a
                href={`mailto:${galleryContent.callToAction.email}`}
                className="text-tamil-red hover:text-tamil-orange font-semibold transition-colors duration-300 underline decoration-tamil-gold decoration-2 underline-offset-4 break-words text-base md:text-lg"
              >
                {galleryContent.callToAction.email}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            images={filteredImages}
            onClose={() => setSelectedImage(null)}
            onNavigate={setSelectedImage}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;

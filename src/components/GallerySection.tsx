import React from 'react';
import { motion } from 'framer-motion';

// ✅ Correct local image imports (make sure these files exist in src/assets)
import kiosk from '../assets/kiosk.avif';
import telemedicine from '../assets/telemedicine.webp';
import familyCheck from '../assets/familyCheck.webp';
import community from '../assets/community.webp';
import training from '../assets/training.webp';
import success from '../assets/success.avif';

interface GallerySectionProps {
  translations: any;
}

const GallerySection: React.FC<GallerySectionProps> = ({ translations }) => {
  const galleryImages = [
    { src: kiosk, alt: "Rural healthcare kiosk in action", title: "Kiosk in Village Center" },
    { src: telemedicine, alt: "Doctor consultation via video call", title: "Telemedicine Consultation" },
    { src: familyCheck, alt: "Rural family receiving health check", title: "Family Health Check" },
    { src: community, alt: "Community health awareness program", title: "Community Outreach" },
    { src: training, alt: "Health kiosk training session", title: "Training Session" },
    { src: success, alt: "Successful health intervention", title: "Success Story" }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations.galleryTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.gallerySubtitle}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm opacity-90">Click to view full story</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Our Impact in Numbers
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Villages Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
                <div className="text-lg opacity-90">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                <div className="text-lg opacity-90">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">₹50L+</div>
                <div className="text-lg opacity-90">Cost Savings</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;

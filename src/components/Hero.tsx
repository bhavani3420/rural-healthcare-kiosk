import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Phone } from 'lucide-react';

interface HeroProps {
  translations: any;
}

const Hero: React.FC<HeroProps> = ({ translations }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(translations.whatsappMessage);
    window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
  };

  const handleFindKioskClick = () => {
    window.open('https://maps.google.com/maps/search/health+kiosk+near+me', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+919876543210', '_self');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-200 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-secondary-200 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-primary-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-secondary-300 rounded-full"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              {translations.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-primary-600 font-semibold mb-4"
            >
              {translations.tagline}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              {translations.subtitle}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleFindKioskClick}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <MapPin className="w-5 h-5" />
                <span>{translations.findKiosk}</span>
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{translations.chatWhatsApp}</span>
              </button>
              
              <button
                onClick={handleCallClick}
                className="btn-outline flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>{translations.callUs}</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Rural healthcare kiosk with doctor consultation"
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 max-w-xs"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👨‍⚕️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Certified Doctors</p>
                    <p className="text-sm text-gray-600">24/7 Available</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 max-w-xs"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Instant Diagnostics</p>
                    <p className="text-sm text-gray-600">On-the-spot Results</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

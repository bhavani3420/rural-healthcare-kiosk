import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Phone, MessageCircle, MapPin, Heart, Stethoscope, Users, Shield, Clock, CheckCircle } from 'lucide-react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';
import { translations } from './data/translations';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'hi' | 'te'>('en');
  const t = translations[currentLanguage];

  const handleLanguageChange = (lang: 'en' | 'hi' | 'te') => {
    setCurrentLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Language Selector */}
      <LanguageSelector 
        currentLanguage={currentLanguage} 
        onLanguageChange={handleLanguageChange}
        translations={translations}
      />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentLanguage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Hero translations={t} />
          <ProblemSection translations={t} />
          <SolutionSection translations={t} />
          <BenefitsSection translations={t} />
          <TestimonialsSection translations={t} />
          <GallerySection translations={t} />
          <Footer translations={t} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;

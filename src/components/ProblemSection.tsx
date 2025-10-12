import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, DollarSign, MapPin } from 'lucide-react';
import healthcareImage from '../assets/health.avif'; // Ensure this image exists in the specified path
interface ProblemSectionProps {
  translations: any;
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ translations }) => {
  const problems = [
    {
      icon: MapPin,
      title: translations.problem1,
      description: "Rural areas lack access to qualified medical professionals"
    },
    {
      icon: Clock,
      title: translations.problem2,
      description: "Critical conditions worsen due to delayed medical intervention"
    },
    {
      icon: DollarSign,
      title: translations.problem3,
      description: "High travel and treatment costs burden families financially"
    },
    {
      icon: AlertTriangle,
      title: translations.problem4,
      description: "Limited diagnostic facilities lead to misdiagnosis and complications"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations.problemTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.problemSubtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center group hover:scale-105"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Problem Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* ✅ Replaced image with working, thematically relevant one */}
            <img
              src={healthcareImage}
              alt="Rural healthcare challenges"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold mb-2">The Reality</h3>
              <p className="text-sm opacity-90">
                Rural communities face significant barriers to quality healthcare access
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;

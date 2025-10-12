import React from 'react';
import { motion } from 'framer-motion';
import { Video, Stethoscope, Shield, Heart } from 'lucide-react';

interface SolutionSectionProps {
  translations: any;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ translations }) => {
  const solutions = [
    {
      icon: Video,
      title: translations.solution1,
      description: "Connect with board-certified doctors via secure video calls"
    },
    {
      icon: Stethoscope,
      title: translations.solution2,
      description: "Get immediate health assessments with advanced diagnostic tools"
    },
    {
      icon: Shield,
      title: translations.solution3,
      description: "Your health data is encrypted and securely stored"
    },
    {
      icon: Heart,
      title: translations.solution4,
      description: "Affordable monthly plans for entire families"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations.solutionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.solutionSubtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Healthcare kiosk technology"
                className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How It Works
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Visit Your Local Kiosk</h4>
                    <p className="text-gray-600 text-sm">Find the nearest health kiosk in your area</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Connect with Doctor</h4>
                    <p className="text-gray-600 text-sm">Start instant video consultation with certified doctors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Get Diagnosis & Treatment</h4>
                    <p className="text-gray-600 text-sm">Receive immediate diagnosis and treatment recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Solution Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center group hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <solution.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

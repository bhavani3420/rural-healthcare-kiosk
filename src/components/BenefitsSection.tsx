import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Stethoscope, DollarSign, Shield } from 'lucide-react';

interface BenefitsSectionProps {
  translations: any;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ translations }) => {
  const benefits = [
    {
      icon: Clock,
      title: translations.benefit1.title,
      description: translations.benefit1.description,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Stethoscope,
      title: translations.benefit2.title,
      description: translations.benefit2.description,
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: DollarSign,
      title: translations.benefit3.title,
      description: translations.benefit3.description,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Shield,
      title: translations.benefit4.title,
      description: translations.benefit4.description,
      color: 'bg-purple-100 text-purple-600'
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
            {translations.benefitsTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of rural healthcare with our comprehensive solution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center group hover:scale-105 hover:shadow-2xl"
            >
              <div className={`w-20 h-20 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Kiosks Deployed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Patients Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Doctor Availability</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">₹99</div>
              <div className="text-lg opacity-90">Monthly Plan</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Healthcare Experience?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of families who have already experienced the benefits of our healthcare kiosks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              {translations.getStarted}
            </button>
            <button className="btn-outline">
              {translations.learnMore}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;

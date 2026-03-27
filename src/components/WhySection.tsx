import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Users, Zap } from 'lucide-react';

const WhySection = () => {
  const reasons = [
    {
      title: 'Hands-on Learning',
      description: 'We believe in learning by doing. Our workshops are designed to be tactile and interactive.',
      icon: <Zap className="w-8 h-8 text-kalika-orange" />,
      color: 'bg-kalika-orange/10'
    },
    {
      title: 'Expert Mentors',
      description: 'Guided by professionals who are passionate about nurturing young minds and talents.',
      icon: <Users className="w-8 h-8 text-kalika-blue" />,
      color: 'bg-kalika-blue/10'
    },
    {
      title: 'Safe Environment',
      description: 'A nurturing and secure space where kids feel free to express themselves and explore.',
      icon: <Shield className="w-8 h-8 text-kalika-red" />,
      color: 'bg-kalika-red/10'
    },
    {
      title: 'Confidence Building',
      description: 'We focus on activities that help every child discover their strengths and evolve.',
      icon: <Star className="w-8 h-8 text-kalika-green" />,
      color: 'bg-kalika-green/10'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Why Kalika Sphere?</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">Providing a 360° approach to your child's creative and practical development.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-stone-100 hover:border-kalika-red/20 hover:shadow-premium transition-all group"
            >
              <div className={`w-16 h-16 ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">{reason.title}</h3>
              <p className="text-stone-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

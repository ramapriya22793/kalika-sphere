import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

interface HeroSectionProps {
  setCurrentView?: (view: 'home' | 'programs' | 'pro-programs' | 'gallery' | 'enroll' | 'summer-workshop') => void;
}

const HeroSection = ({ setCurrentView }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pt-0">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Kids learning" 
          className="w-full h-full object-cover brightness-110 contrast-110 saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* 🔥 BOTTOM TEXT & BUTTONS */}
      <div className="relative z-10 w-full px-8 md:px-16 pb-20 max-w-7xl mx-auto">
        
        {/* TAGLINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex flex-col gap-1">
            <span className="text-3xl md:text-4xl text-white font-light tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
              A 360&deg; Space for
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] text-white font-display font-black tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] leading-tight">
              Skill Development.
            </h1>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-6">
          
          {/* 🔴 Explore Labs */}
          <motion.button
            onClick={() => {
              if (setCurrentView) {
                setCurrentView('summer-workshop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-kalika-red text-white px-12 py-4 rounded-full font-bold text-lg tracking-wide 
                       border-2 border-kalika-red
                       hover:bg-red-700 hover:border-red-700
                       transition-all duration-300 shadow-xl active:scale-95"
          >
            Summer Camp 2026
          </motion.button>

          {/* 🔵 Start Your Journey (Solid Blue) */}
          <motion.button
            onClick={() => {
              if (setCurrentView) {
                setCurrentView('enroll');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg tracking-wide 
                       border-2 border-blue-600
                       hover:bg-blue-800 hover:border-blue-800
                       transition-all duration-300 shadow-xl active:scale-95"
          >
            Start Your Journey
          </motion.button>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;
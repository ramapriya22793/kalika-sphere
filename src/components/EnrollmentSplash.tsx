import { useEffect } from 'react';
import { motion } from 'framer-motion';
import logoIcon from '../assets/logo.png';
import KalikaLogo from './KalikaLogo';

interface EnrollmentSplashProps {
  setCurrentView: (view: 'home' | 'programs' | 'pro-programs' | 'gallery' | 'enroll' | 'summer-workshop' | 'enroll-splash') => void;
}

const EnrollmentSplash = ({ setCurrentView }: EnrollmentSplashProps) => {
  useEffect(() => {
    // Automatically redirect to the enrollment form after 2 seconds
    const timer = setTimeout(() => {
      setCurrentView('enroll');
    }, 2000);

    return () => clearTimeout(timer);
  }, [setCurrentView]);

  return (
    <div className="relative min-h-screen bg-[#FFF8F0] overflow-hidden flex flex-col font-sans selection:bg-red-500 selection:text-white">
      {/* Dynamic Background with soft gradients (Not Black) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-red-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="flex flex-col items-center max-w-lg w-full"
        >
          {/* Brand Logo Icon */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-48 h-48 md:w-64 md:h-64 mb-10"
          >
            <img 
              src={logoIcon} 
              alt="Kalika Sphere Logo" 
              className="w-full h-full object-contain filter drop-shadow-xl"
            />
          </motion.div>

          {/* Brand Name */}
          <div className="mb-2">
            <KalikaLogo size="xl" theme="light" showSubText={true} className="scale-150 transform" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.8 }}
            className="text-stone-900 text-xs md:text-sm font-black tracking-[0.4em] uppercase mt-12"
          >
            Creative Learning Center
          </motion.p>
          
          {/* Loading Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex flex-col items-center gap-4 w-64"
          >
            <div className="w-full h-1 bg-stone-200 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 2.0, ease: "linear" }}
                 className="h-full bg-gradient-to-r from-red-600 to-blue-600"
               />
            </div>
            <span className="text-[10px] text-stone-400 font-black tracking-widest uppercase">
              Preparing Your Experience
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Branding Footer */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
        <p className="text-[9px] text-stone-900 font-bold tracking-[0.4em] uppercase italic">
          Powering the next generation
        </p>
      </div>
    </div>
  );
};

export default EnrollmentSplash;

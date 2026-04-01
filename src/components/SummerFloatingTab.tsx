import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

interface SummerFloatingTabProps {
  setCurrentView: (view: 'home' | 'programs' | 'pro-programs' | 'gallery' | 'enroll') => void;
  currentView: string;
}

const SummerFloatingTab = ({ setCurrentView, currentView }: SummerFloatingTabProps) => {
  if (currentView === 'enroll') return null;

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 100 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] hidden md:block"
    >
      <button
        onClick={() => {
          if (setCurrentView) {
            setCurrentView('summer-workshop');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className="group relative flex items-center"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-kalika-red blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-l-2xl"></div>
        
        {/* Tab Content */}
        <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 border-r-0 rounded-l-[1.5rem] p-4 pr-3 shadow-2xl flex flex-col items-center gap-4 group-hover:bg-white transition-all transform group-hover:-translate-x-2">
          <div className="bg-gradient-to-br from-orange-100 to-red-100 p-2.5 rounded-xl text-kalika-red shadow-inner group-hover:scale-110 transition-transform">
            <Sun className="w-5 h-5 animate-pulse" />
          </div>
          
          <div className="flex items-center [writing-mode:vertical-lr] rotate-180 gap-2 mb-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">explore</span>
            <span className="text-sm font-black uppercase tracking-[0.1em] text-stone-900 group-hover:text-kalika-red transition-colors">Summer Camp</span>
          </div>
        </div>
      </button>
    </motion.div>
  );
};

export default SummerFloatingTab;

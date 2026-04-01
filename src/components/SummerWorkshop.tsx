import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowLeft, 
  Sparkles, 
  Trophy, 
  Clock,
  Users,
  ChevronRight,
  Star,
  Target
} from 'lucide-react';
import { programs as kidsPrograms } from './KidsLabPrograms';
import type { Program } from './KidsLabPrograms';
import { programs as proPrograms } from './ProLabsPrograms';

interface SummerWorkshopProps {
  setCurrentView?: (view: any) => void;
  openId?: string | null;
  setOpenId?: (id: string | null) => void;
}

const SummerWorkshop = ({ setCurrentView, openId, setOpenId }: SummerWorkshopProps) => {
  const [selectedActivity, setSelectedActivity] = useState<Program | null>(null);

  // Filter out certification
  const kidsList = kidsPrograms.filter(p => p.id !== 'certification');
  const proList = proPrograms.filter(p => p.id !== 'certification');

  // Sync openId from props (Deep linking from Navbar)
  useEffect(() => {
    if (openId) {
      const activity = [...kidsList, ...proList].find(p => p.id === openId);
      if (activity) {
        setSelectedActivity(activity as Program);
      }
    }
  }, [openId]);

  const closeModal = () => {
    setSelectedActivity(null);
    if (setOpenId) setOpenId(null);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-4 md:px-8 font-sans selection:bg-kalika-red selection:text-white">
      
      {/* Navigation & Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <button 
          onClick={() => { setCurrentView && setCurrentView('home'); window.scrollTo(0, 0); }}
          className="flex items-center gap-2 text-stone-500 hover:text-kalika-red transition-colors font-bold mb-10 group"
        >
          <div className="bg-white border border-stone-200 p-2.5 rounded-full shadow-sm transition-all group-hover:-translate-x-1">
            <ArrowLeft className="w-5 h-5" />
          </div>
          Back to Home
        </button>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-red-50 px-6 py-2 rounded-full text-kalika-red font-bold text-[10px] mb-6 border border-red-100 uppercase tracking-[0.3em]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Summer Camp 2026</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-stone-900 mb-6 leading-tight">
            Discovery <span className="text-kalika-red italic font-serif font-light">Tracks</span>
          </h1>
          <p className="text-xl text-stone-500 font-light leading-relaxed">
            Choose your learning path. Click on any activity to view its simplified syllabus.
          </p>
        </div>
      </div>

      {/* Simplified Two-Box Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        
        {/* Kids Lab Box */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-rose-50/50 rounded-[3rem] p-10 md:p-12 border border-rose-100 shadow-sm"
        >
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-display font-black text-stone-900 mb-2">Kid Lab (Basic)</h2>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-rose-200 bg-white">
                <span className="text-[11px] font-black text-kalika-red uppercase tracking-widest">5 - 11 Years</span>
              </div>
            </div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-kalika-red shadow-xl shadow-rose-200/50 border border-rose-50">
              <Star className="w-8 h-8 fill-kalika-red" />
            </div>
          </div>
          
          <div className="flex items-center gap-5 p-6 bg-white/70 rounded-[2rem] mb-10 border border-rose-200/50 shadow-sm">
             <div className="flex flex-col">
                <span className="text-[11px] font-black text-stone-500 uppercase tracking-[0.2em] mb-1.5">Workshop Fee</span>
                <div className="flex items-center gap-3">
                   <span className="text-stone-400 line-through text-[14px] font-bold">₹12,000/-</span>
                   <span className="bg-white text-kalika-red px-3.5 py-1.5 rounded-full text-[13px] font-black shadow-md border border-rose-100 italic">
                      ₹9,999/- ONLY
                   </span>
                </div>
             </div>
             <div className="h-10 w-[1px] bg-rose-200" />
             <div className="flex-1">
                <p className="text-[11px] font-black text-kalika-red leading-relaxed italic uppercase tracking-wider">
                   * Inclusive of all educational kits & materials.
                </p>
             </div>
          </div>

          <div className="flex flex-col gap-3 mb-10">
            {kidsList.map((activity) => (
              <button
                key={activity.id}
                onClick={() => setSelectedActivity(activity as Program)}
                className="group w-full flex items-center justify-between bg-white/60 hover:bg-white p-5 rounded-2xl border border-rose-100/50 hover:border-kalika-red/30 transition-all duration-300 text-left shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-kalika-red group-hover:scale-150 transition-transform" />
                  <span className="text-lg font-bold text-stone-800 group-hover:text-kalika-red transition-colors">{activity.title}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-stone-300 group-hover:text-kalika-red group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>

          <button 
            onClick={() => {
              if (setCurrentView) {
                setCurrentView('enroll');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="w-full py-5 bg-kalika-red text-white rounded-3xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-red-600/20 hover:scale-[1.02] transition-all active:scale-95"
          >
            Enroll in Kids Lab
          </button>
        </motion.div>

        {/* Pro Lab Box */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-blue-50/50 rounded-[3rem] p-10 md:p-12 border border-blue-100 shadow-sm flex flex-col"
        >
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-display font-black text-stone-900 mb-2">Pro Lab (Intermediate)</h2>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-white">
                <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest">11 - 14 Years</span>
              </div>
            </div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl shadow-blue-200/50 border border-blue-50">
              <Target className="w-8 h-8 fill-blue-600" />
            </div>
          </div>
          
          <div className="flex items-center gap-5 p-6 bg-white/70 rounded-[2rem] mb-10 border border-blue-200/50 shadow-sm">
             <div className="flex flex-col">
                <span className="text-[11px] font-black text-stone-500 uppercase tracking-[0.2em] mb-1.5">Workshop Fee</span>
                <div className="flex items-center gap-3">
                   <span className="text-stone-400 line-through text-[14px] font-bold">₹12,000/-</span>
                   <span className="bg-white text-blue-600 px-3.5 py-1.5 rounded-full text-[13px] font-black shadow-md border border-blue-100 italic">
                      ₹9,999/- ONLY
                   </span>
                </div>
             </div>
             <div className="h-10 w-[1px] bg-blue-200" />
             <div className="flex-1">
                <p className="text-[11px] font-black text-blue-600 leading-relaxed italic uppercase tracking-wider">
                   * Inclusive of all educational kits & materials.
                </p>
             </div>
          </div>

          <div className="flex flex-col gap-3 mb-10">
            {proList.map((activity) => (
              <button
                key={activity.id}
                onClick={() => setSelectedActivity(activity as Program)}
                className="group w-full flex items-center justify-between bg-white/60 hover:bg-white p-5 rounded-2xl border border-blue-100/50 hover:border-blue-600/30 transition-all duration-300 text-left shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform" />
                  <span className="text-lg font-bold text-stone-800 group-hover:text-blue-600 transition-colors">{activity.title}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-stone-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>

          <button 
            onClick={() => {
              if (setCurrentView) {
                setCurrentView('enroll');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="w-full mt-auto py-5 bg-blue-600 text-white rounded-3xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-blue-600/20 hover:scale-[1.02] transition-all active:scale-95"
          >
            Enroll in Pro Lab
          </button>
        </motion.div>

      </div>

      {/* Simplified Syllabus Modal */}
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              {/* Modal Header */}
              <div className="p-8 md:p-10 border-b border-stone-100 flex items-start justify-between">
                <div className="flex gap-6 items-center">
                  <div className="p-4 bg-stone-50 rounded-2xl text-kalika-red border border-stone-100">
                    {selectedActivity.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-kalika-red block mb-1">Syllabus Overview</span>
                    <h2 className="text-3xl font-display font-black text-stone-900">{selectedActivity.title}</h2>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-400 group"
                >
                  <X className="w-6 h-6 group-hover:text-stone-900" />
                </button>
              </div>

              {/* Modal Content - Simplified */}
              <div className="flex-1 overflow-y-auto p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  
                  {/* Left Column: Description & Details */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mb-4 font-black">Course Description</h4>
                      <p className="text-stone-600 leading-relaxed font-medium">
                        {selectedActivity.description}
                      </p>
                    </div>
                    
                    <div className="flex gap-8">
                       <div className="flex flex-col gap-1">
                          <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Age Group</span>
                          <span className="text-sm font-bold text-stone-900">{selectedActivity.age}</span>
                       </div>
                       <div className="flex flex-col gap-1">
                          <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Duration</span>
                          <span className="text-sm font-bold text-stone-900">{selectedActivity.duration}</span>
                       </div>
                    </div>
                  </div>

                  {/* Right Column: Key Modules */}
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mb-2 font-black">Key Highlights</h4>
                    <div className="space-y-3">
                      {selectedActivity.syllabus?.map((section, sIdx) => (
                        <div key={sIdx} className="bg-stone-50 p-4 rounded-xl border border-stone-100/50 flex items-start gap-3">
                           <div className="w-5 h-5 rounded-full bg-white border border-stone-200 flex items-center justify-center text-[10px] font-black text-kalika-red shrink-0 mt-0.5">
                             {sIdx + 1}
                           </div>
                           <span className="text-sm font-bold text-stone-700 leading-snug">{section.module.replace(/^\w+\.\s*/, '')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-8 md:p-10 bg-stone-50/50 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-stone-500 text-sm font-medium italic">
                  * All materials and photo-ops included.
                </div>
                <button 
                  onClick={() => {
                    closeModal();
                    if (setCurrentView) {
                      setCurrentView('enroll');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="w-full md:w-auto px-10 py-4 bg-kalika-red text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-red-600/20 hover:scale-105 transition-all active:scale-95"
                >
                  Join Summer Camp
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SummerWorkshop;

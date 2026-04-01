import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowLeft, Star } from 'lucide-react';

import art1 from '../assets/gallery-images/art_1.png';
import art2 from '../assets/gallery-images/art_2.png';
import art3 from '../assets/gallery-images/art_3.png';
import movement1 from '../assets/gallery-images/movement_1.png';
import movement2 from '../assets/gallery-images/movement_2.png';
import wellness1 from '../assets/gallery-images/wellness_1.png';
import skills1 from '../assets/gallery-images/skills_1.png';

interface GalleryProps {
  setCurrentView: (view: 'home' | 'programs' | 'pro-programs' | 'gallery' | 'enroll' | 'summer-workshop') => void;
}

const activities = [
  { id: 1, class: 'md:col-span-2 md:row-span-2', category: 'Fine Art', title: 'Abstract Exploration', image: art1, description: 'Kids express their inner world through guided painting on large canvases.', tags: ['Painting', 'Colors'] },
  { id: 2, class: 'md:col-span-1 md:row-span-1', category: 'Skills', title: 'Circuit Design', image: skills1, description: 'Hands-on workshops building real-world electronics.', tags: ['Focus', 'Engineering'] },
  { id: 3, class: 'md:col-span-1 md:row-span-2', category: 'Wellness', title: 'Botanical Observation', image: wellness1, description: 'Detailed focus in the greenhouse finding peace in nature.', tags: ['Nature', 'Patience'] },
  { id: 4, class: 'md:col-span-1 md:row-span-1', category: 'Movement', title: 'Dance Flow', image: movement1, description: 'Developing coordination and energy through modern floor dance.', tags: ['Energy', 'Rhythm'] },
  { id: 5, class: 'md:col-span-2 md:row-span-1', category: 'Art', title: 'Pottery Studio', image: art2, description: 'Tactile learning through precision clay building, forming vessels from scratch.', tags: ['Sculpture', 'Focus'] },
  { id: 7, class: 'md:col-span-1 md:row-span-1', category: 'Art', title: 'Detail Arts', image: art3, description: 'Miniature precision painting on natural smooth stones.', tags: ['Detail', 'Patience'] },
  { id: 8, class: 'md:col-span-2 md:row-span-1', category: 'Movement', title: 'Pro Karting', image: movement2, description: 'High-speed mechanics and track navigation for older innovators.', tags: ['Speed', 'Reflexes'] },
];

const categories = ['All', 'Art', 'Movement', 'Wellness', 'Skills', 'Exploration'];

const Gallery = ({ setCurrentView }: GalleryProps) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredActivities = activeCategory === 'All' 
    ? activities 
    : activities.filter(a => a.category === activeCategory);

  const selectedItem = activities.find(a => a.id === selectedId);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedId) {
      const currentIdx = filteredActivities.findIndex(a => a.id === selectedId);
      const nextIdx = (currentIdx + 1) % filteredActivities.length;
      setSelectedId(filteredActivities[nextIdx].id);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedId) {
      const currentIdx = filteredActivities.findIndex(a => a.id === selectedId);
      const prevIdx = (currentIdx - 1 + filteredActivities.length) % filteredActivities.length;
      setSelectedId(filteredActivities[prevIdx].id);
    }
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-32 pb-24 px-4 md:px-8 font-sans selection:bg-kalika-red selection:text-white pb-32">
       {/* Ambient Backdrops */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kalika-red/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
       <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-kalika-orange/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Navigation & Header */}
        <button 
          onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }}
          className="flex items-center gap-2 text-stone-500 hover:text-kalika-red transition-colors font-bold mb-12 group w-fit"
        >
          <div className="bg-white border border-stone-200 p-2 rounded-full shadow-sm transition-all group-hover:-translate-x-1">
            <ArrowLeft className="w-5 h-5" />
          </div>
          Back to Dashboard
        </button>

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 relative">
          <div className="max-w-2xl text-left relative z-10">
             <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-md rounded-full mb-8 shadow-xl shadow-kalika-red/5 border border-kalika-red/10">
                <span className="w-2 h-2 rounded-full bg-kalika-red animate-pulse shadow-[0_0_10px_rgba(223,27,37,0.5)] relative"></span>
                <span className="font-sans text-kalika-red font-bold uppercase tracking-[0.2em] text-[10px] mt-0.5">Premium Gallery</span>
             </div>
            <h1 className="font-display text-4xl md:text-6xl font-black tracking-tight text-stone-900 mb-6 leading-[1.1]">
              A Universe Of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kalika-red via-red-500 to-kalika-orange">
                Infinite Wonder.
              </span>
            </h1>
            <p className="text-base md:text-lg text-stone-500 font-medium max-w-md leading-relaxed">
               Step inside the Kalika Sphere experience. A visual journey of creativity, movement, and advanced skill-building for the next generation.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:max-w-md justify-start md:justify-end relative z-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full font-sans text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300
                  ${activeCategory === cat 
                    ? 'text-white scale-105 font-black border border-transparent' 
                    : 'bg-white text-stone-500 border border-stone-200 hover:text-kalika-red hover:border-kalika-red/30 hover:bg-kalika-red/5 hover:shadow-md hover:-translate-y-0.5'}`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-kalika-red to-red-500 rounded-full shadow-xl shadow-kalika-red/25"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric / Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4 md:gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredActivities.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative group cursor-pointer rounded-[2rem] overflow-hidden bg-stone-100 border border-stone-200/50 shadow-sm hover:shadow-2xl hover:shadow-kalika-red/10 transition-all duration-500 ${item.class}`}
                onClick={() => setSelectedId(item.id)}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                
                {/* Premium Glassmorphism Overlay on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 pt-12 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                     <div>
                        <p className="font-sans text-kalika-red text-xs font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                           <Star className="w-3 h-3" /> {item.category}
                        </p>
                        <h3 className="font-display text-2xl md:text-3xl text-white font-medium mb-1 drop-shadow-sm">{item.title}</h3>
                     </div>
                     <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white transform -rotate-45 group-hover:rotate-0 transition-all duration-500 delay-100 shadow-xl">
                        <Maximize2 className="w-5 h-5" />
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Premium Lightbox Modal */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[100] bg-stone-950/90 flex items-center justify-center p-4 md:p-8 lg:p-12 font-sans"
            onClick={() => setSelectedId(null)}
          >
            <button className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center gap-2 text-stone-400 hover:text-white transition-colors group z-50 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10" onClick={() => setSelectedId(null)}>
              <span className="text-sm font-bold tracking-widest uppercase">Close</span>
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 hover:scale-110 z-50 backdrop-blur-md" onClick={handlePrev}>
              <ChevronLeft size={32} />
            </button>

            <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 hover:scale-110 z-50 backdrop-blur-md" onClick={handleNext}>
              <ChevronRight size={32} />
            </button>

            <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-8 lg:gap-16 items-center" onClick={(e) => e.stopPropagation()}>
               <motion.div 
                 key={selectedItem.id}
                 initial={{ opacity: 0, scale: 0.95, y: 20 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 transition={{ type: "spring", damping: 25, stiffness: 300 }}
                 className="lg:col-span-8 relative aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,1)] bg-stone-900"
               >
                  <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] md:rounded-[3rem] pointer-events-none"></div>
               </motion.div>

               <div className="lg:col-span-4 text-left">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-kalika-red/20 border border-kalika-red/30 rounded-full text-kalika-red text-xs font-bold uppercase tracking-widest mb-6 shadow-xl shadow-kalika-red/10">
                    <Star className="w-3.5 h-3.5" />
                    {selectedItem.category}
                  </span>
                  
                  <h2 className="font-display text-4xl md:text-5xl text-white font-medium mb-6 leading-tight drop-shadow-sm">{selectedItem.title}</h2>
                  
                  <p className="text-lg md:text-xl text-stone-400 font-light leading-relaxed mb-10">{selectedItem.description}</p>
                  
                  <div>
                    <h5 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4">Focus Areas</h5>
                    <div className="flex flex-wrap gap-2.5">
                      {selectedItem.tags.map((tag, idx) => (
                        <span key={idx} className="bg-stone-900 border border-stone-800 px-5 py-2.5 rounded-xl text-stone-300 text-xs font-bold uppercase tracking-widest shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

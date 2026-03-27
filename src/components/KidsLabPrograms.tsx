import { motion } from 'framer-motion';
import { ArrowLeft, Star, Heart, CheckCircle2 } from 'lucide-react';
import potteryImg from '../assets/programs/pottery.png';
import pebblezappImg from '../assets/programs/pebblezapp.png';
import aeronauticImg from '../assets/programs/aeronautic.png';
import microgreenImg from '../assets/programs/microgreen.png';
import electricalImg from '../assets/programs/electrical.png';
import gokartImg from '../assets/programs/gokart.png';
import certificationImg from '../assets/programs/certification.png';

interface KidsLabProgramsProps {
  setCurrentView: (view: 'home' | 'programs' | 'pro-programs' | 'gallery' | 'enroll') => void;
}

const programs = [
  {
    id: 'pebblezapp',
    title: 'Arts & Craft',
    age: '4-10 Years',
    duration: '4-Week Program',
    features: ['Fine Motor Skills', 'Creative Expression', 'Take-home Masterpieces'],
    description: 'Transform simple stones into magical stories! Kids will paint, decorate, and create vivid characters in this comprehensive arts program that heavily develops creative thinking.',
    image: pebblezappImg,
  },
  {
    id: 'pottery',
    title: 'Pottery',
    age: '4-10 Years',
    duration: '6-Week Program',
    features: ['Sensory Development', 'Pottery Wheel Basics', 'Kiln Baking & Painting'],
    description: 'A deeply hands-on sensory experience where children shape, mold, and decorate their very own colorful clay creations from raw earth to finished painted pots.',
    image: potteryImg,
  },
  {
    id: 'aeronautic',
    title: 'Astronomics',
    age: '4-10 Years',
    duration: '4-Week Program',
    features: ['Simple Engineering', 'Gravity & Flight Basics', 'Model Rocket Launch'],
    description: 'Design and launch toy rockets and airplanes! An inspiring, high-energy introduction to aerodynamics, flight physics, and hands-on structural engineering.',
    image: aeronauticImg,
  },
  {
    id: 'microgreen',
    title: 'Microgreen',
    age: '4-10 Years',
    duration: 'Ongoing Seasonal',
    features: ['Plant Biology', 'Nurturing & Care', 'Farm-to-Table Basics'],
    description: 'Get your hands in the soil! Kids plant seeds, nurture them, and watch bright green sprouts grow in their own mini indoor garden. A beautiful way to connect with nature.',
    image: microgreenImg,
  },
  {
    id: 'electrical',
    title: 'Electrical & Plumbing',
    age: '4-10 Years',
    duration: '5-Week Program',
    features: ['Safe Electronics', 'Mechanical Puzzles', 'Logic & Problem Solving'],
    description: 'Connect safe, oversized colorful pipes and build simple light-up circuits. A super fun, hands-on mechanical puzzle that teaches real-world practical logic.',
    image: electricalImg,
  },
  {
    id: 'gokart',
    title: 'Go-kart Experience',
    age: '4-10 Years',
    duration: 'Drop-in Sessions',
    features: ['Physical Coordination', 'Spatial Awareness', 'Safe Driving Rules'],
    description: 'Experience the thrill of driving! Kids navigate a colorful track on pedal-powered go-karts, learning crucial physical coordination and spatial awareness while having a blast.',
    image: gokartImg,
  },
  {
    id: 'certification',
    title: 'Lab Certification Track',
    age: 'All Ages',
    duration: 'Achievement Goal',
    features: ['Official Lab Certificate', 'Graduation Ceremony', 'Portfolio Creation'],
    description: 'Celebrate all the new skills learned across our labs! Every child who completes a lab series receives an official Kids Lab Certificate of Achievement to proudly take home.',
    image: certificationImg,
  }
];

const KidsLabPrograms = ({ setCurrentView }: KidsLabProgramsProps) => {
  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Navigation & Header */}
      <div className="mb-10">
        <button 
          onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }}
          className="flex items-center gap-2 text-stone-500 hover:text-kalika-red transition-colors font-bold mb-8 group"
        >
          <div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-all group-hover:-translate-x-1">
            <ArrowLeft className="w-5 h-5" />
          </div>
          Back to Home
        </button>
        
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-kalika-orange font-bold text-sm shadow-sm mb-6 uppercase tracking-widest border border-kalika-orange/20">
            <Star className="w-4 h-4" />
            Explore Programs
            <Star className="w-4 h-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display text-stone-900 mb-2 leading-tight">
            Our Magical <br/>
            <span className="italic font-light text-kalika-red">Activities.</span>
          </h1>
        </div>
      </div>

      {/* Program List Layout */}
      <div className="space-y-12 max-w-5xl mx-auto">
        {programs.map((program, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            key={program.id} 
            className="flex flex-col md:flex-row bg-white rounded-[2.5rem] p-6 md:p-8 gap-8 md:gap-10 border border-stone-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all group items-center md:items-start"
          >
            {/* Small Image Side */}
            <div className="w-full md:w-72 flex-shrink-0 relative aspect-square rounded-[2rem] overflow-hidden bg-stone-50 shadow-inner">
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-white flex items-center gap-1.5 text-xs font-bold text-stone-700 uppercase tracking-widest">
                <Heart className="w-3.5 h-3.5 text-kalika-red fill-current" /> Premium
              </div>
            </div>
            
            {/* Content Side */}
            <div className="flex-1 flex flex-col w-full">
              
              <div className="flex flex-wrap gap-3 mb-5">
                <span className="bg-kalika-orange/10 text-kalika-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-kalika-orange/20">
                  {program.age}
                </span>
                <span className="bg-kalika-blue/10 text-kalika-blue px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-kalika-blue/20">
                  {program.duration}
                </span>
              </div>
              
              <h3 className="text-3xl font-display font-medium text-stone-900 mb-3 leading-tight">
                {program.title}
              </h3>
              
              <p className="text-stone-600 font-sans font-light text-base md:text-lg leading-relaxed mb-6">
                {program.description}
              </p>
              
              <div className="mb-8">
                <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-3">Program Includes</h5>
                <ul className="flex flex-col gap-2.5">
                  {program.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-stone-700 font-medium text-sm md:text-base">
                      <div className="flex-shrink-0 bg-stone-100 p-1 rounded-full">
                        <CheckCircle2 className="w-4 h-4 text-stone-900" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto pt-6 border-t border-stone-100">
                 <button 
                  onClick={() => {
                    if (setCurrentView) {
                      setCurrentView('enroll');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto px-10 py-3.5 bg-stone-900 hover:bg-kalika-red text-white font-sans uppercase tracking-[0.2em] text-xs font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-stone-900/20 active:scale-95 text-center"
                 >
                    Enroll Now
                 </button>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KidsLabPrograms;

import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Rocket, Wrench, Zap, Code, ShieldCheck, CheckCircle2 } from 'lucide-react';
import potteryImg from '../assets/pro-programs/pottery.png';
import pebblezappImg from '../assets/pro-programs/pebblezapp.png';
import aiImg from '../assets/pro-programs/ai.png';
import spaceImg from '../assets/pro-programs/space.png';
import electricalImg from '../assets/pro-programs/electrical.png';
import gokartImg from '../assets/pro-programs/gokart.png';
import certificationImg from '../assets/pro-programs/certification.png';

interface ProLabsProgramsProps {
  setCurrentView: (view: 'home' | 'programs' | 'pro-programs' | 'gallery' | 'enroll') => void;
}

const programs = [
  {
    id: 'ai-coding',
    title: 'Artificial Intelligence',
    age: '11-14 Years',
    duration: '8-Week Masterclass',
    features: ['Python Basics', 'Machine Learning Concepts', 'Robot Building'],
    description: 'Step into the future! Older students will learn the fundamentals of coding by programming their own functional AI robots, understanding how technology shapes our world.',
    image: aiImg,
    icon: <Code className="w-5 h-5" />
  },
  {
    id: 'space-astronomy',
    title: 'Astronomics',
    age: '11-14 Years',
    duration: '6-Week Series',
    features: ['Astrophysics', 'Telescope Mechanics', 'Mission Planning'],
    description: 'An immersive journey through the cosmos. Students study real star maps, build incredibly detailed solar system models, and learn the physics behind rocket launches.',
    image: spaceImg,
    icon: <Rocket className="w-5 h-5" />
  },
  {
    id: 'gokart-racing',
    title: 'Go-kart Experience',
    age: '11-14 Years',
    duration: 'Ongoing Seasonal',
    features: ['Mechanical Physics', 'Track Racing', 'Vehicle Maintenance'],
    description: 'Go beyond just driving. Students will learn the mechanics of how their karts work, perform basic pit-stop maintenance, and race on our advanced track.',
    image: gokartImg,
    icon: <Wrench className="w-5 h-5" />
  },
  {
    id: 'electrical-plumbing',
    title: 'Electrical & Plumbing',
    age: '11-14 Years',
    duration: '5-Week Intensive',
    features: ['Advanced Soldering', 'Complex PVC Systems', 'Logic Gates'],
    description: 'A deep dive into how the modern world works. Students will safely build advanced electrical circuits and engineer complex water-flow systems from scratch.',
    image: electricalImg,
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 'pottery',
    title: 'Pottery',
    age: '11-14 Years',
    duration: '6-Week Program',
    features: ['Wheel Throwing', 'Glaze Chemistry', 'Advanced Sculpting'],
    description: 'Take artistry to the next level. Students master the pottery wheel, learning precise movements to create professional-grade, beautiful clay vessels.',
    image: potteryImg,
    icon: <Cpu className="w-5 h-5 opacity-0" /> // Placeholder for alignment if needed
  },
  {
    id: 'pebblezapp',
    title: 'Arts & Craft',
    age: '11-14 Years',
    duration: '4-Week Studio',
    features: ['Fine Brush Techniques', 'Color Theory', 'Portfolio Building'],
    description: 'An advanced studio art class where students use fine-tipped brushes to paint incredibly intricate, detailed masterpieces on natural stone canvases.',
    image: pebblezappImg,
    icon: <Wrench className="w-5 h-5 opacity-0" />
  },
  {
    id: 'certification',
    title: 'Pro Lab Certification',
    age: 'Graduates',
    duration: 'Final Achievement',
    features: ['Skill Assessment', 'Official Recognition', 'Alumni Network'],
    description: 'The ultimate achievement. Students who master a series of Pro Lab modules receive our high-tier Certificate of Innovation, ready for standard academic portfolios.',
    image: certificationImg,
    icon: <ShieldCheck className="w-5 h-5" />
  }
];

const ProLabsPrograms = ({ setCurrentView }: ProLabsProgramsProps) => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8 font-sans selection:bg-kalika-red selection:text-white pb-32">
      {/* Navigation & Header */}
      <div className="mb-10 max-w-7xl mx-auto">
        <button 
          onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }}
          className="flex items-center gap-2 text-stone-500 hover:text-kalika-red transition-colors font-bold mb-8 group"
        >
          <div className="bg-white border border-stone-200 p-2 rounded-full shadow-sm transition-all group-hover:-translate-x-1">
            <ArrowLeft className="w-5 h-5" />
          </div>
          Back to Dashboard
        </button>
        
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-kalika-red font-bold text-sm shadow-sm mb-6 uppercase tracking-[0.2em] border border-kalika-red/20">
            <Cpu className="w-4 h-4" />
            Innovation Hub
            <Cpu className="w-4 h-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display text-stone-900 mb-2 leading-tight">
            Pro Lab <br/>
            <span className="italic font-light text-kalika-red">Advanced Tracks.</span>
          </h1>
        </div>
      </div>

      {/* Program List Layout (Light/Sleek Theme) */}
      <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto">
        {programs.map((program, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            key={program.id} 
            className="flex flex-col md:flex-row bg-white rounded-[2.5rem] p-6 md:p-8 gap-8 md:gap-10 border border-stone-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:border-kalika-red/30 transition-all group items-center md:items-start"
          >
            {/* Small Image Side */}
            <div className="w-full md:w-72 flex-shrink-0 relative aspect-square rounded-[2rem] overflow-hidden bg-stone-50 shadow-inner">
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm flex items-center gap-1.5 text-xs font-bold text-kalika-red uppercase tracking-widest">
                <Rocket className="w-3.5 h-3.5" /> Pro Level
              </div>
            </div>
            
            {/* Content Side */}
            <div className="flex-1 flex flex-col w-full">
              
              <div className="flex flex-wrap gap-3 mb-5">
                <span className="bg-stone-100 text-stone-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-stone-200">
                  {program.age}
                </span>
                <span className="bg-kalika-red/10 text-kalika-red px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-kalika-red/20">
                  {program.duration}
                </span>
              </div>
              
              <h3 className="text-3xl font-display font-medium text-stone-900 mb-3 leading-tight flex items-center gap-3">
                 {program.title}
              </h3>
              
              <p className="text-stone-600 font-light text-base md:text-lg leading-relaxed mb-6">
                {program.description}
              </p>
              
              <div className="mb-8">
                <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-3">Module Includes</h5>
                <ul className="flex flex-col gap-2.5">
                  {program.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-stone-700 font-medium text-sm md:text-base">
                      <div className="flex-shrink-0 bg-kalika-red/10 p-1 rounded-full">
                        <CheckCircle2 className="w-4 h-4 text-kalika-red" />
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
                  className="w-full sm:w-auto px-10 py-3.5 bg-kalika-red hover:bg-stone-900 text-white font-sans uppercase tracking-[0.2em] text-xs font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-kalika-red/20 active:scale-95 text-center"
                 >
                    Apply For Track
                 </button>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProLabsPrograms;

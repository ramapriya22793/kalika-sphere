import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, Heart, CheckCircle2, ChevronDown, ChevronUp, Zap, Wrench, Leaf, Plane, ShieldCheck } from 'lucide-react';
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

interface SyllabusItem {
  title?: string;
  concepts?: string[];
  activities?: string[];
  outcome?: string;
}

interface SyllabusSection {
  module: string;
  items: SyllabusItem[];
}

interface Program {
  id: string;
  title: string;
  age: string;
  duration: string;
  features: string[];
  description: string;
  image: string;
  icon: React.ReactNode;
  syllabus?: SyllabusSection[];
}

const programs: Program[] = [
  {
    id: 'pottery',
    title: 'Pottery Experience',
    age: '5-11 Years',
    duration: '4-Week Intro',
    features: ['Clay Basics', 'Hand-Modeling', 'Safe Tools'],
    description: 'A tactile journey into the world of clay! Young makers will discover the joy of molding, shaping, and painting their own unique pottery pieces while developing fine motor skills.',
    image: potteryImg,
    icon: <Star className="w-5 h-5" />,
    syllabus: [
      {
        module: 'Technical Curriculum',
        items: [
          {
            title: 'Coming Soon',
            concepts: ['The detailed session-by-session syllabus for this track will be shared with enrolled students at the start of the program.'],
            outcome: 'Stay tuned for the full creative roadmap.'
          }
        ]
      }
    ]
  },
  {
    id: 'pebblezapp',
    title: 'Arts & Craft',
    age: '5-11 Years',
    duration: '6-Week Series',
    features: ['Stone Painting', 'Color Mixing', 'Nature Crafts'],
    description: 'Transforming natural elements into mini-masterpieces. Students learn to use delicate brushes to paint intricate patterns and characters on smooth river stones.',
    image: pebblezappImg,
    icon: <Heart className="w-5 h-5" />,
    syllabus: [
      {
        module: 'Technical Curriculum',
        items: [
          {
            title: 'Coming Soon',
            concepts: ['The detailed session-by-session syllabus for this track will be shared with enrolled students at the start of the program.'],
            outcome: 'Stay tuned for the full creative roadmap.'
          }
        ]
      }
    ]
  },
  {
    id: 'aeronautic',
    title: 'Aeronautics',
    age: '5-11 Years',
    duration: '5-Week Mission',
    features: ['Paper Plane Physics', 'Drone Basics', 'Wing Design'],
    description: 'Explore the science of flight! From folding advanced paper gliders to understanding how real wings generate lift, young pilots will take their first steps into aerospace.',
    image: aeronauticImg,
    icon: <Plane className="w-5 h-5" />,
    syllabus: [
      {
        module: 'Technical Curriculum',
        items: [
          {
            title: 'Coming Soon',
            concepts: ['The detailed session-by-session syllabus for this track will be shared with enrolled students at the start of the program.'],
            outcome: 'Stay tuned for the flight roadmap.'
          }
        ]
      }
    ]
  },
  {
    id: 'microgreen',
    title: 'Microgreens',
    age: '5-11 Years',
    duration: '4-Week Growth',
    features: ['Seed Science', 'Urban Farming', 'Nutritional Value'],
    description: 'Miniature farms with massive impacts. Students learn the biology of seeds and how to grow nutrient-dense greens in small spaces using eco-friendly methods.',
    image: microgreenImg,
    icon: <Leaf className="w-5 h-5" />,
    syllabus: [
      {
        module: 'Technical Curriculum',
        items: [
          {
            title: 'Coming Soon',
            concepts: ['The detailed session-by-session syllabus for this track will be shared with enrolled students at the start of the program.'],
            outcome: 'Stay tuned for the botanical roadmap.'
          }
        ]
      }
    ]
  },
  {
    id: 'electrical',
    title: 'Junior Electrical',
    age: '5-11 Years',
    duration: '6-Week Circuits',
    features: ['Battery Power', 'Safe LEDs', 'Snap Circuits'],
    description: 'Light up the world! A safe introduction to electricity where students build simple circuits, light up LEDs, and understand the power that runs our homes.',
    image: electricalImg,
    icon: <Zap className="w-5 h-5" />,
    syllabus: [
      {
        module: 'Technical Curriculum',
        items: [
          {
            title: 'Coming Soon',
            concepts: ['The detailed session-by-session syllabus for this track will be shared with enrolled students at the start of the program.'],
            outcome: 'Stay tuned for the power roadmap.'
          }
        ]
      }
    ]
  },
  {
    id: 'gokart',
    title: 'Karting Basics',
    age: '5-11 Years',
    duration: 'Ongoing Seasonal',
    features: ['Track Safety', 'Steering Logic', 'Flag Meanings'],
    description: 'Start your engines! Young drivers learn the fundamental safety and handling skills needed to navigate the track with confidence and skill.',
    image: gokartImg,
    icon: <Wrench className="w-5 h-5" />,
    syllabus: [
      {
        module: 'Technical Curriculum',
        items: [
          {
            title: 'Coming Soon',
            concepts: ['The detailed session-by-session syllabus for this track will be shared with enrolled students at the start of the program.'],
            outcome: 'Stay tuned for the racing roadmap.'
          }
        ]
      }
    ]
  },
  {
    id: 'certification',
    title: 'Kids Lab Certification',
    age: 'Graduates',
    duration: 'Final Milestone',
    features: ['Official Seal', 'Portfolio Entry', 'Graduation Photo'],
    description: 'Celebrate the journey! Students who complete our Kids Lab courses receive an official certificate showcasing their creativity and new-found skills.',
    image: certificationImg,
    icon: <ShieldCheck className="w-5 h-5" />
  }
];

const KidsLabPrograms = ({ setCurrentView }: KidsLabProgramsProps) => {
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8 font-sans selection:bg-purple-100 selection:text-kalika-red pb-32">
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
          <div className="inline-flex items-center gap-2 bg-purple-50 px-5 py-2.5 rounded-full text-kalika-red font-bold text-sm shadow-sm mb-6 uppercase tracking-[0.2em] border border-purple-100">
            <Star className="w-4 h-4" />
            Maker Academy
            <Star className="w-4 h-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display text-stone-900 mb-2 leading-tight">
            Kids Lab <br/>
            <span className="italic font-light text-kalika-red">Creative Discovery.</span>
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
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm flex items-center gap-1.5 text-xs font-bold text-kalika-red uppercase tracking-widest">
                <Star className="w-3.5 h-3.5" /> Explorer
              </div>
            </div>
            
            {/* Content Side */}
            <div className="flex-1 flex flex-col w-full">
              
              <div className="flex flex-wrap gap-3 mb-5">
                <span className="bg-stone-100 text-stone-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-stone-200">
                  {program.age}
                </span>
                <span className="bg-purple-100 text-kalika-red px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-purple-200">
                  {program.duration}
                </span>
              </div>
              
              <h3 className="text-3xl font-display font-medium text-stone-900 mb-3 leading-tight flex items-center gap-3">
                 {program.icon}
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
                      <div className="flex-shrink-0 bg-purple-50 p-1 rounded-full">
                        <CheckCircle2 className="w-4 h-4 text-kalika-red" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {program.syllabus && (
                <div className="mb-8 border border-stone-200 rounded-2xl overflow-hidden bg-white/50 shadow-sm transition-all hover:bg-stone-50">
                  <button 
                    onClick={() => setExpandedSyllabus(expandedSyllabus === program.id ? null : program.id)}
                    className="w-full flex items-center justify-between p-4 bg-transparent text-stone-900 font-bold text-xs tracking-widest uppercase cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                       <Star className="w-4 h-4 text-kalika-red" />
                       View Full Syllabus
                    </span>
                    {expandedSyllabus === program.id ? <ChevronUp className="w-5 h-5 text-kalika-red" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
                  </button>
                  <AnimatePresence>
                    {expandedSyllabus === program.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-stone-50 border-t border-stone-100"
                      >
                        <div className="p-6 flex flex-col gap-10">
                          {program.syllabus?.map((section, sIdx) => (
                            <div key={sIdx} className="flex flex-col gap-4">
                              <h6 className="font-display font-medium text-xl text-stone-900 border-b border-stone-200 pb-2 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-kalika-red"></div>
                                {section.module}
                              </h6>
                              <div className="flex flex-col gap-6">
                                {section.items.map((item, iIdx) => (
                                  <div key={iIdx} className="bg-white rounded-2xl p-5 border border-stone-100 shadow-sm flex flex-col gap-4">
                                    {item.title && <h6 className="font-bold text-kalika-red text-sm uppercase tracking-wider">{item.title}</h6>}
                                    
                                    {item.concepts && (
                                      <div>
                                        <strong className="text-[10px] text-stone-400 uppercase tracking-[0.2em] block mb-2">Key Concepts</strong>
                                        <ul className="flex flex-col gap-1.5 pl-4 border-l-2 border-stone-200">
                                          {item.concepts.map((c, cIdx) => (
                                            <li key={cIdx} className="text-stone-600 text-sm font-medium relative before:absolute before:-left-[1.3rem] before:top-2 before:w-1.5 before:h-1.5 before:bg-stone-300 before:rounded-full">{c}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {item.activities && (
                                      <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                                        <strong className="text-[10px] text-kalika-red font-bold uppercase tracking-[0.2em] block mb-2">Activity</strong>
                                        <ul className="flex flex-col gap-1.5 pl-4 list-disc marker:text-kalika-red">
                                          {item.activities.map((a, aIdx) => (
                                            <li key={aIdx} className="text-stone-700 text-sm font-medium">{a}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {item.outcome && (
                                      <div className="mt-1 text-sm text-stone-800 font-medium flex gap-3 items-start bg-stone-50 p-3.5 rounded-xl border border-stone-100">
                                        <Star className="w-4 h-4 text-kalika-red shrink-0 mt-0.5 fill-current" />
                                        <span><strong className="uppercase tracking-widest text-[10px] text-stone-400 block mb-0.5">Outcome</strong> {item.outcome}</span>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              
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

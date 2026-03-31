import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Cpu, Rocket, Wrench, Zap, Code, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, Star } from 'lucide-react';
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

interface SyllabusItem {
  title?: string;
  concepts?: string[];
  activities?: string[];
  outcome?: string;
  customContent?: string[];
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
    id: 'ai-coding',
    title: 'Artificial Intelligence',
    age: '11-14 Years',
    duration: '8-Week Masterclass',
    features: ['Python Basics', 'Machine Learning Concepts', 'Robot Building'],
    description: 'Step into the future! Older students will learn the fundamentals of coding by programming their own functional AI robots, understanding how technology shapes our world.',
    image: aiImg,
    icon: <Code className="w-5 h-5" />,
    syllabus: [
      {
        module: 'Technical Curriculum',
        items: [
          {
            title: 'Syllabus Update',
            concepts: ['The detailed session-by-session syllabus for this track will be shared with enrolled students at the start of the program.'],
            outcome: 'Stay tuned for the full technical roadmap.'
          }
        ]
      }
    ]
  },
  {
    id: 'space-astronomy',
    title: 'Astronomics',
    age: '11-14 Years',
    duration: '6-Week Series',
    features: ['Astrophysics', 'Telescope Mechanics', 'Mission Planning'],
    description: 'An immersive journey through the cosmos. Students study real star maps, build incredibly detailed solar system models, and learn the physics behind rocket launches.',
    image: spaceImg,
    icon: <Rocket className="w-5 h-5" />,
    syllabus: [
      {
        module: 'Session 1: Big Bang Theory (Including Hydrogen Atom)',
        items: [
          {
            title: 'Big Bang Theory',
            concepts: ['Origin of the universe', 'Expansion from a hot dense state', 'Formation of elementary particles', 'Formation of protons, neutrons, electrons', 'Formation of the first hydrogen atoms', 'Importance of hydrogen in stars and the universe'],
            activities: ['Timeline chart of the early universe', 'Students place events in sequence']
          },
          {
            title: 'Hubble Law',
            concepts: ['Galaxies are moving away from us', 'The farther the galaxy, the faster it recedes', 'Hubble’s Law: v = H₀d', 'Introduction to redshift'],
            activities: ['Balloon expansion model with measured distances', 'Discuss relationship between distance and recession'],
            outcome: 'Students understand how Hubble’s observation supports the expanding universe model.'
          }
        ]
      },
      {
        module: 'Session 2: CMB Radiation',
        items: [
          {
            title: 'CMB Radiation',
            concepts: ['Cosmic Microwave Background as leftover radiation from early universe', 'Recombination era', 'Why CMB is important evidence for the Big Bang', 'Uniformity and tiny temperature fluctuations'],
            activities: ['Show CMB map images', 'Identify hot and cold regions']
          },
          {
            title: 'Basic Physics for Satellite and Rocket Dynamics',
            concepts: ['Force: A push or pull on an object; changes motion', 'Mass: Amount of matter in an object; does not change with location', 'Weight: Force due to gravity acting on mass (W = mg)', 'Gravity: Attractive force between two masses; Earth’s gravity pulls everything toward its center']
          },
          {
            title: 'Newton’s Laws of Motion in Rocket Science',
            customContent: [
              'Newton’s First Law (Law of Inertia): An object remains at rest or in uniform motion unless acted upon by an external force.',
              'Rocket Connection: A rocket on the launch pad stays still until thrust is produced; a satellite in space keeps moving due to little friction.',
              'Newton’s Second Law: Force = mass × acceleration (F = ma)',
              'Rocket Connection: More force gives more acceleration; heavier rockets need more force to lift off.',
              'Newton’s Third Law: For every action, there is an equal and opposite reaction.',
              'Rocket Connection: Hot gases are pushed downward, rocket moves upward. Rockets work by pushing exhaust gases backward.'
            ]
          },
          {
            title: 'Introduction to Satellites',
            concepts: ['Definition of satellites (natural and artificial)', 'Applications: communication, weather forecasting, remote sensing, GPS, scientific research', 'Basic parts/subsystems: structure, power, communication, payload, onboard computer, attitude control'],
            activities: ['Label a satellite diagram', 'Match subsystem to function'],
            outcome: 'Students understand the purpose and basic engineering of satellites.'
          }
        ]
      },
      {
        module: 'Session 3: Aerospace (CORE)',
        items: [
          {
            title: 'Rocket Dynamics and Newton’s Laws',
            concepts: ['Why rockets are needed', 'Newton’s 1st, 2nd, and 3rd laws', 'Thrust and action-reaction', 'Mass, acceleration, and fuel', 'Multi-stage rockets (basic idea)', 'Structure of a rocket', 'Types of propulsion System'],
            activities: ['Balloon rocket', 'Water rocket launch', 'Force and motion discussion'],
            outcome: 'Students understand how rocket motion is explained by Newton’s laws.'
          },
          {
            title: 'Types of Orbits and Their Specifications',
            concepts: ['What is an orbit? Circular vs elliptical orbit', 'Key orbit types: LEO (Low Earth Orbit), MEO, GEO, Polar Orbit, Sun-Synchronous Orbit', 'Specifications: altitude, period, inclination, applications'],
            customContent: ['Forces on a Rocket:', '1. Thrust – upward', '2. Weight – downward', '3. Drag – air resistance', '4. Lift – usually less important for rockets', 'If thrust < weight → rocket does not rise', 'If thrust > weight → rocket lifts off'],
            activities: ['Orbit comparison chart', 'Students identify best orbit for different missions'],
            outcome: 'Students understand how orbit choice depends on mission purpose.'
          },
          {
            title: 'Electromagnetic Spectrum',
            concepts: ['Nature of electromagnetic waves', 'Relationship between wavelength and frequency', 'Main regions: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays', 'Applications in: astronomy, satellite communication, imaging, remote sensing'],
            activities: ['Spectrum chart worksheet', 'Visible light demo with prism', 'Remote control IR demo if available']
          }
        ]
      }
    ]
  },
  {
    id: 'gokart-racing',
    title: 'Go-kart Experience',
    age: '11-14 Years',
    duration: 'Ongoing Seasonal',
    features: ['Mechanical Physics', 'Track Racing', 'Vehicle Maintenance'],
    description: 'Go beyond just driving. Students will learn the mechanics of how their karts work, perform basic pit-stop maintenance, and race on our advanced track.',
    image: gokartImg,
    icon: <Wrench className="w-5 h-5" />,
    syllabus: [
      {
        module: 'Technical Curriculum',
        items: [
          {
            title: 'Syllabus Update',
            concepts: ['The detailed session-by-session syllabus for this track will be shared with enrolled students at the start of the program.'],
            outcome: 'Stay tuned for the full technical roadmap.'
          }
        ]
      }
    ]
  },
  {
    id: 'electrical-plumbing',
    title: 'Electrical & Plumbing',
    age: '11-14 Years',
    duration: '5-Week Intensive',
    features: ['Advanced Soldering', 'Complex PVC Systems', 'Logic Gates'],
    description: 'A deep dive into how the modern world works. Students will safely build advanced electrical circuits and engineer complex water-flow systems from scratch.',
    image: electricalImg,
    icon: <Zap className="w-5 h-5" />,
    syllabus: [
      {
        module: 'Technical Curriculum',
        items: [
          {
            title: 'Syllabus Update',
            concepts: ['The detailed session-by-session syllabus for this track will be shared with enrolled students at the start of the program.'],
            outcome: 'Stay tuned for the full technical roadmap.'
          }
        ]
      }
    ]
  },
  {
    id: 'pottery',
    title: 'Pottery',
    age: '11-14 Years',
    duration: '6-Week Program',
    features: ['Wheel Throwing', 'Glaze Chemistry', 'Advanced Sculpting'],
    description: 'Take artistry to the next level. Students master the pottery wheel, learning precise movements to create professional-grade, beautiful clay vessels.',
    image: potteryImg,
    icon: <Cpu className="w-5 h-5 opacity-0" />,
    syllabus: [
      {
        module: 'Technical Curriculum',
        items: [
          {
            title: 'Coming Soon',
            concepts: ['The detailed session-by-session syllabus for this track will be shared with enrolled students at the start of the program.'],
            outcome: 'Stay tuned for the full technical roadmap.'
          }
        ]
      }
    ]
  },
  {
    id: 'pebblezapp',
    title: 'Arts & Craft',
    age: '11-14 Years',
    duration: '4-Week Studio',
    features: ['Fine Brush Techniques', 'Color Theory', 'Portfolio Building'],
    description: 'An advanced studio art class where students use fine-tipped brushes to paint incredibly intricate, detailed masterpieces on natural stone canvases.',
    image: pebblezappImg,
    icon: <Wrench className="w-5 h-5 opacity-0" />,
    syllabus: [
      {
        module: 'Technical Curriculum',
        items: [
          {
            title: 'Coming Soon',
            concepts: ['The detailed session-by-session syllabus for this track will be shared with enrolled students at the start of the program.'],
            outcome: 'Stay tuned for the full technical roadmap.'
          }
        ]
      }
    ]
  },
  {
    id: 'certification',
    title: 'Pro Lab Certification',
    age: 'Graduates',
    duration: 'Final Achievement',
    features: ['Skill Assessment', 'Official Recognition', 'Alumni Network'],
    description: 'The ultimate achievement. Students who master a series of Pro Lab modules receive our high-tier KalikaSphere Certificate of Innovation, ready for academic portfolios.',
    image: certificationImg,
    icon: <ShieldCheck className="w-5 h-5" />
  }
];

const ProLabsPrograms = ({ setCurrentView }: ProLabsProgramsProps) => {
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>(null);

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
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
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
                      <div className="flex-shrink-0 bg-kalika-red/10 p-1 rounded-full">
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

                                    {item.customContent && (
                                      <div>
                                        <ul className="flex flex-col gap-2">
                                          {item.customContent.map((c, cIdx) => (
                                            <li key={cIdx} className="text-stone-600 text-sm font-medium">{c}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {item.activities && (
                                      <div className="bg-kalika-red/5 p-4 rounded-xl border border-kalika-red/10">
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

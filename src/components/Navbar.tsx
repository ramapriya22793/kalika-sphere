import React, { useState, useEffect } from 'react';
import { Home, Beaker, Lightbulb, Image, Mail, Menu, X, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoAsset from '../assets/logo.png';
import KalikaLogo from './KalikaLogo';

interface NavbarProps {
  setCurrentView?: (view: 'home' | 'programs' | 'pro-programs' | 'gallery' | 'enroll' | 'summer-workshop') => void;
  currentView?: 'home' | 'programs' | 'pro-programs' | 'gallery' | 'enroll' | 'summer-workshop';
}

const Navbar = ({ setCurrentView, currentView }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);



  // Sync activeItem with currentView whenever currentView changes
  useEffect(() => {
    if (currentView === 'home') setActiveItem('Home');
    else if (currentView === 'programs') setActiveItem('Kids Lab');
    else if (currentView === 'pro-programs') setActiveItem('Pro Lab');
    else if (currentView === 'gallery') setActiveItem('Gallery');
    else if (currentView === 'enroll') setActiveItem('Enroll Now');
    else if (currentView === 'summer-workshop') setActiveItem('Summer Camp');
  }, [currentView]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems: { label: string; icon: React.ReactNode; href: string }[] = [
    { label: 'Home', icon: <Home className="w-4 h-4" />, href: '#' },
    { label: 'About', icon: <Lightbulb className="w-4 h-4" />, href: '#about' },
    { label: 'Kids Lab', icon: <Beaker className="w-4 h-4" />, href: '#kids-lab' },
    { label: 'Pro Lab', icon: <Lightbulb className="w-4 h-4" />, href: '#pro-labs' },
    { label: 'Gallery', icon: <Image className="w-4 h-4" />, href: '#gallery' },
    { label: 'Summer Camp', icon: <Sun className="w-4 h-4" />, href: '#summer-camp' },
    { label: 'Contact', icon: <Mail className="w-4 h-4" />, href: '#contact' },
  ];

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isScrolled ? 'top-2 px-4' : 'top-[11rem] md:top-14 px-4 md:px-12'}`}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ease-in-out bg-white/60 backdrop-blur-3xl rounded-full border border-white/30 shadow-premium
        ${isScrolled ? 'px-6 py-2' : 'px-4 py-3'}`}>
        <div className="flex items-center justify-between">
          
          {/* Logo Area (Circular icon & Stencil text) */}
          <div 
            onClick={() => { setCurrentView && setCurrentView('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
            className="flex items-center gap-2 md:gap-4 cursor-pointer group"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
              <img src={logoAsset} alt="Kalika Sphere Logo" className="w-full h-full object-contain hover:rotate-12 transition-transform duration-500" />
            </div>
            <div className="block">
              <KalikaLogo size={isMobile ? 'sm' : 'md'} />
            </div>
          </div>

          {/* Nav Items - Icons & Text (Image 2 style) */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  setActiveItem(item.label);
                  if (setCurrentView) {
                    if (item.label === 'Pro Lab') {
                      e.preventDefault();
                      setCurrentView('pro-programs');
                      window.scrollTo({ top: 0 });
                    } else if (item.label === 'Kids Lab') {
                      e.preventDefault();
                      setCurrentView('programs');
                      window.scrollTo({ top: 0 });
                    } else if (item.label === 'Gallery') {
                      e.preventDefault();
                      setCurrentView('gallery');
                      window.scrollTo({ top: 0 });
                    } else if (item.label === 'Summer Camp') {
                      e.preventDefault();
                      setCurrentView('summer-workshop');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      if (item.href === '#') {
                        e.preventDefault();
                        setCurrentView('home');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        setTimeout(() => {
                          const target = document.querySelector(item.href);
                          if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }
                    }
                  }
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[0.88rem] font-bold tracking-tight transition-all duration-300 transform whitespace-nowrap
                  ${activeItem === item.label
                    ? 'text-white bg-red-600 shadow-lg shadow-red-600/20 active:scale-95'
                    : 'text-stone-800 hover:text-red-600 hover:bg-white/50 active:scale-95'
                  }`}
              >
                <span className={`${activeItem === item.label ? 'text-white' : 'text-stone-400'}`}>
                  {item.icon}
                </span>
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
             {/* Vibrant Red Enroll Button (Responsive visibility) */}
             <button 
                onClick={() => {
                  if (setCurrentView) {
                    setCurrentView('enroll');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="hidden sm:block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-red-600/20 active:scale-95 text-[0.9rem] uppercase tracking-wider border-2 border-white/10"
              >
                Enroll Now
              </button>

              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 rounded-full bg-stone-50 text-stone-900 hover:bg-stone-100 transition-colors border border-stone-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-[15rem] left-4 right-4 bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-2xl border border-white/50 lg:hidden"
          >
            <div className="grid grid-cols-1 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    setActiveItem(item.label);
                    if (setCurrentView) {
                      if (item.label === 'Pro Lab') {
                        e.preventDefault();
                        setCurrentView('pro-programs');
                      } else if (item.label === 'Kids Lab') {
                        e.preventDefault();
                        setCurrentView('programs');
                      } else if (item.label === 'Gallery') {
                        e.preventDefault();
                        setCurrentView('gallery');
                      } else if (item.label === 'Summer Camp') {
                        e.preventDefault();
                        setCurrentView('summer-workshop');
                      } else {
                        if (item.href === '#') {
                          e.preventDefault();
                          setCurrentView('home');
                        }
                      }
                    }
                  }}
                  className={`flex items-center gap-4 p-4 rounded-2xl text-base font-bold transition-all
                    ${activeItem === item.label
                      ? 'text-white bg-red-600 shadow-lg shadow-red-600/20'
                      : 'text-stone-600 hover:bg-stone-50'
                    }`}
                >
                  <div className={`p-2 rounded-xl ${activeItem === item.label ? 'bg-red-700 text-white' : 'bg-stone-100 text-stone-400'}`}>
                    {item.icon}
                  </div>
                  {item.label}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-stone-100">
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    if (setCurrentView) {
                      setCurrentView('enroll');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-red-600 text-white py-4 rounded-full font-black uppercase tracking-widest shadow-xl shadow-red-600/20"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

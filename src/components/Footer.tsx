import { Camera, Share2, PlaySquare, Heart, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import KalikaLogo from './KalikaLogo';

const Footer = () => {
  return (
    <footer className="bg-kalika-cream text-stone-600 py-20 md:py-28 px-4 md:px-8 border-t border-stone-200/50 relative overflow-hidden" id="contact">
      {/* Background ambient lighting - softened */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kalika-orange/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-4 lg:col-span-5">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-12">
              <div className="relative w-32 h-32 lg:w-48 lg:h-48 flex items-center justify-center flex-shrink-0 animate-float">
                <img src={logo} alt="Kalika Sphere Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col justify-center">
                <KalikaLogo size="xl" theme="light" />
              </div>
            </div>
            <p className="text-stone-500 leading-relaxed mb-8 text-lg font-light max-w-sm">
              A premium, 360-degree learning space designed to nurture creativity, build advanced skills, and inspire the next generation.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/kalikasphere/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full border border-stone-200 bg-white shadow-sm flex items-center justify-center text-stone-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent transition-all duration-300 group" 
                title="Follow us on Instagram"
              >
                <svg 
                  className="w-5 h-5 group-hover:scale-110 transition-transform fill-current" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.439-.645 1.439-1.441s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-stone-200 bg-white shadow-sm flex items-center justify-center text-stone-400 hover:text-white hover:bg-kalika-red hover:border-kalika-red transition-all duration-300 group">
                <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-stone-200 bg-white shadow-sm flex items-center justify-center text-stone-400 hover:text-white hover:bg-kalika-red hover:border-kalika-red transition-all duration-300 group">
                <PlaySquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h4 className="font-display font-bold text-stone-900 text-lg mb-8 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-4 font-medium text-stone-500">
              <li><a href="#" className="hover:text-kalika-red transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span> Home</a></li>
              <li><a href="#about" className="hover:text-kalika-red transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span> About Us</a></li>
              <li><a href="#kids-lab" className="hover:text-kalika-red transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-kalika-orange"></span> Kid Lab</a></li>
              <li><a href="#pro-labs" className="hover:text-kalika-red transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-kalika-red"></span> Pro Lab</a></li>
              <li><a href="#gallery" className="hover:text-kalika-red transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span> Gallery</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1 md:col-span-5 lg:col-span-5">
            <h4 className="font-display font-bold text-stone-900 text-lg mb-8 uppercase tracking-wider">Contact Us</h4>
            
            <div className="flex flex-col gap-6">
              <a href="tel:+918754787774" className="flex items-center gap-4 group p-4 rounded-2xl bg-white border border-stone-100 shadow-soft hover:border-kalika-red/30 hover:shadow-premium transition-all">
                <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center flex-shrink-0 group-hover:bg-kalika-red transition-colors">
                  <Phone className="w-5 h-5 text-stone-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-1">Direct Line</p>
                  <p className="text-2xl font-display font-black text-stone-900 group-hover:text-kalika-red transition-colors">+91-8754-78-7774</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-stone-100 shadow-soft">
                <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-kalika-red" />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-display font-medium text-stone-800 leading-tight">No. 11, Saraswathi Avenue, Achipetti, Pollachi, Coimbatore</p>
                </div>
              </div>
              
              <a href="mailto:info@kalikasphere.com" className="flex items-center gap-4 group p-4 rounded-2xl bg-white border border-stone-100 shadow-soft hover:border-kalika-red/30 hover:shadow-premium transition-all">
                <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center flex-shrink-0 group-hover:bg-kalika-red transition-colors">
                  <Mail className="w-4 h-4 text-stone-400 group-hover:text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-display font-bold text-stone-800 group-hover:text-kalika-red transition-colors">info@kalikasphere.com</p>
                </div>
              </a>
            </div>
            
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-stone-200/50 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-400 text-sm font-medium">
          <p>© 2026 Kalika Sphere. All rights reserved.</p>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-stone-100 shadow-sm">
            Made with <Heart className="w-3.5 h-3.5 text-kalika-red fill-current" /> for the next generation
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

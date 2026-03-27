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
              <a href="#" className="w-12 h-12 rounded-full border border-stone-200 bg-white shadow-sm flex items-center justify-center text-stone-400 hover:text-white hover:bg-kalika-red hover:border-kalika-red transition-all duration-300 group">
                <Camera className="w-5 h-5 group-hover:scale-110 transition-transform" />
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
                  <p className="text-lg font-display font-bold text-stone-800 leading-none">Coimbatore & Pollachi</p>
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

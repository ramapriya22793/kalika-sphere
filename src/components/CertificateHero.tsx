import { motion } from 'framer-motion';
import { Star, ShieldCheck, GraduationCap } from 'lucide-react';
import KalikaLogo from './KalikaLogo';

interface CertificateHeroProps {
  type: 'kids' | 'pro';
  studentName?: string;
}

const CertificateHero = ({ type, studentName = 'SARAH JOHNSON' }: CertificateHeroProps) => {
  const isKids = type === 'kids';

  return (
    <div className="w-full relative group">
      {/* Background Photo Style Frame */}
      <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-stone-100 shadow-inner flex items-center justify-center p-4">
        
        {/* The "Hand-held" Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent z-10"></div>
        
        {/* The Living Certificate */}
        <motion.div 
          initial={{ scale: 0.9, rotate: -2, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          className="relative w-full h-full bg-white rounded-xl shadow-2xl border-[12px] border-white p-6 flex flex-col items-center justify-between overflow-hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f5f5f5' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        >
          {/* Borders & Ornaments */}
          <div className={`absolute inset-0 border-[2px] m-1 rounded-lg ${isKids ? 'border-kalika-orange/20' : 'border-kalika-red/20'}`}></div>
          
          {/* Corner Icons */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Star className={`w-4 h-4 ${isKids ? 'text-kalika-orange' : 'text-kalika-red'}`} />
            {isKids && <div className="w-3 h-3 rounded-full bg-blue-400 opacity-30"></div>}
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
             {isKids ? <Star className="w-4 h-4 text-kalika-red" /> : <ShieldCheck className="w-4 h-4 text-kalika-red" />}
          </div>

          {/* Header */}
          <div className="mt-4 flex flex-col items-center gap-2">
            <KalikaLogo size="sm" showSubText={false} className="mb-2" />
            <h4 className={`text-[10px] font-bold uppercase tracking-[0.3em] ${isKids ? 'text-kalika-orange' : 'text-kalika-red'}`}>
               {isKids ? 'Kids Lab Certification' : 'Pro Lab Innovation Hub'}
            </h4>
          </div>

          {/* Main Title */}
          <div className="text-center py-4">
             <h2 className={`font-display text-2xl font-black ${isKids ? 'text-stone-800' : 'text-stone-900'} leading-tight tracking-tight`}>
               CERTIFICATE <br/>
               <span className="text-sm tracking-[0.2em] opacity-60">OF ACHIEVEMENT</span>
             </h2>
          </div>

          {/* Body */}
          <div className="text-center">
             <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-2 font-bold">Awarded To</p>
             <h3 className="text-lg font-display font-medium text-kalika-red underline decoration-stone-200 underline-offset-8 decoration-2">{studentName}</h3>
             <p className="text-[8px] text-stone-500 mt-6 max-w-[180px] mx-auto italic font-medium">
               For successful mastery of the {isKids ? 'Early Discovery' : 'Advanced Innovation'} curriculum modules at KalikaSphere.
             </p>
          </div>

          {/* Footer / Seal */}
          <div className="w-full flex justify-between items-end mt-4 px-4">
            <div className="border-t border-stone-200 pt-1 w-20">
               <p className="text-[6px] text-stone-400 font-bold uppercase">Date Issued</p>
            </div>
            
            <div className="relative">
               <div className={`w-10 h-10 rounded-full ${isKids ? 'bg-kalika-orange' : 'bg-kalika-red'} flex items-center justify-center shadow-lg`}>
                  <GraduationCap className="w-5 h-5 text-white" />
               </div>
               <div className="absolute -inset-1 border border-dashed border-white/50 rounded-full animate-spin"></div>
            </div>

            <div className="border-t border-stone-200 pt-1 w-20 text-right">
               <p className="text-[6px] text-stone-400 font-bold uppercase">Official Seal</p>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Decorative Ribbon Icon Overlay for "Certification" sections */}
      <div className="absolute -top-3 -right-3 bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center border border-stone-100 z-20 overflow-hidden transform rotate-12 group-hover:rotate-0 transition-transform">
         <div className={`w-full h-full ${isKids ? 'bg-kalika-orange' : 'bg-kalika-red'} flex items-center justify-center opacity-10 absolute`}></div>
         {isKids ? <Star className="w-6 h-6 text-kalika-orange" /> : <ShieldCheck className="w-6 h-6 text-kalika-red" />}
      </div>
    </div>
  );
};

export default CertificateHero;

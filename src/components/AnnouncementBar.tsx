interface AnnouncementBarProps {
  setCurrentView?: (view: 'home' | 'programs' | 'pro-programs' | 'gallery' | 'enroll' | 'summer-workshop') => void;
}

const AnnouncementBar = ({ setCurrentView }: AnnouncementBarProps) => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white py-2 px-4 text-center shadow-lg relative z-50 overflow-hidden">
      <a 
        href="#summer-workshop" 
        onClick={(e) => {
          e.preventDefault();
          if (setCurrentView) setCurrentView('home');
          setTimeout(() => {
            const el = document.getElementById('summer-workshop');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        className="flex md:flex-row flex-col items-center justify-center gap-2 md:gap-4 hover:opacity-90 transition-all duration-300 py-0.5"
      >
        <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
          <span className="font-black uppercase tracking-wider text-[11px] md:text-[13px] text-green-400">NEW SUMMER CAMP 2026</span>
          <span className="opacity-40 hidden md:inline">•</span>
          <span className="font-bold text-[10px] md:text-[12px] tracking-wide">27 APR 2026 - 02 MAY 2026 (06 DAYS)</span>
          <span className="opacity-40 hidden md:inline">•</span>
          <div className="flex items-center gap-3">
            <span className="text-[10px] md:text-[12px] line-through opacity-60 font-medium">₹12,000/-</span>
            <span className="bg-white text-red-600 px-3 py-0.5 rounded-full text-[10px] md:text-[11px] font-black shadow-sm uppercase tracking-tighter">
              ₹9,999/- ONLY
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AnnouncementBar;
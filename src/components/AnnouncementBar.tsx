const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-2 px-4 text-center text-sm font-medium tracking-wide shadow-md">
      
      <a 
        href="#register" 
        className="flex md:flex-row flex-col items-center justify-center gap-2 md:gap-4 hover:opacity-90 transition-all duration-300 py-1"
      >
        <span className="font-bold uppercase tracking-wider text-green-300">New Summer Camp</span>
        <span className="hidden md:inline text-white/50">•</span>
        <span>29 APR 2026 - 02 MAY 2026 (06 DAYS)</span>
        <span className="hidden md:inline text-white/50">•</span>
        <span className="flex items-center gap-2">
           <span className="line-through text-white/60">₹12,000/-</span> 
           <span className="bg-white text-kalika-red px-2 py-0.5 rounded-md font-bold text-xs uppercase shadow-sm">₹9,999/- Only</span>
        </span>
      </a>

    </div>
  );
};

export default AnnouncementBar;
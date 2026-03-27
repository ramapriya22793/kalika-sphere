// Precision Geometric Stencil Logo component

interface KalikaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubText?: boolean;
  theme?: 'light' | 'dark'; // Add theme support
}

const KalikaLogo = ({ 
  className = '', 
  size = 'md', 
  showSubText = true,
  theme = 'light' 
}: KalikaLogoProps) => {
  // Scaling factors based on size
  const scales = {
    sm: 0.35, // Navbar (Minimalist text)
    md: 0.5,
    lg: 0.7,
    xl: 0.55  // Footer (Subtle and sophisticated)
  };

  const colors = {
    light: {
      kalika: "#0f172a", // Dark blue-black for light backgrounds
      sphere: "#C21515"  // Standard red
    },
    dark: {
      kalika: "#f8fafc", // Off-white for dark backgrounds
      sphere: "#ef4444"  // Brighter red for better contrast on dark
    }
  };
  
  const currentColors = colors[theme];
  const scale = scales[size];
  const charWidth = 40;
  const charHeight = 40;
  const gap = 8 * scale; // Increased tracking for modern look
  
  // Final Precision Geometric Stencil Segments (Matching Close-up Image)
  const segments: { [key: string]: string[] } = {
    'K': [
      "M2,2 V16", "M2,24 V38", // Large split in left stem
      "M18,20 L38,4",           // Top diagonal (further offset)
      "M18,20 L38,36"          // Bottom diagonal (further offset)
    ],
    'A': [
      "M19,4 L14,16",   // Top-left diagonal (with apex gap)
      "M10,24 L4,38",    // Bottom-left diagonal
      "M21,4 L26,16",   // Top-right diagonal (with apex gap)
      "M30,24 L36,38",   // Bottom-right diagonal
      "M14,22 H26"       // Floating middle bar
    ],
    'L': [
      "M2,2 V16", "M2,24 V38", // Split left stem
      "M10,38 H38"             // Detached floating bottom bar
    ],
    'I': [
      "M20,2 V16", "M20,24 V38" // Split center stem
    ],
    'S': [
      "M38,2 H8",              // Top horizontal
      "M2,10 V16",             // Corner top-left
      "M10,20 H30",            // Floating middle bar
      "M38,24 V32",            // Corner bottom-right
      "M30,38 H2"              // Bottom horizontal
    ],
    'P': [
      "M2,2 V16", "M2,24 V38", // Split left stem
      "M10,2 H34 V18 H10"      // Detached floating loop
    ],
    'H': [
      "M2,2 V16", "M2,24 V38", // Split left stem
      "M38,2 V16", "M38,24 V38", // Split right stem
      "M10,20 H30"             // Floating cross bar
    ],
    'E': [
      "M2,2 V16", "M2,24 V38", // Split left stem
      "M10,2 H38",             // Top bar
      "M10,20 H30",            // Middle bar
      "M10,38 H38"             // Bottom bar
    ],
    'R': [
      "M2,2 V16", "M2,24 V38", // Split left stem
      "M10,2 H34 V18 H10",     // Floating loop
      "M18,22 L38,38"          // Floating kick
    ]
  };

  const renderWord = (word: string, color: string, startY: number) => {
    return word.split('').map((char, index) => (
      <g key={`${word}-${char}-${index}`} transform={`translate(${index * (charWidth + gap)}, ${startY})`}>
        {segments[char]?.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke={color}
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="none"
            className="transition-all duration-300"
          />
        ))}
      </g>
    ));
  };

  const kalikaWidth = "KALIKA".length * (charWidth + gap);
  const sphereWidth = "SPHERE".length * (charWidth + gap);
  const viewBoxWidth = Math.max(kalikaWidth, sphereWidth);

  return (
    <div className={`inline-block ${className}`} style={{ width: viewBoxWidth * scale, height: (charHeight * 2.5) * scale }}>
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${charHeight * 2.5}`}
        preserveAspectRatio="xMinYMin meet"
        className="w-full h-full"
      >
        {/* KALIKA Word */}
        <g className="hover:opacity-80 transition-opacity cursor-pointer">
          {renderWord("KALIKA", currentColors.kalika, 0)}
        </g>
        
        {/* SPHERE Word */}
        {showSubText && (
           <g className="hover:opacity-80 transition-opacity cursor-pointer" transform={`translate(2, ${charHeight + 12}) scale(0.95)`}>
             {renderWord("SPHERE", currentColors.sphere, 0)}
           </g>
         )}
      </svg>
    </div>
  );
};

export default KalikaLogo;

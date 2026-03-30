// Precision Geometric Stencil Logo component (Original Stacked Design)

interface KalikaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubText?: boolean;
  theme?: 'light' | 'dark';
}

const KalikaLogo = ({ 
  className = '', 
  size = 'md', 
  showSubText = true,
  theme = 'light' 
}: KalikaLogoProps) => {
  // Scaling factors based on size
  const scales = {
    sm: 0.35, 
    md: 0.5,
    lg: 0.7,
    xl: 0.55
  };

  const colors = {
    light: {
      kalika: "#FF0011", 
      sphere: "#133FB0"  
    },
    dark: {
      kalika: "#f8fafc", 
      sphere: "#ef4444"  
    }
  };
  
  const currentColors = colors[theme];
  const scale = scales[size];
  const charWidth = 40;
  const charHeight = 40;
  const gap = 8 * scale; 
  
  const segments: { [key: string]: string[] } = {
    'K': [
      "M2,2 V16", "M2,24 V38", 
      "M18,20 L38,4",           
      "M18,20 L38,36"          
    ],
    'A': [
      "M19,4 L14,16",   
      "M10,24 L4,38",    
      "M21,4 L26,16",   
      "M30,24 L36,38",   
      "M14,22 H26"       
    ],
    'L': [
      "M2,2 V16", "M2,24 V38", 
      "M10,38 H38"             
    ],
    'I': [
      "M20,2 V16", "M20,24 V38" 
    ],
    'S': [
      "M38,2 H8",              
      "M2,10 V16",             
      "M10,20 H30",            
      "M38,24 V32",            
      "M30,38 H2"              
    ],
    'P': [
      "M2,2 V16", "M2,24 V38", 
      "M10,2 H34 V18 H10"      
    ],
    'H': [
      "M2,2 V16", "M2,24 V38", 
      "M38,2 V16", "M38,24 V38", 
      "M10,20 H30"             
    ],
    'E': [
      "M2,2 V16", "M2,24 V38", 
      "M10,2 H38",             
      "M10,20 H30",            
      "M10,38 H38"             
    ],
    'R': [
      "M2,2 V16", "M2,24 V38", 
      "M10,2 H34 V18 H10",     
      "M18,22 L38,38"          
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
        <g className="hover:opacity-80 transition-opacity cursor-pointer">
          {renderWord("KALIKA", currentColors.kalika, 0)}
        </g>
        
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

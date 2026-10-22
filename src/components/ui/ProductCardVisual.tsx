import React from 'react';

interface ProductVisualProps {
  productId: string;
  colorHex?: string;
  accentHex?: string;
  className?: string;
}

export const ProductCardVisual: React.FC<ProductVisualProps> = ({
  productId,
  colorHex = '#0c0c0f',
  accentHex = '#d4ff00',
  className = ''
}) => {
  switch (productId) {
    case 'void-runner':
      return (
        <div className={`relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#121217] via-[#0b0b0e] to-[#070709] overflow-hidden ${className}`}>
          {/* Background Grid Accent */}
          <div className="absolute inset-0 grid-mesh opacity-20" />
          <div className="absolute top-3 left-3 text-[10px] font-mono-tech text-white/30 tracking-widest uppercase">
            CHASSIS // VR-01
          </div>
          <div className="absolute bottom-3 right-3 text-[10px] font-mono-tech text-[#d4ff00]/60 tracking-widest uppercase">
            3D SHOWROOM READY
          </div>

          {/* Detailed Vector Sneaker Silhouette */}
          <svg viewBox="0 0 320 180" className="w-full h-auto max-h-56 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105" fill="none">
            {/* Soft Shadow */}
            <ellipse cx="160" cy="162" rx="130" ry="12" fill="black" opacity="0.6" filter="blur(6px)" />
            
            {/* Outsole and Midsole */}
            <path
              d="M40 145 C60 145 90 148 130 148 C180 148 230 142 275 130 C285 127 282 118 270 120 C230 126 170 128 120 128 C80 128 50 125 35 135 C30 140 33 145 40 145 Z"
              fill="#18181f"
              stroke="#2e2e38"
              strokeWidth="1.5"
            />
            {/* Sole Articulation Grooves */}
            <line x1="90" y1="135" x2="88" y2="148" stroke="#050507" strokeWidth="2.5" />
            <line x1="140" y1="135" x2="138" y2="148" stroke="#050507" strokeWidth="2.5" />
            <line x1="190" y1="133" x2="188" y2="146" stroke="#050507" strokeWidth="2.5" />
            <line x1="240" y1="128" x2="238" y2="138" stroke="#050507" strokeWidth="2.5" />

            {/* Nitrogen Cushion Window */}
            <rect x="75" y="132" width="35" height="8" rx="2" fill={accentHex} opacity="0.85" />

            {/* Upper Main Body */}
            <path
              d="M50 132 C45 110 55 90 80 82 C105 75 140 60 170 50 C185 45 200 65 210 90 C235 100 260 108 275 120 C250 128 160 132 50 132 Z"
              fill={colorHex}
              stroke="#383842"
              strokeWidth="1.5"
            />

            {/* Ankle Collar & Tongue */}
            <path
              d="M80 82 C90 60 110 50 125 50 C135 60 145 75 155 85 C120 90 95 86 80 82 Z"
              fill="#22222b"
              stroke="#444452"
              strokeWidth="1.2"
            />

            {/* Diagonal Brand Slash Stripe */}
            <path
              d="M130 92 L165 72 L172 76 L137 96 Z"
              fill={accentHex}
              opacity="0.9"
            />

            {/* Tension Cables / Laces */}
            <line x1="145" y1="62" x2="160" y2="78" stroke={accentHex} strokeWidth="2" strokeDasharray="2 1" />
            <line x1="160" y1="58" x2="175" y2="74" stroke={accentHex} strokeWidth="2" strokeDasharray="2 1" />
            <line x1="175" y1="54" x2="190" y2="70" stroke={accentHex} strokeWidth="2" strokeDasharray="2 1" />

            {/* Heel Pull Loop */}
            <path d="M48 95 C38 88 38 78 46 75 C52 73 54 80 50 90" stroke={accentHex} strokeWidth="3" fill="none" />
          </svg>
        </div>
      );

    case 'phantom-shell':
      return (
        <div className={`relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#121217] via-[#0b0b0e] to-[#070709] overflow-hidden ${className}`}>
          <div className="absolute inset-0 grid-mesh opacity-20" />
          <div className="absolute top-3 left-3 text-[10px] font-mono-tech text-white/30 tracking-widest uppercase">
            OUTER // 3L-STORM
          </div>
          <div className="absolute bottom-3 right-3 text-[10px] font-mono-tech text-[#d4ff00]/60 tracking-widest uppercase">
            20K HYDROSTATIC
          </div>

          {/* Technical Shell Jacket Silhouette */}
          <svg viewBox="0 0 320 220" className="w-full h-auto max-h-56 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105" fill="none">
            <ellipse cx="160" cy="205" rx="100" ry="10" fill="black" opacity="0.5" filter="blur(5px)" />
            
            {/* Jacket Body */}
            <path
              d="M110 35 L140 25 L180 25 L210 35 L260 75 L235 155 L205 145 L205 195 L115 195 L115 145 L85 155 L60 75 Z"
              fill={colorHex}
              stroke="#383842"
              strokeWidth="1.5"
            />
            {/* Architectural Collar */}
            <path d="M135 25 L160 55 L185 25 Z" fill="#181820" stroke="#484855" strokeWidth="1.2" />

            {/* Asymmetrical AquaGuard Main Zip */}
            <line x1="165" y1="55" x2="155" y2="195" stroke="#050507" strokeWidth="4" />
            <line x1="165" y1="55" x2="155" y2="195" stroke={accentHex} strokeWidth="1.5" strokeDasharray="4 2" />

            {/* Angular Chest Pocket & Fidlock Flap */}
            <polygon points="120,80 150,75 148,110 118,115" fill="#181822" stroke="#40404e" strokeWidth="1.2" />
            <rect x="128" y="76" width="14" height="6" rx="1" fill={accentHex} />

            {/* Storm Sleeve Articulation Darts */}
            <line x1="80" y1="105" x2="105" y2="115" stroke="#333340" strokeWidth="1.5" />
            <line x1="240" y1="105" x2="215" y2="115" stroke="#333340" strokeWidth="1.5" />
            
            {/* Technical Hem Coordinate Print */}
            <rect x="180" y="178" width="18" height="6" fill="#000" stroke={accentHex} strokeWidth="0.8" />
          </svg>
        </div>
      );

    case 'static-heavyweight':
      return (
        <div className={`relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#121217] via-[#0b0b0e] to-[#070709] overflow-hidden ${className}`}>
          <div className="absolute inset-0 grid-mesh opacity-20" />
          <div className="absolute top-3 left-3 text-[10px] font-mono-tech text-white/30 tracking-widest uppercase">
            APPAREL // 360-GSM
          </div>
          <div className="absolute bottom-3 right-3 text-[10px] font-mono-tech text-[#d4ff00]/60 tracking-widest uppercase">
            BOX CUT FIT
          </div>

          {/* Heavyweight Boxy Tee Silhouette */}
          <svg viewBox="0 0 320 220" className="w-full h-auto max-h-56 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105" fill="none">
            <ellipse cx="160" cy="205" rx="90" ry="8" fill="black" opacity="0.5" filter="blur(5px)" />
            
            {/* Tee Body */}
            <path
              d="M125 35 Q160 48 195 35 L265 65 L245 115 L215 105 L215 190 L105 190 L105 105 L75 115 L55 65 Z"
              fill={colorHex}
              stroke="#383844"
              strokeWidth="1.5"
            />
            {/* Thick Ribbed Crew Collar */}
            <path d="M125 35 Q160 52 195 35" stroke="#505060" strokeWidth="4" fill="none" />

            {/* Dropped Shoulder Seams */}
            <line x1="125" y1="35" x2="105" y2="105" stroke="#25252e" strokeWidth="1.5" />
            <line x1="195" y1="35" x2="215" y2="105" stroke="#25252e" strokeWidth="1.5" />

            {/* Minimalist Chest Screenprint Coordinate */}
            <text x="120" y="85" fill={accentHex} fontSize="9" fontFamily="monospace" letterSpacing="2">NOIR//01</text>
            <text x="120" y="96" fill="#888894" fontSize="7" fontFamily="monospace">40°42'N 74°00'W</text>
          </svg>
        </div>
      );

    case 'afterhours-cargo':
    default:
      return (
        <div className={`relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#121217] via-[#0b0b0e] to-[#070709] overflow-hidden ${className}`}>
          <div className="absolute inset-0 grid-mesh opacity-20" />
          <div className="absolute top-3 left-3 text-[10px] font-mono-tech text-white/30 tracking-widest uppercase">
            BOTTOMS // CORDURA-X
          </div>
          <div className="absolute bottom-3 right-3 text-[10px] font-mono-tech text-[#d4ff00]/60 tracking-widest uppercase">
            ARTICULATED KNEE
          </div>

          {/* Articulated Cargo Pants Silhouette */}
          <svg viewBox="0 0 320 230" className="w-full h-auto max-h-56 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105" fill="none">
            <ellipse cx="160" cy="218" rx="85" ry="8" fill="black" opacity="0.5" filter="blur(5px)" />
            
            {/* Cargo Pants Silhouette */}
            <path
              d="M115 30 L205 30 L215 105 L200 210 L168 210 L160 115 L152 210 L120 210 L105 105 Z"
              fill={colorHex}
              stroke="#383842"
              strokeWidth="1.5"
            />
            {/* Waistband & Integrated Webbing Belt */}
            <rect x="115" y="30" width="90" height="12" fill="#181820" stroke="#333340" strokeWidth="1" />
            <line x1="145" y1="36" x2="175" y2="36" stroke={accentHex} strokeWidth="2" />

            {/* Pleated 3D Cargo Bellows Pockets */}
            <rect x="94" y="90" width="22" height="38" rx="2" fill="#1c1c24" stroke="#404050" strokeWidth="1" />
            <line x1="94" y1="102" x2="116" y2="102" stroke={accentHex} strokeWidth="1.5" />

            <rect x="204" y="90" width="22" height="38" rx="2" fill="#1c1c24" stroke="#404050" strokeWidth="1" />
            <line x1="204" y1="102" x2="226" y2="102" stroke={accentHex} strokeWidth="1.5" />

            {/* Articulated Knee Dart Seams */}
            <line x1="124" y1="140" x2="148" y2="144" stroke="#262632" strokeWidth="2" />
            <line x1="196" y1="140" x2="172" y2="144" stroke="#262632" strokeWidth="2" />

            {/* Ankle Bungee Cinch Details */}
            <circle cx="123" cy="206" r="3" fill={accentHex} />
            <circle cx="197" cy="206" r="3" fill={accentHex} />
          </svg>
        </div>
      );
  }
};

import React from 'react';
import { ArrowUp } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-white/70">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded bg-[#141419] border border-white/20 flex items-center justify-center p-1">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <path d="M22 28V72L42 38V72" stroke="#f4f4f6" strokeWidth="12" />
                  <line x1="52" y1="28" x2="48" y2="72" stroke="#d4ff00" strokeWidth="10" />
                  <path d="M60 28H80M60 48H74M60 28V72" stroke="#f4f4f6" strokeWidth="12" />
                </svg>
              </div>
              <span className="font-editorial text-xl font-extrabold text-white tracking-wider">
                NOIR<span className="text-[#d4ff00]">//</span>FORM
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/50 max-w-sm leading-relaxed font-light">
              Digital streetwear label engineered at the intersection of architectural silhouettes, technical composites, and subterranean culture.
            </p>

            <div className="text-[11px] font-mono-tech text-[#d4ff00] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
              <span>DROP 001 ACTIVE // WORLDWIDE DISPATCH</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-white font-bold mb-4">
              INDEX
            </h4>
            <ul className="space-y-2.5 text-xs font-mono-tech">
              <li>
                <a href="#collection" className="hover:text-[#d4ff00] transition">
                  CATALOGUE // DROP 001
                </a>
              </li>
              <li>
                <a href="#spotlight" className="hover:text-[#d4ff00] transition">
                  3D CAD SHOWROOM
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-[#d4ff00] transition">
                  MANIFESTO
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-[#d4ff00] transition">
                  CRAFTSMANSHIP
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-[#d4ff00] transition">
                  JOURNAL DISPATCH
                </a>
              </li>
            </ul>
          </div>

          {/* Fictional Studio & Support */}
          <div>
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-white font-bold mb-4">
              ATELIER // DEMO
            </h4>
            <ul className="space-y-2.5 text-xs font-mono-tech text-white/60">
              <li>Studio: Sector 09, Brutalist Row</li>
              <li>Coordinates: 40°42'N 74°00'W</li>
              <li>Demo Contact: lab@noirform.internal</li>
              <li>Currency: INR (₹) / Multi-Territory</li>
              <li className="text-[10px] text-white/30 pt-1">
                *Fictional demo addresses for design preview
              </li>
            </ul>
          </div>

          {/* Social Channels (Identified as Placeholders) */}
          <div>
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-white font-bold mb-4">
              CHANNELS (MOCK)
            </h4>
            <ul className="space-y-2.5 text-xs font-mono-tech">
              <li>
                <span className="text-white/60 hover:text-white cursor-pointer" onClick={() => alert('Demo placeholder for @noirform Instagram')}>
                  INSTAGRAM [DEMO]
                </span>
              </li>
              <li>
                <span className="text-white/60 hover:text-white cursor-pointer" onClick={() => alert('Demo placeholder for @noirform X/Twitter')}>
                  X / TWITTER [DEMO]
                </span>
              </li>
              <li>
                <span className="text-white/60 hover:text-white cursor-pointer" onClick={() => alert('Demo placeholder for @noirform Discord')}>
                  DISCORD COMMUNITY [DEMO]
                </span>
              </li>
              <li>
                <span className="text-white/60 hover:text-white cursor-pointer" onClick={() => alert('Demo placeholder for @noirform YouTube Lookbook')}>
                  YOUTUBE LOOKBOOK [DEMO]
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-white/40">
          <div>
            NOIR//FORM © 2026. ALL RIGHTS RESERVED. FICTIONAL STREETWEAR CONCEPT.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/60 hover:text-[#d4ff00] transition group focus:outline-none"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 group-hover:border-[#d4ff00] flex items-center justify-center transition">
              <ArrowUp size={13} className="text-[#d4ff00]" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { ArrowUpRight, Terminal, EyeOff, ShieldAlert } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#070709] border-t border-white/5 overflow-hidden">
      {/* Background Architectural Noise & Diagonal Slash */}
      <div className="absolute inset-0 editorial-grain opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-6">
          <Terminal size={14} className="text-[#d4ff00]" />
          <span className="text-xs font-mono-tech tracking-widest text-[#d4ff00] uppercase">
            BRAND MANIFESTO // 001
          </span>
        </div>

        {/* Asymmetrical Layout: Giant Headline Left, Narrative Pillars Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Asymmetrical Typography (6 cols) */}
          <div className="lg:col-span-6">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black font-editorial tracking-tight text-white leading-[0.92] uppercase">
              NOT MADE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30">
                TO BLEND
              </span><br />
              <span className="text-[#d4ff00]">IN.</span>
            </h2>

            <div className="mt-8 p-6 rounded-xl bg-white/[0.02] border border-white/5 max-w-lg">
              <span className="text-[11px] font-mono-tech text-[#d4ff00] uppercase tracking-wider block mb-2">
                MISSION DIRECTIVE
              </span>
              <p className="text-sm font-mono-tech text-white/60 leading-relaxed">
                "We do not build garments for passive observation. Every stitch is a line of physical source code designed for those who carve their own vector through dense urban grids."
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Story & Architectural Visual (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <p className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed">
              Streetwear was born from subterranean energy — skate bowls, warehouse sound systems, and midnight streets. Somewhere along the trajectory, it was consumed by corporate logos and algorithmic homogenization.
            </p>

            <p className="text-base sm:text-lg text-white/65 font-light leading-relaxed">
              <strong className="text-white font-semibold">NOIR//FORM</strong> is our deliberate refusal to participate in that decay. We replace surface vanity with structural integrity: ballistic nylon blends, articulated joints that respect human kinetics, and deep obsidian finishes that absorb rather than reflect the glare of surveillance.
            </p>

            {/* Three Brand Axioms */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="p-4 rounded-lg bg-[#0e0e13] border border-white/5">
                <EyeOff size={16} className="text-[#d4ff00] mb-2" />
                <h3 className="text-xs font-mono-tech uppercase font-bold text-white mb-1">
                  TACTICAL STEALTH
                </h3>
                <p className="text-[11px] text-white/50 leading-relaxed">
                  Anti-reflective coatings engineered for total presence without loud branding.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#0e0e13] border border-white/5">
                <ShieldAlert size={16} className="text-[#d4ff00] mb-2" />
                <h3 className="text-xs font-mono-tech uppercase font-bold text-white mb-1">
                  ZERO COMPROMISE
                </h3>
                <p className="text-[11px] text-white/50 leading-relaxed">
                  Weatherproof membranes and Cordura fibers constructed to survive the city.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#0e0e13] border border-white/5">
                <ArrowUpRight size={16} className="text-[#d4ff00] mb-2" />
                <h3 className="text-xs font-mono-tech uppercase font-bold text-white mb-1">
                  DIGITAL ORIGIN
                </h3>
                <p className="text-[11px] text-white/50 leading-relaxed">
                  Prototyped in 3D spatial CAD before a single thread is woven in reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

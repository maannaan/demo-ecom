import React from 'react';
import { ArrowUpRight, Flame, Disc, Radio } from 'lucide-react';

interface CampaignSectionProps {
  onExploreDrop: () => void;
}

export const CampaignSection: React.FC<CampaignSectionProps> = ({ onExploreDrop }) => {
  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#08080a] border-t border-white/5 overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 editorial-grain opacity-30 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#d4ff00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Campaign Banner Card with High-End Magazine Layout */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#14141c] via-[#0c0c11] to-[#07070a] border border-white/15 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl">
          {/* Subtle Background Geometric Overlay */}
          <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none" />
          <div className="absolute -right-10 -bottom-10 w-[300px] h-[300px] border border-[#d4ff00]/10 rounded-full pointer-events-none" />

          {/* Top Campaign Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#d4ff00] animate-ping" />
              <span className="text-xs font-mono-tech tracking-[0.25em] text-[#d4ff00] uppercase font-bold">
                CAMPAIGN // 2026.01
              </span>
            </div>
            <div className="flex items-center gap-6 text-xs font-mono-tech text-white/50">
              <span className="flex items-center gap-1.5">
                <Radio size={14} className="text-[#d4ff00]" /> FREQUENCY: 142.80 MHZ
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:flex items-center gap-1.5">
                <Disc size={14} /> EDITION: 300 UNITS PER PIECE
              </span>
            </div>
          </div>

          {/* Main Campaign Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-editorial tracking-tight text-white leading-[0.95] uppercase mb-6">
                SHADOWS DON'T<br />
                DISAPPEAR.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4ff00] via-white to-white/70">
                  THEY EVOLVE.
                </span>
              </h2>

              <p className="text-base sm:text-xl text-white/70 font-light max-w-xl leading-relaxed mb-8">
                Drop 001 is an homage to midnight concrete, neon reflections on wet tarmac, and the quiet power of an unbranded silhouette. Designed in silence. Built for the roar of the metropolis.
              </p>

              <button
                onClick={onExploreDrop}
                className="px-8 py-4 bg-[#d4ff00] text-black font-mono-tech text-xs tracking-widest uppercase font-bold rounded-lg hover:bg-white transition-all duration-300 flex items-center gap-2 group shadow-[0_0_25px_rgba(212,255,0,0.3)]"
              >
                <span>SECURE DROP 001 PIECES</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Campaign Visual Artifact (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-black/60 border border-white/10 p-6 flex flex-col justify-between backdrop-blur-xl shadow-inner">
                <div className="flex justify-between items-center text-[10px] font-mono-tech text-white/40">
                  <span>SPECIMEN NF-01</span>
                  <span className="text-[#d4ff00]">VERIFIED</span>
                </div>

                <div className="text-center my-auto">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#d4ff00] mb-3">
                    <Flame size={32} />
                  </div>
                  <span className="block font-editorial text-2xl font-bold text-white tracking-wider">
                    NOIR//FORM
                  </span>
                  <span className="text-[10px] font-mono-tech text-white/50 tracking-widest uppercase mt-1 block">
                    EDITORIAL CAMPAIGN
                  </span>
                </div>

                <div className="flex justify-between items-center text-[9px] font-mono-tech text-white/30 border-t border-white/10 pt-2">
                  <span>LAT 40.7128° N</span>
                  <span>LON 74.0060° W</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { CRAFTSMANSHIP_PILLARS } from '../data/craftsmanship';
import type { CraftsmanshipPillar } from '../data/craftsmanship';
import { Layers, Check } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<CraftsmanshipPillar>(CRAFTSMANSHIP_PILLARS[0]);

  return (
    <section id="craftsmanship" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#09090c] border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#d4ff00]" />
              <span className="text-xs font-mono-tech tracking-widest text-[#d4ff00] uppercase">
                RESEARCH & DEVELOPMENT // STANDARDS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-editorial tracking-tight text-white uppercase">
              CRAFTSMANSHIP.
            </h2>
          </div>
          <p className="text-sm text-white/50 max-w-md font-mono-tech leading-relaxed">
            Four foundational design principles governing Drop 001. No superficial ornament. Only deliberate ergonomic and structural necessity.
          </p>
        </div>

        {/* 4 Interactive Pillars Tabs / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {CRAFTSMANSHIP_PILLARS.map(pillar => {
            const isSelected = selectedPillar.id === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar)}
                className={`text-left p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#121218] border-[#d4ff00] shadow-[0_0_20px_rgba(212,255,0,0.15)] -translate-y-1'
                    : 'bg-[#0d0d12] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono-tech font-bold text-[#d4ff00]">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] font-mono-tech tracking-wider uppercase text-white/40">
                      {pillar.subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-editorial text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed line-clamp-3">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono-tech text-white/40 uppercase">
                    INSPECT SPEC
                  </span>
                  <div
                    className="w-4 h-4 rounded-full border border-white/20"
                    style={{ backgroundColor: pillar.swatchColor }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Spotlight Box for the Selected Pillar */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0f0f14] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Swatch & Micro Graphic Preview (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-[#1a1a24] to-[#0c0c10] border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 grid-mesh opacity-30" />
              <div className="relative z-10 flex justify-between items-center text-xs font-mono-tech text-white/50">
                <span>TACTILE SPECIMEN // {selectedPillar.number}</span>
                <span className="text-[#d4ff00] uppercase font-semibold">AUTHENTIC TEXTURE</span>
              </div>

              {/* Visual Swatch Core */}
              <div className="relative z-10 my-4 flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-xl border border-white/20 shadow-2xl flex items-center justify-center"
                  style={{ backgroundColor: selectedPillar.swatchColor }}
                >
                  <Layers size={22} className="text-[#d4ff00]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-mono-tech">
                    {selectedPillar.swatchName}
                  </h4>
                  <p className="text-xs text-white/50 font-mono-tech mt-0.5">
                    {selectedPillar.tactileNote}
                  </p>
                </div>
              </div>

              <div className="relative z-10 text-[10px] font-mono-tech text-white/40 flex justify-between border-t border-white/10 pt-2">
                <span>LAB REF: NF-SPEC-{selectedPillar.number}</span>
                <span>STATUS: CERTIFIED</span>
              </div>
            </div>
          </div>

          {/* Detailed Narrative & Checklist (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00]">
                {selectedPillar.subtitle} // ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-editorial text-white mt-1">
                {selectedPillar.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
              {selectedPillar.description}
            </p>

            {/* Technical Benchmarks Checklist */}
            <div className="space-y-2 pt-2">
              <span className="text-xs uppercase font-mono-tech tracking-wider text-white/50 block mb-2">
                IMPLEMENTATION STANDARDS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedPillar.specs.map(spec => (
                  <div key={spec} className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#d4ff00]/10 text-[#d4ff00] flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs font-mono-tech text-white/90">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

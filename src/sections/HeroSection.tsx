import React, { useState } from 'react';
import { HeroScene } from '../components/3d/HeroScene';
import { AVAILABLE_3D_MODELS } from '../data/modelsRegistry';
import { ArrowDown, ArrowUpRight, Sparkles, Shield, Compass, RefreshCw } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onDiscoverFormClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onDiscoverFormClick
}) => {
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const activeModel = AVAILABLE_3D_MODELS[activeModelIndex];

  const cycleModel = () => {
    setActiveModelIndex(prev => (prev + 1) % AVAILABLE_3D_MODELS.length);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#08080a]">
      {/* Background Architectural Mesh & Subtle Radial Glow */}
      <div className="absolute inset-0 grid-mesh opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4ff00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Top Metadata Ticker */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-white/5 pb-4 text-xs font-mono-tech text-white/50">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#d4ff00] animate-ping" />
          <span className="text-white tracking-widest font-semibold uppercase">DROP 001 / AUTUMN–WINTER</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-white/60">
            <Compass size={13} className="text-[#d4ff00]" /> 40°42'46"N 74°00'22"W
          </span>
          <span className="text-white/40">|</span>
          <span className="flex items-center gap-1.5 text-white/60">
            <Shield size={13} className="text-[#d4ff00]" /> KINETIC ARCHITECTURE
          </span>
        </div>
        <div className="text-[11px] uppercase tracking-widest text-[#d4ff00] bg-[#d4ff00]/10 px-2.5 py-0.5 rounded border border-[#d4ff00]/20">
          LIMITED SHOWROOM RUN
        </div>
      </div>

      {/* Main Hero Split: Left Editorial Typography, Right 3D Centerpiece */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8">
        {/* Left Column: Headlines & Actions (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono-tech mb-6 backdrop-blur-md">
            <Sparkles size={12} className="text-[#d4ff00]" />
            <span className="tracking-wider uppercase">NOIR//FORM DIGITAL FASHION</span>
          </div>

          {/* Oversized Editorial Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-editorial tracking-tight text-white leading-[0.92] uppercase mb-6">
            FORM.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">
              WITHOUT
            </span><br />
            <span className="text-[#d4ff00] italic">LIMITS.</span>
          </h1>

          {/* Supporting Statement */}
          <p className="text-lg sm:text-xl text-white/70 font-light max-w-xl mb-8 leading-relaxed">
            Streetwear engineered for the in-between. Architectural silhouettes, technical composites, and underground culture sculpted into wearable reality.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-4 bg-[#d4ff00] text-black font-mono-tech text-xs tracking-widest uppercase font-bold rounded hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onDiscoverFormClick}
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-mono-tech text-xs tracking-widest uppercase font-semibold rounded border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>DISCOVER THE FORM</span>
            </button>
          </div>

          {/* Quick Micro-data Bar */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-10 pt-8 border-t border-white/10 w-full max-w-lg">
            <div>
              <span className="block text-2xl font-bold font-editorial text-white">04</span>
              <span className="text-[10px] uppercase font-mono-tech tracking-wider text-white/40">FLAGSHIP SILHOUETTES</span>
            </div>
            <div>
              <span className="block text-2xl font-bold font-editorial text-[#d4ff00]">3L</span>
              <span className="text-[10px] uppercase font-mono-tech tracking-wider text-white/40">BALLISTIC MEMBRANE</span>
            </div>
            <div>
              <span className="block text-2xl font-bold font-editorial text-white">4</span>
              <span className="text-[10px] uppercase font-mono-tech tracking-wider text-white/40">3D MODELS LOADED</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Centerpiece (5 cols) */}
        <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[460px] lg:h-[580px] flex items-center justify-center">
          {/* Interactive 3D Canvas */}
          <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
            <HeroScene
              colorway="Obsidian"
              selectedModel={activeModel}
            />
          </div>

          {/* Interactive Floating Badge with Quick Model Cycle Button */}
          <div className="absolute bottom-4 left-4 sm:left-6 z-20">
            <button
              onClick={cycleModel}
              className="glass-panel px-3.5 py-2 rounded-xl border border-white/15 hover:border-[#d4ff00] flex items-center gap-3 transition-all duration-200 text-left cursor-pointer group shadow-xl"
              title="Click to cycle through 3D models"
            >
              <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
              <div>
                <span className="block text-[10px] font-mono-tech tracking-widest text-[#d4ff00] uppercase font-semibold">
                  3D SCULPTURE ({activeModelIndex + 1}/{AVAILABLE_3D_MODELS.length})
                </span>
                <span className="text-xs font-mono-tech text-white/90 group-hover:text-white flex items-center gap-1.5">
                  {activeModel.name}
                  <RefreshCw size={11} className="text-[#d4ff00] group-hover:rotate-180 transition-transform duration-500" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-white/5">
        <button
          onClick={onExploreClick}
          className="flex items-center gap-2 text-xs font-mono-tech tracking-widest text-white/40 hover:text-[#d4ff00] transition group focus:outline-none"
        >
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform text-[#d4ff00]" />
          <span>SCROLL TO EXPLORE DROP 001</span>
        </button>

        <span className="text-[11px] font-mono-tech text-white/30 tracking-widest">
          PARALLAX SENSOR ACTIVE
        </span>
      </div>
    </section>
  );
};

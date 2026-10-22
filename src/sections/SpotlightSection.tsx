import React, { useState } from 'react';
import { ProductViewer } from '../components/3d/ProductViewer';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Check, Layers, Cpu, Compass, Sparkles } from 'lucide-react';

export const SpotlightSection: React.FC = () => {
  const voidRunner = PRODUCTS.find(p => p.id === 'void-runner') || PRODUCTS[0];
  const { addToCart } = useCart();

  const [activeColorway, setActiveColorway] = useState(voidRunner.availableColors[0]);
  const [selectedSize, setSelectedSize] = useState(voidRunner.sizes[1] || 'UK 8');
  const [activeTab, setActiveTab] = useState<'specs' | 'features'>('specs');

  const handleAddToCart = () => {
    addToCart(voidRunner, activeColorway, selectedSize, 1);
  };

  return (
    <section id="spotlight" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#08080b] border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4ff00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
            <span className="text-xs font-mono-tech tracking-widest text-[#d4ff00] uppercase">
              INTERACTIVE 3D CAD SHOWROOM
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-editorial tracking-tight text-white uppercase">
            VOID RUNNER // SPOTLIGHT
          </h2>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mt-3 leading-relaxed">
            Manipulate the spatial model in real time. Inspect the articulated sole architecture, toggle topology, and witness real-time material calibration across our three custom colorways.
          </p>
        </div>

        {/* Showcase Grid: Left 3D Interactive Canvas, Right Product Configuration Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* 3D Viewer Container (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[580px] rounded-2xl bg-gradient-to-b from-[#101015] to-[#0a0a0d] border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
              <ProductViewer activeColorway={activeColorway.name} />
            </div>

            {/* Micro Coordinates Bar beneath viewer */}
            <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] font-mono-tech text-white/40 px-2">
              <span className="flex items-center gap-1.5">
                <Compass size={12} className="text-[#d4ff00]" />
                ORBIT: 360° SPATIAL GIMBAL
              </span>
              <span>RENDER: WEBGL 2.0 PBR PIPELINE</span>
              <span className="text-[#d4ff00]">POLYGONS: DYNAMIC LOD</span>
            </div>
          </div>

          {/* Configuration Panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#0e0e13] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div>
              {/* Product Title and Price */}
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs uppercase font-mono-tech tracking-widest text-[#d4ff00]">
                  FOOTWEAR // DROP 001
                </span>
                <span className="text-2xl font-mono-tech font-bold text-white">
                  {voidRunner.formattedPrice}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold font-editorial text-white mb-3">
                {voidRunner.name}
              </h3>

              <p className="text-sm text-white/70 leading-relaxed mb-6">
                {voidRunner.description}
              </p>

              {/* 3 Interactive Colorways */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs uppercase font-mono-tech tracking-wider text-white/60">
                    COLORWAY MATRIX:
                  </span>
                  <span className="text-xs font-mono-tech text-[#d4ff00] font-semibold">
                    {activeColorway.label.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {voidRunner.availableColors.map(color => {
                    const isSelected = activeColorway.name === color.name;
                    return (
                      <button
                        key={color.name}
                        onClick={() => setActiveColorway(color)}
                        className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                          isSelected
                            ? 'bg-white/10 border-[#d4ff00] shadow-[0_0_15px_rgba(212,255,0,0.2)]'
                            : 'bg-black/40 border-white/10 hover:border-white/30'
                        }`}
                        aria-label={`Switch colorway to ${color.name}`}
                      >
                        <div
                          className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center"
                          style={{ backgroundColor: color.hex }}
                        >
                          {isSelected && (
                            <Check size={12} className={color.name === 'Bone' ? 'text-black' : 'text-[#d4ff00]'} />
                          )}
                        </div>
                        <span className="text-xs font-mono-tech text-white uppercase tracking-wider">
                          {color.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Colorway description */}
                <p className="text-[11px] font-mono-tech text-white/50 mt-3 italic flex items-center gap-1.5">
                  <Sparkles size={11} className="text-[#d4ff00]" />
                  {activeColorway.tagline}
                </p>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-xs uppercase font-mono-tech tracking-wider text-white/60">
                    SELECT SIZE (UK/IN):
                  </span>
                  <span className="text-[11px] font-mono-tech text-white/40">
                    TRUE TO SIZE
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {voidRunner.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 text-xs font-mono-tech uppercase font-medium rounded border transition ${
                        selectedSize === size
                          ? 'bg-[#d4ff00] text-black border-[#d4ff00] font-bold shadow-md'
                          : 'bg-black/30 text-white/80 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specification / Feature Switcher */}
              <div className="mb-6">
                <div className="flex gap-4 border-b border-white/10 mb-3 pb-2 text-xs font-mono-tech">
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`transition pb-1 ${
                      activeTab === 'specs'
                        ? 'text-[#d4ff00] border-b-2 border-[#d4ff00] font-semibold'
                        : 'text-white/50 hover:text-white'
                    }`}
                  >
                    BENCHMARKS
                  </button>
                  <button
                    onClick={() => setActiveTab('features')}
                    className={`transition pb-1 ${
                      activeTab === 'features'
                        ? 'text-[#d4ff00] border-b-2 border-[#d4ff00] font-semibold'
                        : 'text-white/50 hover:text-white'
                    }`}
                  >
                    CONSTRUCTION
                  </button>
                </div>

                {activeTab === 'specs' ? (
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
                    {voidRunner.specs.map(spec => (
                      <div key={spec.label} className="p-2 rounded bg-black/40 border border-white/5">
                        <span className="text-white/40 block text-[10px] uppercase">{spec.label}</span>
                        <span className="text-white font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-1.5 text-xs text-white/70 font-mono-tech">
                    {voidRunner.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#d4ff00] mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Direct Add to Cart Action */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={handleAddToCart}
                className="w-full py-4 text-xs uppercase tracking-widest font-mono-tech font-bold bg-[#d4ff00] text-black hover:bg-white transition duration-200 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,255,0,0.3)]"
              >
                <ShoppingBag size={16} />
                <span>ADD TO BAG // {voidRunner.formattedPrice}</span>
              </button>
              <div className="flex items-center justify-between text-[10px] font-mono-tech text-white/40 mt-3">
                <span className="flex items-center gap-1">
                  <Cpu size={11} className="text-[#d4ff00]" />
                  INSTANT DISPATCH FROM NOIR HUB
                </span>
                <span className="flex items-center gap-1">
                  <Layers size={11} />
                  GENUINE DROP 001 PIECE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

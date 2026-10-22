import React, { useState } from 'react';
import type { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCardVisual } from '../components/ui/ProductCardVisual';
import { Eye, ShoppingBag, ArrowUpRight, Sparkles } from 'lucide-react';

interface CollectionSectionProps {
  onSelectProduct: (product: Product) => void;
  onJumpToSpotlight: () => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({
  onSelectProduct,
  onJumpToSpotlight
}) => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Footwear', 'Outerwear', 'Apparel', 'Bottoms'];

  const filteredProducts = activeCategory === 'ALL'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="collection" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0d] border-t border-white/5">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 grid-mesh opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#d4ff00]" />
              <span className="text-xs font-mono-tech tracking-widest text-[#d4ff00] uppercase">
                CATALOGUE // DROP 001
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-editorial tracking-tight text-white uppercase">
              THE FIRST DROP.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-mono-tech uppercase tracking-wider rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#d4ff00] text-black font-semibold shadow-[0_0_15px_rgba(212,255,0,0.3)]'
                    : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Product Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map(product => {
            const defaultColorway = product.availableColors[0];

            return (
              <div
                key={product.id}
                className="group relative flex flex-col bg-[#111116] border border-white/10 hover:border-white/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Visual Area */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="relative aspect-square w-full bg-[#0d0d12] overflow-hidden cursor-pointer flex items-center justify-center"
                >
                  <ProductCardVisual
                    productId={product.id}
                    colorHex={defaultColorway.hex}
                    accentHex={defaultColorway.accentHex}
                  />

                  {/* Top Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 text-[10px] font-mono-tech uppercase tracking-widest bg-black/70 text-[#d4ff00] border border-[#d4ff00]/40 rounded-full backdrop-blur-md flex items-center gap-1.5">
                        <Sparkles size={10} />
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* 3D Model Quick Anchor */}
                  {product.has3D && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onJumpToSpotlight();
                      }}
                      className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 hover:bg-[#d4ff00] text-white hover:text-black border border-white/10 transition backdrop-blur-md"
                      title="Inspect in 3D showroom"
                      aria-label="Launch 3D interactive viewer"
                    >
                      <Eye size={14} />
                    </button>
                  )}

                  {/* Hover Quick View Overlay Banner */}
                  <div className="absolute inset-x-0 bottom-0 py-2.5 bg-black/70 backdrop-blur-md text-center text-xs font-mono-tech text-white/80 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    CLICK TO INSPECT SILHOUETTE
                  </div>
                </div>

                {/* Product Metadata & Action Bar */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono-tech text-white/50 mb-1.5">
                      <span>{product.category}</span>
                      <span className="text-white/40">{product.color}</span>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="text-lg font-bold font-display text-white group-hover:text-[#d4ff00] transition cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-white/60 mt-1 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono-tech tracking-wider text-white/40 block">PRICE</span>
                      <span className="text-base font-mono-tech font-bold text-white">
                        {product.formattedPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="p-2.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 transition"
                        title="View specifications"
                        aria-label={`View ${product.name} specs`}
                      >
                        <ArrowUpRight size={15} />
                      </button>

                      <button
                        onClick={() => addToCart(product, defaultColorway, product.sizes[0], 1)}
                        className="px-3.5 py-2.5 rounded-lg bg-[#d4ff00] hover:bg-white text-black font-mono-tech text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-[0_0_12px_rgba(212,255,0,0.25)]"
                        aria-label={`Add ${product.name} to bag`}
                      >
                        <ShoppingBag size={13} />
                        <span>BAG</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

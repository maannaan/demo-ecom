import React, { useState } from 'react';
import type { Product, ProductColorway } from '../../types';
import { useCart } from '../../context/CartContext';
import { X, Check, ShoppingBag, Eye, ArrowUpRight, Plus, Minus } from 'lucide-react';
import { ProductCardVisual } from './ProductCardVisual';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onJumpTo3D?: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onJumpTo3D
}) => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<ProductColorway>(
    product?.availableColors[0] || { name: 'Standard', hex: '#000', accentHex: '#d4ff00', label: 'Default' }
  );
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[0] || 'M');
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-lg transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#0c0c10] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto flex flex-col md:flex-row"
        role="dialog"
        aria-label={product.name}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white/70 hover:text-white border border-white/10 transition"
          aria-label="Close product view"
        >
          <X size={18} />
        </button>

        {/* Left Side: Visual / 3D Callout */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between bg-gradient-to-b from-[#14141a] to-[#0c0c10] border-b md:border-b-0 md:border-r border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-mono-tech tracking-widest text-[#d4ff00]">
              {product.category}
            </span>
            {product.badge && (
              <span className="px-2 py-0.5 text-[10px] font-mono-tech tracking-widest uppercase bg-[#d4ff00]/10 text-[#d4ff00] border border-[#d4ff00]/30 rounded">
                {product.badge}
              </span>
            )}
          </div>

          <div className="my-8">
            <ProductCardVisual
              productId={product.id}
              colorHex={selectedColor.hex}
              accentHex={selectedColor.accentHex}
              className="rounded-xl border border-white/5 shadow-inner"
            />
          </div>

          {product.has3D && onJumpTo3D && (
            <button
              onClick={() => {
                onClose();
                onJumpTo3D();
              }}
              className="w-full py-3 px-4 bg-white/5 hover:bg-[#d4ff00] text-white hover:text-black border border-white/10 rounded-lg text-xs font-mono-tech tracking-wider uppercase transition flex items-center justify-center gap-2 group"
            >
              <Eye size={14} />
              <span>LAUNCH 3D INTERACTIVE SHOWROOM</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          )}
        </div>

        {/* Right Side: Product Configuration & Specs */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-white">
                {product.name}
              </h2>
              <span className="text-xl font-mono-tech font-bold text-[#d4ff00]">
                {product.formattedPrice}
              </span>
            </div>

            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Colorways */}
            <div className="mb-6">
              <label className="block text-xs uppercase font-mono-tech tracking-wider text-white/70 mb-2">
                COLORWAY: <span className="text-white font-semibold">{selectedColor.label}</span>
              </label>
              <div className="flex gap-3">
                {product.availableColors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`relative w-10 h-10 rounded-full border-2 transition-transform ${
                      selectedColor.name === color.name
                        ? 'border-[#d4ff00] scale-110'
                        : 'border-white/20 hover:border-white/50'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.label}
                    aria-label={`Select colorway ${color.label}`}
                  >
                    {selectedColor.name === color.name && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Check size={14} className={color.name === 'Bone' ? 'text-black' : 'text-white'} />
                      </span>
                    )}
                  </button>
                ))}
              </div>
              {selectedColor.tagline && (
                <p className="text-[11px] font-mono-tech text-white/40 mt-2 italic">
                  {selectedColor.tagline}
                </p>
              )}
            </div>

            {/* Sizing */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase font-mono-tech tracking-wider text-white/70">
                  SELECT SIZE
                </label>
                <span className="text-[10px] font-mono-tech text-[#d4ff00] cursor-pointer hover:underline">
                  SIZE MATRIX
                </span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-xs font-mono-tech uppercase font-medium rounded border transition ${
                      selectedSize === size
                        ? 'bg-[#d4ff00] text-black border-[#d4ff00]'
                        : 'bg-black/40 text-white/80 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mb-6 border-t border-white/10 pt-4">
              <h4 className="text-xs uppercase font-mono-tech tracking-wider text-white/50 mb-3">
                TECHNICAL BENCHMARKS
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
                {product.specs.map(spec => (
                  <div key={spec.label} className="p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-white/40 block text-[10px]">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="border-t border-white/10 pt-4 flex items-center gap-3">
            <div className="flex items-center border border-white/10 rounded-lg bg-black/40 px-2 py-3">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="p-1 text-white/60 hover:text-white transition"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="px-3 text-xs font-mono-tech text-white font-bold">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(q => Math.min(10, q + 1))}
                className="p-1 text-white/60 hover:text-white transition"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 py-4 px-6 text-xs uppercase tracking-widest font-mono-tech font-bold bg-[#d4ff00] text-black hover:bg-white transition duration-200 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,255,0,0.2)]"
            >
              <ShoppingBag size={16} />
              <span>ADD TO BAG // ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

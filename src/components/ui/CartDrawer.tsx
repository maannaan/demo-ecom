import React, { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { ProductCardVisual } from './ProductCardVisual';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    totalItems,
    subtotal,
    formattedSubtotal,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  // Free shipping threshold: ₹10,000
  const freeShippingThreshold = 10000;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountToFreeShipping = freeShippingThreshold - subtotal;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside
        className="relative z-10 w-full max-w-md h-full flex flex-col bg-[#0b0b0e] border-l border-white/10 shadow-2xl overflow-hidden"
        role="dialog"
        aria-label="Shopping Bag"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4ff00] animate-pulse" />
            <h2 className="text-xl font-bold font-editorial tracking-tight text-white">
              BAG ({totalItems})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition"
            aria-label="Close bag"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="px-6 py-3 bg-[#111116] border-b border-white/5">
          <div className="flex justify-between text-xs font-mono-tech text-white/70 mb-1.5">
            <span>
              {subtotal >= freeShippingThreshold
                ? 'COMPLIMENTARY WORLDWIDE FREIGHT UNLOCKED'
                : `ADD ₹${amountToFreeShipping.toLocaleString('en-IN')} FOR FREE PRIORITY FREIGHT`}
            </span>
            <span className="text-[#d4ff00]">{progressPercent}%</span>
          </div>
          <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#d4ff00] transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-white/5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 mb-4">
                <ShoppingBag size={24} />
              </div>
              <p className="text-lg font-bold font-editorial text-white mb-1">YOUR BAG IS EMPTY</p>
              <p className="text-sm text-white/50 max-w-xs mb-6">
                Silhouettes await your selection in Drop 001. Explore our technical pieces below.
              </p>
              <button
                onClick={() => {
                  closeCart();
                  const el = document.getElementById('collection');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 text-xs uppercase tracking-widest font-mono-tech bg-[#d4ff00] text-black font-semibold rounded hover:bg-white transition flex items-center gap-2"
              >
                EXPLORE DROP 001 <ArrowRight size={14} />
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="pt-4 first:pt-0 flex gap-4">
                {/* Visual Thumbnail */}
                <div className="w-20 h-20 rounded-lg overflow-hidden border border-white/10 bg-[#121217] shrink-0 flex items-center justify-center">
                  <ProductCardVisual
                    productId={item.productId}
                    colorHex={item.colorHex}
                    accentHex="#d4ff00"
                    className="p-1 scale-90"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-sm font-bold font-display text-white truncate">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-white/40 hover:text-red-400 transition p-1"
                      title="Remove item"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  <p className="text-xs font-mono-tech text-white/50 mt-0.5">
                    {item.color} · SIZE: {item.size}
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-white/10 rounded bg-black/40">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 text-white/60 hover:text-white transition"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-2 text-xs font-mono-tech text-white font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 text-white/60 hover:text-white transition"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Line Total */}
                    <span className="text-sm font-mono-tech text-[#d4ff00] font-semibold">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#0e0e13]">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-xs font-mono-tech text-white/50">
                <span>SUBTOTAL</span>
                <span className="text-white font-semibold">{formattedSubtotal}</span>
              </div>
              <div className="flex justify-between text-xs font-mono-tech text-white/50">
                <span>ESTIMATED TAX & DUTIES</span>
                <span className="text-white">CALCULATED AT DISPATCH</span>
              </div>
              <div className="flex justify-between text-xs font-mono-tech text-white/50">
                <span>SHIPPING</span>
                <span className="text-[#d4ff00]">
                  {subtotal >= freeShippingThreshold ? 'FREE' : '₹499'}
                </span>
              </div>
              <div className="border-t border-white/10 pt-2 flex justify-between text-base font-bold font-editorial text-white">
                <span>TOTAL</span>
                <span className="text-[#d4ff00]">
                  ₹{(subtotal + (subtotal >= freeShippingThreshold ? 0 : 499)).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                alert(
                  'NOIR//FORM DEMO CHECKOUT\n\nThis is a demonstration portfolio storefront. No payment gateway is attached and no charges will occur.\n\nThank you for exploring Drop 001!'
                );
              }}
              className="w-full py-4 text-xs uppercase tracking-widest font-mono-tech font-bold bg-[#d4ff00] text-black hover:bg-white transition duration-200 rounded flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,255,0,0.25)]"
            >
              PROCEED TO SECURE CHECKOUT <ArrowRight size={14} />
            </button>

            <div className="flex items-center justify-center gap-2 mt-3 text-[10px] font-mono-tech text-white/40">
              <ShieldCheck size={12} className="text-[#d4ff00]" />
              <span>SIMULATED DEMO ENVIRONMENT · NO CHARGES COLLECTED</span>
            </div>

            <button
              onClick={clearCart}
              className="w-full text-center text-[10px] uppercase font-mono-tech tracking-wider text-white/30 hover:text-red-400 mt-2 transition"
            >
              CLEAR BAG
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

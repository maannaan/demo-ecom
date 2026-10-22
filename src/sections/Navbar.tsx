import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { totalItems, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'COLLECTION', href: '#collection' },
    { name: '3D SHOWROOM', href: '#spotlight' },
    { name: 'MANIFESTO', href: '#manifesto' },
    { name: 'CRAFTSMANSHIP', href: '#craftsmanship' },
    { name: 'JOURNAL', href: '#journal' }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080a]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-lg'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#d4ff00]"
          aria-label="NOIR//FORM Home"
        >
          {/* Geometric Monogram Icon */}
          <div className="w-8 h-8 rounded-lg bg-[#141419] border border-white/15 flex items-center justify-center p-1.5 transition-transform group-hover:border-[#d4ff00]">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              <path d="M22 28V72L42 38V72" stroke="#f4f4f6" strokeWidth="10" strokeLinecap="square" />
              <line x1="52" y1="28" x2="48" y2="72" stroke="#d4ff00" strokeWidth="8" />
              <path d="M60 28H80M60 48H74M60 28V72" stroke="#f4f4f6" strokeWidth="10" strokeLinecap="square" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-editorial text-lg sm:text-xl font-extrabold tracking-wider text-white">
              NOIR<span className="text-[#d4ff00]">//</span>FORM
            </span>
            <span className="hidden sm:block text-[9px] font-mono-tech tracking-[0.25em] text-white/40 uppercase">
              WEAR THE UNSEEN
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map(link => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-xs font-mono-tech tracking-widest text-white/70 hover:text-[#d4ff00] transition relative py-1 focus:outline-none focus:text-[#d4ff00]"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Quick Shop CTA */}
          <button
            onClick={() => handleNavClick('#collection')}
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-mono-tech uppercase tracking-wider bg-white/5 hover:bg-[#d4ff00] text-white hover:text-black border border-white/10 hover:border-[#d4ff00] rounded-full transition-all duration-200"
          >
            <span>DROP 001</span>
            <ArrowUpRight size={13} />
          </button>

          {/* Cart Bag Button */}
          <button
            onClick={openCart}
            className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-[#d4ff00]"
            aria-label={`Open shopping bag with ${totalItems} items`}
          >
            <ShoppingBag size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#d4ff00] text-black text-[10px] font-mono-tech font-bold flex items-center justify-center shadow-[0_0_10px_rgba(212,255,0,0.5)] animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2.5 rounded-full bg-white/5 text-white/80 hover:text-white border border-white/10 transition"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] z-40 bg-[#08080a]/98 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col justify-between animate-in fade-in duration-200">
          <div className="space-y-6 pt-4">
            <span className="text-[11px] font-mono-tech tracking-widest text-[#d4ff00] uppercase">
              INDEX // NAVIGATION
            </span>
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-2xl font-editorial font-bold text-white hover:text-[#d4ff00] transition py-1"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 space-y-4">
            <button
              onClick={() => handleNavClick('#collection')}
              className="w-full py-4 text-xs uppercase font-mono-tech tracking-widest font-bold bg-[#d4ff00] text-black rounded flex items-center justify-center gap-2"
            >
              EXPLORE FIRST DROP <ArrowUpRight size={14} />
            </button>
            <div className="flex justify-between text-xs font-mono-tech text-white/40">
              <span>NOIR//FORM © 2026</span>
              <span>40°42'N 74°00'W</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

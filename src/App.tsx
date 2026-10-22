import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import type { Product, JournalArticle } from './types';
import { Navbar } from './sections/Navbar';
import { HeroSection } from './sections/HeroSection';
import { CollectionSection } from './sections/CollectionSection';
import { SpotlightSection } from './sections/SpotlightSection';
import { ManifestoSection } from './sections/ManifestoSection';
import { CraftsmanshipSection } from './sections/CraftsmanshipSection';
import { CampaignSection } from './sections/CampaignSection';
import { JournalSection } from './sections/JournalSection';
import { NewsletterSection } from './sections/NewsletterSection';
import { FooterSection } from './sections/FooterSection';
import { CartDrawer } from './components/ui/CartDrawer';
import { ToastContainer } from './components/ui/ToastContainer';
import { ProductModal } from './components/ui/ProductModal';
import { JournalModal } from './components/ui/JournalModal';

export const AppContent: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08080a] text-[#f4f4f6]">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section A: Hero Experience */}
        <HeroSection
          onExploreClick={() => scrollToSection('collection')}
          onDiscoverFormClick={() => scrollToSection('spotlight')}
        />

        {/* Section B: Featured Collection */}
        <CollectionSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onJumpToSpotlight={() => scrollToSection('spotlight')}
        />

        {/* Section C: Interactive 3D Product Spotlight */}
        <SpotlightSection />

        {/* Section D: Brand Manifesto */}
        <ManifestoSection />

        {/* Section E: Materials and Craftsmanship */}
        <CraftsmanshipSection />

        {/* Section F: Campaign Visual */}
        <CampaignSection
          onExploreDrop={() => scrollToSection('collection')}
        />

        {/* Section G: Journal */}
        <JournalSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* Section H: Newsletter */}
        <NewsletterSection />
      </main>

      {/* Section I: Footer */}
      <FooterSection />

      {/* Global Interactive Overlays */}
      <CartDrawer />
      <ToastContainer />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onJumpTo3D={() => scrollToSection('spotlight')}
      />
      <JournalModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

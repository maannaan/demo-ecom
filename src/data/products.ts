import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'void-runner',
    name: 'VOID RUNNER',
    category: 'Footwear',
    price: 8499,
    formattedPrice: '₹8,499',
    color: 'Obsidian',
    badge: '3D SHOWROOM',
    has3D: true,
    description: 'Sculptural street sneaker engineered with a technical chassis, articulated EVA midsole, and magnetic tension cable closure.',
    details: [
      'Segmented sculptural midsole with energy-return nitrogen foam',
      'High-tenacity ballistic ripstop upper with welded TPU overlays',
      'Dual-zone magnetic pull closure system',
      'Reflective 3M heel counter with custom NOIR//FORM serial imprint'
    ],
    specs: [
      { label: 'Weight', value: '380g (Size 42)' },
      { label: 'Chassis', value: 'Multi-layer TPU & Ripstop' },
      { label: 'Sole Tech', value: 'Articulated Nitrogen Cushion' },
      { label: 'Closure', value: 'Magnetic Speed Cable' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    availableColors: [
      {
        name: 'Obsidian',
        label: 'Obsidian Black',
        hex: '#0a0a0c',
        accentHex: '#d4ff00',
        secondaryHex: '#1f1f24',
        tagline: 'Deep stealth monochrome with electric lime pulse.'
      },
      {
        name: 'Bone',
        label: 'Bone Chalk',
        hex: '#d8d5cd',
        accentHex: '#8e8e93',
        secondaryHex: '#e8e5de',
        tagline: 'Architectural mineral finish with muted titanium accents.'
      },
      {
        name: 'Signal',
        label: 'Signal Hazard',
        hex: '#1f2022',
        accentHex: '#ff3b30',
        secondaryHex: '#e65100',
        tagline: 'Industrial asphalt chassis with high-contrast safety orange/red.'
      }
    ]
  },
  {
    id: 'phantom-shell',
    name: 'PHANTOM SHELL',
    category: 'Outerwear',
    price: 12999,
    formattedPrice: '₹12,999',
    color: 'Graphite',
    badge: 'HERO PIECE',
    description: 'Lightweight technical jacket with architectural paneling, fully taped storm seams, and convertible storm collar.',
    details: [
      '3-Layer laminated breathable membrane with 20k waterproof rating',
      'Laser-cut underarm ventilation apertures with AquaGuard zips',
      'Integrated internal sling harness for hands-free carry',
      'Fidlock magnetic quick-release chest flap'
    ],
    specs: [
      { label: 'Fabric', value: '3L Storm-Tech Recycled Nylon' },
      { label: 'Waterproof', value: '20,000mm Hydrostatic Head' },
      { label: 'Zippers', value: 'YKK AquaGuard Matte' },
      { label: 'Hardware', value: 'Fidlock V-Buckle Titanium' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    availableColors: [
      {
        name: 'Graphite',
        label: 'Graphite Dark',
        hex: '#1c1c1f',
        accentHex: '#d4ff00',
        secondaryHex: '#2c2c31',
        tagline: 'Matte graphite with subtle technical sheen.'
      },
      {
        name: 'Onyx',
        label: 'Deep Onyx',
        hex: '#0d0d0f',
        accentHex: '#8e8e93',
        secondaryHex: '#18181c',
        tagline: 'Total light absorption with subdued graphite trims.'
      }
    ]
  },
  {
    id: 'static-heavyweight',
    name: 'STATIC HEAVYWEIGHT',
    category: 'Apparel',
    price: 4499,
    formattedPrice: '₹4,499',
    color: 'Washed Black',
    badge: 'ESSENTIAL',
    description: 'Oversized heavyweight cotton tee crafted from 360 GSM combed cotton with subtle dropped shoulder silhouette and acid-washed finish.',
    details: [
      '360 GSM ultra-dense combed organic cotton',
      'Enzyme acid-wash treatment for unique tactile drape',
      'Reinforced high-gauge ribbed crew collar',
      'Tonal micro-embroidered coordinate typography on rear hem'
    ],
    specs: [
      { label: 'Weight', value: '360 GSM' },
      { label: 'Fit', value: 'Boxy Drop-Shoulder' },
      { label: 'Material', value: '100% Combed Organic Cotton' },
      { label: 'Finish', value: 'Enzyme Washed' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    availableColors: [
      {
        name: 'Washed Black',
        label: 'Washed Black',
        hex: '#1f1f23',
        accentHex: '#d4ff00',
        secondaryHex: '#2a2a30',
        tagline: 'Vintage mineral wash with raw industrial texture.'
      },
      {
        name: 'Muted Concrete',
        label: 'Muted Concrete',
        hex: '#4a4a50',
        accentHex: '#ffffff',
        secondaryHex: '#5b5b63',
        tagline: 'Cool grey architectural tone with soft handfeel.'
      }
    ]
  },
  {
    id: 'afterhours-cargo',
    name: 'AFTERHOURS CARGO',
    category: 'Bottoms',
    price: 7299,
    formattedPrice: '₹7,299',
    color: 'Concrete',
    badge: 'NEW ARRIVAL',
    description: 'Utility-inspired cargo trousers featuring articulated knee darts, modular pleated bellows pockets, and convertible ankle toggles.',
    details: [
      'Double-weave Cordura nylon blend with stretch mechanical recovery',
      'Six-pocket architecture with magnetic flap closures',
      'Ergonomic pre-curved knee construction for dynamic movement',
      'Dual cinch shock cord hem for taper alteration'
    ],
    specs: [
      { label: 'Composition', value: '88% Cordura Nylon, 12% Elastane' },
      { label: 'Coating', value: 'C0 DWR Water-Repellent' },
      { label: 'Hardware', value: 'Duraflex Slotted Bungees' },
      { label: 'Cut', value: 'Articulated Tapered Relaxed' }
    ],
    sizes: ['30', '32', '34', '36'],
    availableColors: [
      {
        name: 'Concrete',
        label: 'Concrete Grey',
        hex: '#303036',
        accentHex: '#d4ff00',
        secondaryHex: '#45454e',
        tagline: 'Urban architectural grey with dirt-resistant treatment.'
      },
      {
        name: 'Blackout',
        label: 'Pitch Black',
        hex: '#0e0e11',
        accentHex: '#8e8e93',
        secondaryHex: '#1b1b22',
        tagline: 'Matte stealth black with abrasion-resistant grid.'
      }
    ]
  }
];

export interface CraftsmanshipPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  swatchName: string;
  swatchColor: string;
  tactileNote: string;
}

export const CRAFTSMANSHIP_PILLARS: CraftsmanshipPillar[] = [
  {
    id: 'engineered-silhouettes',
    number: '01',
    title: 'Engineered Silhouettes',
    subtitle: 'KINETIC ARCHITECTURE',
    description: 'Every seam, dart, and bevel is calculated to contour naturally during movement while holding crisp, sculptural lines when standing still.',
    specs: ['Articulated knee darts', 'Pre-curved drop sleeves', 'Asymmetrical magnetic zip lines'],
    swatchName: '3D Sculptural Chassis',
    swatchColor: '#121215',
    tactileNote: 'Rigid geometry with internal flex zones'
  },
  {
    id: 'considered-materials',
    number: '02',
    title: 'Considered Materials',
    subtitle: 'BALLISTIC COMPOSITES',
    description: 'We weave high-tenacity Cordura yarn with micro-denier ripstop and breathable 3-layer storm membranes rated for 20,000mm hydrostatic resistance.',
    specs: ['360 GSM Combed Organic Cotton', '20k Waterproof 3L Laminate', 'Supercritical Nitrogen Sole Core'],
    swatchName: 'High-Tenacity Cordura & Ripstop',
    swatchColor: '#1a1a20',
    tactileNote: 'High abrasion resistance with soft interior fleece'
  },
  {
    id: 'everyday-utility',
    number: '03',
    title: 'Everyday Utility',
    subtitle: 'MODULAR INTEGRATION',
    description: 'Hidden modular sling straps, silent magnetic Fidlock fasteners, and laser-welded storm pockets eliminate cumbersome bags from your commute.',
    specs: ['Internal jacket harness', 'Quick-release magnetic buckle', 'AquaGuard sealed zippers'],
    swatchName: 'Anodized Titanium & Magnetic Hardware',
    swatchColor: '#2b2b33',
    tactileNote: 'Tactile snap engagement with zero rattling'
  },
  {
    id: 'functional-minimalism',
    number: '04',
    title: 'Functional Minimalism',
    subtitle: 'PURITY OF FORM',
    description: 'Zero redundant ornamentation. Every visual detail has an active structural role in weather defense, weight balance, or tactical ergonomics.',
    specs: ['Subtle laser-etched serial tags', 'Tonal reflective micro-print', 'Welded seam tape'],
    swatchName: 'Matte Light-Absorptive Finish',
    swatchColor: '#0a0a0c',
    tactileNote: 'Anti-glare micro-texture with dirt-repellent C0 DWR'
  }
];

export interface Available3DModel {
  id: string;
  name: string;
  label: string;
  category: string;
  path?: string; // empty for procedural
  isProcedural: boolean;
  description: string;
  authorNote?: string;
  defaultScale?: number;
  rotation?: [number, number, number];
}

export const AVAILABLE_3D_MODELS: Available3DModel[] = [
  {
    id: 'void-runner',
    name: 'VOID RUNNER (CONCEPT)',
    label: 'Procedural Concept',
    category: 'Architectural CAD',
    isProcedural: true,
    description: 'Sculptural technical sneaker chassis with articulated nitrogen cushioning and dynamic colorway shader modulation.',
    authorNote: 'NOIR//FORM In-House Lab CAD',
    defaultScale: 1.15,
    rotation: [0, -0.4, 0]
  },
  {
    id: 'footwear_fantasia',
    name: 'FOOTWEAR FANTASIA',
    label: 'Fantasia 3D',
    category: 'Photorealistic Scan',
    path: '/models/footwear_fantasia/scene.gltf',
    isProcedural: false,
    description: 'High-detail digital footwear sculpture with bespoke leather grain, metallic hardware, and weathered textures.',
    authorNote: 'Imported User Asset',
    defaultScale: 2.7,
    rotation: [0, -0.6, 0]
  },
  {
    id: 'scanned_adidas_sports_shoe',
    name: 'SCANNED SPORTS SHOE',
    label: 'Scanned Athletic',
    category: 'Photogrammetry Scan',
    path: '/models/scanned_adidas_sports_shoe/scene.gltf',
    isProcedural: false,
    description: 'Photogrammetry 3D scan of a technical performance athletic shoe with real-world fabric weave and rubber sole texture.',
    authorNote: 'Imported User Asset',
    defaultScale: 2.8,
    rotation: [0, -0.5, 0]
  },
  {
    id: 'moon_shoes',
    name: 'MOON SHOES',
    label: 'Moon Boots 3D',
    category: 'Sci-Fi Outerwear',
    path: '/models/moon_shoes/scene.gltf',
    isProcedural: false,
    description: 'Sculptural futuristic lunar silhouette with oversized structural soles and high-altitude weatherproofing.',
    authorNote: 'Imported User Asset',
    defaultScale: 2.6,
    rotation: [0, -0.4, 0]
  }
];

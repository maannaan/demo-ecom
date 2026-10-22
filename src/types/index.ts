export type ProductCategory = 'Footwear' | 'Outerwear' | 'Apparel' | 'Bottoms';

export interface ProductColorway {
  name: string;
  hex: string;
  accentHex: string;
  secondaryHex?: string;
  label: string;
  tagline?: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number; // INR
  formattedPrice: string;
  color: string;
  description: string;
  badge?: string;
  details: string[];
  specs: { label: string; value: string }[];
  sizes: string[];
  availableColors: ProductColorway[];
  has3D?: boolean;
  svgVisual?: string;
}

export interface CartItem {
  id: string; // e.g. void-runner-obsidian-42
  productId: string;
  name: string;
  category: ProductCategory;
  price: number;
  color: string;
  colorHex: string;
  size: string;
  quantity: number;
  image?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  paragraphs: string[];
  quote?: string;
  author: string;
  authorRole: string;
  tag: string;
}

export type ActiveSection = 'hero' | 'collection' | 'spotlight' | 'manifesto' | 'craftsmanship' | 'journal' | 'newsletter';

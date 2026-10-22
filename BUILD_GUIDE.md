# NOIR//FORM — Technical Architecture & Workshop Instructor Guide

This document is engineered for workshop instructors and frontend developers explaining the implementation, state architecture, and 3D graphics pipeline of NOIR//FORM.

---

## 1. Project Directory Anatomy

```
Demo-ecom/
├── public/
│   ├── brand-icon.svg             # Geometric brand favicon mark
│   └── models/                    # Target drop folder for custom .glb / .gltf files
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── SneakerModel.tsx   # Procedural PBR 3D sneaker sculpture with colorway shaders
│   │   │   ├── HeroScene.tsx      # Parallax pointer-tracking 3D hero canvas
│   │   │   └── ProductViewer.tsx  # OrbitControls 3D viewer with wireframe & reset
│   │   └── ui/
│   │       ├── CartDrawer.tsx     # Slide-over shopping bag with quantity & freight meters
│   │       ├── ToastContainer.tsx # Live feedback notifications for bag actions
│   │       ├── ProductModal.tsx   # Deep inspection modal for sizing & specifications
│   │       ├── ProductCardVisual.tsx # High-definition vector silhouettes for all pieces
│   │       └── JournalModal.tsx   # Non-dead-end editorial essay reader
│   ├── context/
│   │   └── CartContext.tsx        # Persistent shopping state + localStorage syncing
│   ├── data/
│   │   ├── products.ts            # Central catalog for all 4 flagship garments
│   │   ├── journal.ts             # 3 full editorial essays and quotes
│   │   └── craftsmanship.ts       # 4 R&D design principles and swatch values
│   ├── sections/
│   │   ├── Navbar.tsx             # Sticky navigation with mobile menu drawer
│   │   ├── HeroSection.tsx        # Section A: Cinematic hero & 3D canvas
│   │   ├── CollectionSection.tsx  # Section B: Category-filtered 4-product grid
│   │   ├── SpotlightSection.tsx   # Section C: Interactive 3D showroom
│   │   ├── ManifestoSection.tsx   # Section D: Asymmetrical editorial narrative
│   │   ├── CraftsmanshipSection.tsx # Section E: Technical swatches and benchmarks
│   │   ├── CampaignSection.tsx    # Section F: High-fashion lookbook statement
│   │   ├── JournalSection.tsx     # Section G: 3-column article dispatch
│   │   ├── NewsletterSection.tsx  # Section H: Client-side validated telemetry dispatch
│   │   └── FooterSection.tsx      # Section I: Atelier links, legal notice & back-to-top
│   ├── types/
│   │   └── index.ts               # Strict TypeScript interface contracts
│   ├── App.tsx                    # Root layout orchestrator
│   ├── main.tsx                   # React root entry point
│   └── index.css                  # Design tokens, typography, glassmorphism, keyframes
├── package.json                   # Dependencies (React 19, Three.js, R3F, Drei, Lucide)
├── vite.config.ts                 # Vite bundler with @tailwindcss/vite
└── tsconfig.app.json              # TypeScript configuration
```

---

## 2. 3D Graphics Architecture (Three.js + R3F)

### Procedural Modeling Technique
Rather than relying on fragile external URLs that can break, `SneakerModel.tsx` is built using a composable multi-geometry architecture:
- **Midsole/Outsole**: Segmented box geometry with bevels, heel risers, and cutout nitrogen cushion windows.
- **Upper Body**: Layered aerodynamic meshes mimicking ballistic ripstop and vulcanized TPU overlays.
- **Speed-Cable Lacing**: Array of slender cylinders oriented at dynamic angles with a magnetic Fidlock top buckle.
- **PBR Shading**: Materials utilize `meshStandardMaterial` with controlled `metalness` (0.2–0.9), `roughness` (0.1–0.8), and high-contrast emissive accents that light up in real time.

### Real-Time Colorway Shader Updates
When the user selects **Obsidian**, **Bone**, or **Signal**, the `useMemo` hook in `SneakerModel.tsx` recalculates:
- `chassis`: Upper body color (e.g. `#0c0c0f` vs `#d8d5cd` vs `#1e1f22`).
- `accent` and `glowAccent`: Emissive slash highlight (e.g. `#d4ff00` lime vs `#8e8e93` titanium vs `#ff3b30` hazard red).
- `roughness` & `metalness`: Tailored surface reflectance properties for each colorway.

### Pointer Parallax (HeroScene)
In `HeroScene.tsx`, the `InteractiveRig` component listens to pointer events:
```typescript
const handlePointerMove = (e: MouseEvent) => {
  const x = (e.clientX / window.innerWidth) * 2 - 1;
  const y = -(e.clientY / window.innerHeight) * 2 + 1;
  targetRotation.current = { x: y * 0.25, y: x * 0.45 };
};
```
Inside the `useFrame` render loop, Three.js applies `THREE.MathUtils.lerp` with a factor of `0.05` for silky-smooth dampening without layout thrashing.

---

## 3. State Management Architecture

### Cart Context (`CartContext.tsx`)
- **Key Identifiers**: Items are keyed by composite ID: `${product.id}-${colorway}-${size}`. This ensures purchasing an **Obsidian UK 9** is tracked as a distinct line item from a **Bone UK 10**.
- **Persistence**: Synced to `localStorage` under `noir_form_cart_v1` on every state change with try/catch wrapping to prevent failures in incognito or restricted storage modes.
- **Live Calculations**:
  - `totalItems`: Aggregate count driving the navbar pulse badge.
  - `subtotal`: Sum of `(item.price * item.quantity)` in INR (`₹`).
  - `freeShippingMeter`: Dynamically tracks distance to the ₹10,000 threshold.

---

## 4. How to Customize the Storefront

### Changing Brand Colors & Accents
Open `src/index.css` and modify the CSS variables:
```css
:root {
  --accent-lime: #d4ff00; /* Change to your desired brand accent */
  --bg-main: #08080a;     /* Deep charcoal background */
}
```

### Adding New Products
Add an object to `PRODUCTS` in `src/data/products.ts`:
```typescript
{
  id: 'arc-poncho',
  name: 'ARC PONCHO',
  category: 'Outerwear',
  price: 9999,
  formattedPrice: '₹9,999',
  color: 'Stealth Olive',
  description: 'Waterproof technical cape with magnetic snaps.',
  ...
}
```

### Adjusting 3D Floating & Camera Angles
In `src/components/3d/HeroScene.tsx`, adjust the `Float` parameters:
```tsx
<Float speed={2} rotationIntensity={0.6} floatIntensity={0.7} floatingRange={[-0.1, 0.1]}>
  <SneakerModel scale={0.92} rotation={[0.15, -0.65, 0.1]} />
</Float>
```

---

## 5. Troubleshooting & Debugging

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **Canvas is blank on old GPU** | WebGL hardware acceleration disabled in browser. | The built-in `Hero3DFallback` automatically activates, displaying an architectural vector backup. |
| **TypeScript TS1484 import error** | `verbatimModuleSyntax` is enabled in `tsconfig.app.json`. | Ensure all interface and type imports use `import type { ... } from '...'`. |
| **Cart items not persisting** | Browser blocked third-party cookies or storage. | Fallback state retains items in React memory for the session duration. |
| **Port 5173 busy** | Another process is holding port 5173. | Run `npm run dev -- --port 5174` or kill the lingering process. |

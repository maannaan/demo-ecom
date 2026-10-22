# NOIR//FORM — Wear the Unseen
### Premium 3D Streetwear Digital Fashion Experience

NOIR//FORM is a production-grade 3D e-commerce storefront for an avant-garde digital streetwear brand. Engineered at the intersection of architectural silhouettes, technical textiles, and underground culture, NOIR//FORM transforms digital fashion shopping into a cinematic, tactile showroom experience.

---

## 🌟 Key Features

1. **Full-Viewport 3D Hero Centerpiece**
   - Interactive, physically based 3D model of the **VOID RUNNER** sneaker.
   - Studio lighting with key, fill, and electric-lime rim illumination.
   - Smooth pointer-driven parallax and idle floating dynamics.
   - Automatic graceful fallback for environments lacking WebGL hardware acceleration.

2. **The First Drop (Collection Grid)**
   - 4 signature drop garments with technical specifications:
     - **VOID RUNNER** (Footwear — ₹8,499)
     - **PHANTOM SHELL** (Outerwear — ₹12,999)
     - **STATIC HEAVYWEIGHT** (Apparel — ₹4,499)
     - **AFTERHOURS CARGO** (Bottoms — ₹7,299)
   - Category filtering (All, Footwear, Outerwear, Apparel, Bottoms).
   - Quick Inspect modal and direct "Add to Bag" actions.

3. **Interactive 3D Product Spotlight**
   - Real-time 3D CAD showroom with OrbitControls (drag to rotate, touch support).
   - **Real-Time Material Calibration**: Instant switching across 3 colorways:
     - **Obsidian** (Stealth black with electric lime pulse)
     - **Bone** (Chalk stone with dark titanium)
     - **Signal** (Industrial asphalt with hazard orange/red accents)
   - Wireframe topology mode toggle and camera viewpoint reset.

4. **Persistent Shopping Bag Engine**
   - Slide-over bag drawer with line items, size & colorway indicators.
   - Quantity increment/decrement, item deletion, live subtotal, and complimentary worldwide shipping meter.
   - Safe `localStorage` persistence with corrupt data handling.
   - Honest demo simulated checkout messaging.

5. **Editorial Brand Experience**
   - **Manifesto**: "NOT MADE TO BLEND IN." Asymmetrical high-fashion layout with brand axioms.
   - **Craftsmanship**: R&D exploration of engineered silhouettes, ballistic ripstop, and tactile swatches.
   - **Journal**: 3 complete essays with modal readers and zero dead-end links.
   - **Newsletter**: RFC-compliant client-side email validation with simulated dispatch feedback.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 8 + TypeScript
- **3D Graphics Engine**: Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) with custom NOIR//FORM design tokens
- **Icons**: Lucide React
- **Typography**: Syne (Editorial headings), Space Grotesk (Display), JetBrains Mono (Technical data), Inter (Body)

---

## 📋 Prerequisites

- **Node.js**: `v18.x`, `v20.x`, or `v22.x` (Recommended: `v22.14.0+`)
- **npm**: `v9.x` or `v10.x` (Recommended: `v10.9.2+`)

---

## 🚀 Local Setup & Development

### 1. Clone & Install
```bash
cd Demo-ecom
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Preview
```bash
# Type check and generate optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📦 How to Provide Custom 3D Models (`.glb` / `.gltf`)

NOIR//FORM features a dual-layer 3D system:
1. **Built-in Procedural Model**: The VOID RUNNER sneaker renders automatically out of the box with zero external dependencies.
2. **Custom Model Drop-In**: If you have custom 3D fashion models:
   - Export your model as a binary GLTF (`.glb`).
   - Place your file into `/public/models/void-runner.glb` or `/public/models/sneaker.glb`.
   - Recommended specs: 20k–60k polygons, PBR materials (Roughness, Metallic, Normal maps).

---

## 🐙 GitHub Publishing Workflow

```bash
# 1. Initialize git (if not already done)
git init

# 2. Check changed files
git status

# 3. Add and commit all assets
git add .
git commit -m "feat: complete NOIR//FORM 3D streetwear e-commerce experience"

# 4. Link your GitHub repository (replace with your repo URL)
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/noir-form-ecom.git

# 5. Push to GitHub
git push -u origin main
```

---

## ☁️ Vercel Deployment Guide

Deploying NOIR//FORM to Vercel takes under 2 minutes:

1. **Push your code to GitHub** using the steps above.
2. **Log into [Vercel](https://vercel.com/)** and click **"Add New Project"**.
3. **Import your GitHub repository** (`noir-form-ecom`).
4. **Configure Project Settings**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**.
6. Vercel will build and assign an instant production URL with automatic HTTPS and global edge CDN caching.

---

## ⚖️ License & Credits

Fictional concept created for educational and design demonstration purposes. All brand identities, product specifications, and copy are creative fictional works.

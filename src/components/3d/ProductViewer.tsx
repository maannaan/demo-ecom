import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { SneakerModel } from './SneakerModel';
import { RotateCcw, Play, Pause, Box } from 'lucide-react';

interface ProductViewerProps {
  activeColorway: string;
  className?: string;
}

export const ProductViewer: React.FC<ProductViewerProps> = ({
  activeColorway,
  className = 'w-full h-full'
}) => {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleResetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const toggleAutoRotate = () => {
    setIsAutoRotating(prev => !prev);
  };

  const toggleWireframe = () => {
    setWireframeMode(prev => !prev);
  };

  if (hasError) {
    return (
      <div className="w-full h-full min-h-[450px] flex flex-col items-center justify-center p-8 text-center bg-[#0d0d11] rounded-2xl border border-white/10">
        <p className="text-[#d4ff00] font-mono-tech text-sm mb-2">RENDER SYSTEM NOTICE</p>
        <p className="text-white/70 max-w-sm text-sm">3D interactive pipeline failed to mount canvas. Reload to re-initialize.</p>
        <button
          onClick={() => setHasError(false)}
          className="mt-4 px-4 py-2 text-xs uppercase font-mono-tech tracking-wider bg-white/10 hover:bg-white/20 text-white rounded transition"
        >
          Retry 3D Viewer
        </button>
      </div>
    );
  }

  return (
    <div className={`relative ${className} select-none`}>
      {/* 3D Canvas */}
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.3;
          setIsLoading(false);
        }}
        onError={() => setHasError(true)}
      >
        <PerspectiveCamera makeDefault position={[2.8, 1.2, 4.2]} fov={40} />

        {/* Orbit Controls with controlled bounds */}
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          enableZoom={true}
          minDistance={2.5}
          maxDistance={6.5}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2 + 0.05} // prevent seeing underside upside-down
          autoRotate={isAutoRotating}
          autoRotateSpeed={1.2}
          dampingFactor={0.06}
          enableDamping={true}
        />

        {/* Studio Lighting Arrangement */}
        <ambientLight intensity={0.45} />

        {/* High-Contrast Directional Studio Key Light */}
        <directionalLight
          position={[5, 8, 5]}
          intensity={2.0}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />

        {/* Soft Cool Fill Light */}
        <directionalLight position={[-6, 2, -3]} intensity={0.8} color="#90a0b5" />

        {/* Signature Electric Lime Rim Light */}
        <spotLight
          position={[-3, 4, -4]}
          intensity={3.8}
          color="#d4ff00"
          angle={0.65}
          penumbra={0.9}
        />

        {/* Front Specular Glint */}
        <pointLight position={[0, 2, 4]} intensity={0.6} color="#ffffff" />

        <Suspense fallback={null}>
          <group position={[0, 0.1, 0]}>
            <SneakerModel
              colorwayName={activeColorway}
              wireframe={wireframeMode}
              scale={1.15}
              rotation={[0, -0.4, 0]}
              isFloating={false}
            />
          </group>

          {/* Soft Ground Contact Shadow */}
          <ContactShadows
            position={[0, -0.85, 0]}
            opacity={0.8}
            scale={7}
            blur={2.4}
            far={3}
            color="#000000"
          />
        </Suspense>
      </Canvas>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#08080a]/80 backdrop-blur-sm pointer-events-none">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-[#d4ff00] border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-mono-tech tracking-widest text-[#d4ff00] uppercase">CALIBRATING GEOMETRY</span>
          </div>
        </div>
      )}

      {/* Floating 3D Control Badges */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <span className="px-2.5 py-1 text-[11px] font-mono-tech tracking-wider uppercase bg-black/60 text-white/70 border border-white/10 rounded-full backdrop-blur-md">
          DRAG TO ROTATE
        </span>
        <span className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-mono-tech tracking-wider uppercase bg-black/60 text-[#d4ff00] border border-[#d4ff00]/30 rounded-full backdrop-blur-md">
          {activeColorway.toUpperCase()}
        </span>
      </div>

      {/* Interactive Controls Bar */}
      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
        <button
          onClick={toggleAutoRotate}
          title={isAutoRotating ? 'Pause rotation' : 'Start rotation'}
          className="p-2.5 rounded-full bg-black/70 hover:bg-[#d4ff00] hover:text-black text-white/80 border border-white/10 transition-all backdrop-blur-md shadow-lg"
          aria-label={isAutoRotating ? 'Pause auto-rotation' : 'Play auto-rotation'}
        >
          {isAutoRotating ? <Pause size={14} /> : <Play size={14} />}
        </button>

        <button
          onClick={toggleWireframe}
          title={wireframeMode ? 'Shaded mode' : 'Wireframe mode'}
          className={`p-2.5 rounded-full border transition-all backdrop-blur-md shadow-lg ${
            wireframeMode
              ? 'bg-[#d4ff00] text-black border-[#d4ff00]'
              : 'bg-black/70 hover:bg-[#d4ff00] hover:text-black text-white/80 border-white/10'
          }`}
          aria-label="Toggle wireframe topology"
        >
          <Box size={14} />
        </button>

        <button
          onClick={handleResetCamera}
          title="Reset camera viewpoint"
          className="p-2.5 rounded-full bg-black/70 hover:bg-[#d4ff00] hover:text-black text-white/80 border border-white/10 transition-all backdrop-blur-md shadow-lg"
          aria-label="Reset camera view"
        >
          <RotateCcw size={14} />
        </button>
      </div>
    </div>
  );
};

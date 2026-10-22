import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { SneakerModel } from './SneakerModel';
import { LoadedGLTFModel } from './LoadedGLTFModel';
import { AVAILABLE_3D_MODELS } from '../../data/modelsRegistry';
import type { Available3DModel } from '../../data/modelsRegistry';

interface HeroSceneProps {
  colorway?: string;
  selectedModel?: Available3DModel;
  className?: string;
}

// Parallax Controller that responds to mouse pointer smoothly
const InteractiveRig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const outerGroup = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      // Normalize mouse coordinates (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotation.current = {
        x: y * 0.25,
        y: x * 0.45
      };
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useFrame(() => {
    if (outerGroup.current) {
      // Smooth lerp towards target rotation
      outerGroup.current.rotation.x = THREE.MathUtils.lerp(
        outerGroup.current.rotation.x,
        targetRotation.current.x,
        0.05
      );
      outerGroup.current.rotation.y = THREE.MathUtils.lerp(
        outerGroup.current.rotation.y,
        targetRotation.current.y,
        0.05
      );
    }
  });

  return <group ref={outerGroup}>{children}</group>;
};

// Graceful WebGL / 3D Fallback banner if WebGL fails
export const Hero3DFallback: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#0e0e12] to-[#08080a] border border-white/10 rounded-2xl">
      <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-[#d4ff00]/10 animate-pulse" />
        <svg className="w-12 h-12 text-[#d4ff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </div>
      <span className="text-xs uppercase tracking-widest text-[#d4ff00] font-mono-tech mb-2">ARCHITECTURAL SILHOUETTE</span>
      <h3 className="text-2xl font-bold font-editorial text-white mb-2">VOID RUNNER // DROP 001</h3>
      <p className="text-sm text-white/60 max-w-sm">3D graphics hardware acceleration unavailable. Experience the sculptural sneaker in high definition via collection view.</p>
    </div>
  );
};

export const HeroScene: React.FC<HeroSceneProps> = ({
  colorway = 'Obsidian',
  selectedModel = AVAILABLE_3D_MODELS[0],
  className = 'w-full h-full'
}) => {
  const [hasWebGLError, setHasWebGLError] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (hasWebGLError) {
    return <Hero3DFallback />;
  }

  return (
    <div className={`relative ${className}`}>
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.3;
        }}
        onError={() => setHasWebGLError(true)}
      >
        <PerspectiveCamera makeDefault position={[0, 0.4, 4.8]} fov={42} />

        {/* Studio Lighting Arrangement */}
        <ambientLight intensity={0.45} />

        {/* Key Light: Crisp warm studio fill */}
        <directionalLight
          position={[5, 6, 4]}
          intensity={2.0}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />

        {/* Fill Light: Soft cool bounce */}
        <directionalLight position={[-5, 2, -2]} intensity={0.8} color="#8a9ab0" />

        {/* Rim Light: High-impact Electric Lime back-edge accent */}
        <spotLight
          position={[0, 4, -4]}
          intensity={3.8}
          color="#d4ff00"
          angle={0.6}
          penumbra={0.9}
        />

        {/* Top Accent Downlight */}
        <pointLight position={[0, 3, 2]} intensity={0.8} color="#ffffff" />

        <Suspense fallback={null}>
          <InteractiveRig>
            <Float
              speed={isReducedMotion ? 0 : 2}
              rotationIntensity={isReducedMotion ? 0 : 0.6}
              floatIntensity={isReducedMotion ? 0 : 0.7}
              floatingRange={[-0.1, 0.1]}
            >
              {/* 3D object dynamic presentation */}
              <group position={[0, 0.1, 0]}>
                {selectedModel.isProcedural || !selectedModel.path ? (
                  <SneakerModel
                    colorwayName={colorway}
                    scale={0.92}
                    rotation={[0.15, -0.65, 0.1]}
                    isFloating={false}
                  />
                ) : (
                  <LoadedGLTFModel
                    modelPath={selectedModel.path}
                    targetSize={2.4}
                    rotation={[0.15, -0.65, 0.1]}
                  />
                )}
              </group>
            </Float>

            {/* Soft Studio Ground Shadow */}
            <ContactShadows
              position={[0, -1.2, 0]}
              opacity={0.75}
              scale={6.5}
              blur={2.2}
              far={3.5}
              color="#000000"
            />
          </InteractiveRig>
        </Suspense>
      </Canvas>
    </div>
  );
};

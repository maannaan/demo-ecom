import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { SneakerModel } from './SneakerModel';
import { LoadedGLTFModel } from './LoadedGLTFModel';
import { AVAILABLE_3D_MODELS } from '../../data/modelsRegistry';
import type { Available3DModel } from '../../data/modelsRegistry';
import { RotateCcw, Play, Pause, Box } from 'lucide-react';

interface ProductViewerProps {
  activeColorway: string;
  selectedModel?: Available3DModel;
  onSelectModel?: (model: Available3DModel) => void;
  className?: string;
}

// 3D Canvas Scene Loader Spinner
const CanvasLoader: React.FC = () => {
  return (
    <group position={[0, 0, 0]}>
      <mesh>
        <torusGeometry args={[0.5, 0.05, 16, 32]} />
        <meshBasicMaterial color="#d4ff00" wireframe />
      </mesh>
    </group>
  );
};

export const ProductViewer: React.FC<ProductViewerProps> = ({
  activeColorway,
  selectedModel = AVAILABLE_3D_MODELS[0],
  onSelectModel,
  className = 'w-full h-full'
}) => {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [wireframeMode, setWireframeMode] = useState(false);
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
        <p className="text-white/70 max-w-sm text-sm">
          Failed to compile 3D shaders or load asset. Falling back to procedural preview.
        </p>
        <button
          onClick={() => {
            setHasError(false);
            if (onSelectModel) onSelectModel(AVAILABLE_3D_MODELS[0]);
          }}
          className="mt-4 px-4 py-2 text-xs uppercase font-mono-tech tracking-wider bg-white/10 hover:bg-white/20 text-white rounded transition"
        >
          Reset to Procedural Model
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
          gl.toneMappingExposure = 1.35;
        }}
        onError={() => setHasError(true)}
      >
        <PerspectiveCamera makeDefault position={[2.8, 1.2, 4.2]} fov={40} />

        {/* Orbit Controls with controlled bounds */}
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          enableZoom={true}
          minDistance={2.2}
          maxDistance={7.0}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2 + 0.05}
          autoRotate={isAutoRotating}
          autoRotateSpeed={1.2}
          dampingFactor={0.06}
          enableDamping={true}
        />

        {/* Studio Lighting Arrangement */}
        <ambientLight intensity={0.5} />

        {/* High-Contrast Directional Studio Key Light */}
        <directionalLight
          position={[5, 8, 5]}
          intensity={2.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />

        {/* Soft Cool Fill Light */}
        <directionalLight position={[-6, 2, -3]} intensity={0.9} color="#90a0b5" />

        {/* Signature Electric Lime Rim Light */}
        <spotLight
          position={[-3, 4, -4]}
          intensity={4.0}
          color="#d4ff00"
          angle={0.65}
          penumbra={0.9}
        />

        {/* Front Specular Glint */}
        <pointLight position={[0, 2, 4]} intensity={0.7} color="#ffffff" />

        <Suspense fallback={<CanvasLoader />}>
          <group position={[0, 0.1, 0]}>
            {selectedModel.isProcedural || !selectedModel.path ? (
              <SneakerModel
                colorwayName={activeColorway}
                wireframe={wireframeMode}
                scale={selectedModel.defaultScale || 1.15}
                rotation={selectedModel.rotation || [0, -0.4, 0]}
                isFloating={false}
              />
            ) : (
              <LoadedGLTFModel
                modelPath={selectedModel.path}
                targetSize={selectedModel.defaultScale || 2.8}
                wireframe={wireframeMode}
                rotation={selectedModel.rotation || [0, -0.4, 0]}
              />
            )}
          </group>

          {/* Soft Ground Contact Shadow */}
          <ContactShadows
            position={[0, -0.88, 0]}
            opacity={0.8}
            scale={7}
            blur={2.4}
            far={3}
            color="#000000"
          />
        </Suspense>
      </Canvas>

      {/* Top Floating Controls: Model Indicator & Drag Cue */}
      <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2 max-w-[calc(100%-120px)]">
        <span className="px-2.5 py-1 text-[11px] font-mono-tech tracking-wider uppercase bg-black/70 text-white/70 border border-white/10 rounded-full backdrop-blur-md">
          DRAG TO ROTATE
        </span>
        <span className="px-2.5 py-1 text-[11px] font-mono-tech tracking-wider uppercase bg-[#d4ff00]/15 text-[#d4ff00] border border-[#d4ff00]/30 rounded-full backdrop-blur-md font-semibold">
          {selectedModel.name}
        </span>
      </div>

      {/* Model Selection Quick Switcher (Top Right) */}
      {onSelectModel && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-black/70 border border-white/15 rounded-full p-1 backdrop-blur-md">
          {AVAILABLE_3D_MODELS.map(m => (
            <button
              key={m.id}
              onClick={() => onSelectModel(m)}
              className={`px-2.5 py-1 text-[10px] font-mono-tech uppercase tracking-wider rounded-full transition-all ${
                selectedModel.id === m.id
                  ? 'bg-[#d4ff00] text-black font-bold shadow-[0_0_10px_rgba(212,255,0,0.4)]'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
              title={m.description}
            >
              {m.label}
            </button>
          ))}
        </div>
      )}

      {/* Bottom Interactive Controls Bar */}
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

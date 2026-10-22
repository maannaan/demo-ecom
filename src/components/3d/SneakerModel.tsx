import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface SneakerModelProps {
  colorwayName?: string;
  wireframe?: boolean;
  scale?: number;
  rotation?: [number, number, number];
  isFloating?: boolean;
}

export const SneakerModel: React.FC<SneakerModelProps> = ({
  colorwayName = 'Obsidian',
  wireframe = false,
  scale = 1,
  rotation = [0, 0, 0],
  isFloating = false
}) => {
  const groupRef = useRef<THREE.Group>(null);

  // Palette resolution based on active colorway
  const palette = useMemo(() => {
    switch (colorwayName.toLowerCase()) {
      case 'bone':
        return {
          chassis: '#d8d5cd',
          secondary: '#c2bfb7',
          sole: '#25252b',
          accent: '#8e8e93',
          glowAccent: '#ffffff',
          hardware: '#82828c',
          laces: '#18181c',
          roughness: 0.45,
          metalness: 0.25
        };
      case 'signal':
        return {
          chassis: '#1e1f22',
          secondary: '#2a2b30',
          sole: '#111114',
          accent: '#ff3b30',
          glowAccent: '#ff5500',
          hardware: '#e65100',
          laces: '#d4ff00',
          roughness: 0.35,
          metalness: 0.4
        };
      case 'obsidian':
      default:
        return {
          chassis: '#0c0c0f',
          secondary: '#18181e',
          sole: '#141418',
          accent: '#d4ff00',
          glowAccent: '#d4ff00',
          hardware: '#2d2d38',
          laces: '#d4ff00',
          roughness: 0.3,
          metalness: 0.5
        };
    }
  }, [colorwayName]);

  // Subtle floating motion if enabled
  useFrame((state) => {
    if (isFloating && groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.08;
      groupRef.current.rotation.y = rotation[1] + Math.sin(t * 0.8) * 0.12;
      groupRef.current.rotation.z = rotation[2] + Math.cos(t * 1.2) * 0.04;
    }
  });

  return (
    <group ref={groupRef} scale={scale} rotation={rotation} dispose={null}>
      {/* ============================================================ */}
      {/* 1. SCULPTURAL SOLE UNIT (Articulated Midsole + Outsole Treads) */}
      {/* ============================================================ */}
      {/* Main Midsole Platform */}
      <mesh position={[0, -0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.4, 0.42, 1.35]} />
        <meshStandardMaterial
          color={palette.sole}
          roughness={0.7}
          metalness={0.15}
          wireframe={wireframe}
        />
      </mesh>

      {/* Front Rocker Upturn */}
      <mesh position={[1.5, -0.32, 0]} rotation={[0, 0, -0.22]} castShadow>
        <boxGeometry args={[0.9, 0.38, 1.25]} />
        <meshStandardMaterial
          color={palette.sole}
          roughness={0.7}
          metalness={0.15}
          wireframe={wireframe}
        />
      </mesh>

      {/* Heel Cushion Riser Block */}
      <mesh position={[-1.3, -0.25, 0]} rotation={[0, 0, 0.12]} castShadow>
        <boxGeometry args={[1.05, 0.5, 1.38]} />
        <meshStandardMaterial
          color={palette.secondary}
          roughness={0.5}
          metalness={0.3}
          wireframe={wireframe}
        />
      </mesh>

      {/* Nitrogen Cushion Window (Electric / Accent Glow Core) */}
      <mesh position={[-0.8, -0.42, 0.69]} castShadow>
        <boxGeometry args={[0.9, 0.18, 0.06]} />
        <meshStandardMaterial
          color={palette.glowAccent}
          emissive={palette.glowAccent}
          emissiveIntensity={wireframe ? 0 : 0.8}
          roughness={0.1}
          metalness={0.9}
          wireframe={wireframe}
        />
      </mesh>
      <mesh position={[-0.8, -0.42, -0.69]} castShadow>
        <boxGeometry args={[0.9, 0.18, 0.06]} />
        <meshStandardMaterial
          color={palette.glowAccent}
          emissive={palette.glowAccent}
          emissiveIntensity={wireframe ? 0 : 0.8}
          roughness={0.1}
          metalness={0.9}
          wireframe={wireframe}
        />
      </mesh>

      {/* Articulated Sole Vent Grooves */}
      {[-0.6, -0.1, 0.4, 0.9].map((xOffset, i) => (
        <mesh key={i} position={[xOffset, -0.66, 0]} castShadow>
          <boxGeometry args={[0.12, 0.06, 1.3]} />
          <meshStandardMaterial
            color="#050507"
            roughness={0.9}
            metalness={0.1}
            wireframe={wireframe}
          />
        </mesh>
      ))}

      {/* ============================================================ */}
      {/* 2. UPPER MAIN CHASSIS (Streamlined Ripstop / Ballistic Body) */}
      {/* ============================================================ */}
      {/* Lower Main Chassis */}
      <mesh position={[0.1, -0.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.9, 0.55, 1.25]} />
        <meshStandardMaterial
          color={palette.chassis}
          roughness={palette.roughness}
          metalness={palette.metalness}
          wireframe={wireframe}
        />
      </mesh>

      {/* Toe Cap Aerodynamic Slope */}
      <mesh position={[1.35, -0.08, 0]} rotation={[0, 0, -0.32]} castShadow>
        <boxGeometry args={[0.9, 0.45, 1.15]} />
        <meshStandardMaterial
          color={palette.secondary}
          roughness={0.4}
          metalness={0.3}
          wireframe={wireframe}
        />
      </mesh>

      {/* Ankle Collar & Instep Riser */}
      <mesh position={[-0.45, 0.45, 0]} rotation={[0, 0, 0.2]} castShadow>
        <boxGeometry args={[1.5, 0.65, 1.12]} />
        <meshStandardMaterial
          color={palette.chassis}
          roughness={palette.roughness}
          metalness={palette.metalness}
          wireframe={wireframe}
        />
      </mesh>

      {/* Ergonomic Sockliner Collar Rim */}
      <mesh position={[-0.65, 0.82, 0]} rotation={[0, 0, 0.1]} castShadow>
        <torusGeometry args={[0.42, 0.12, 16, 32]} />
        <meshStandardMaterial
          color={palette.secondary}
          roughness={0.8}
          metalness={0.1}
          wireframe={wireframe}
        />
      </mesh>

      {/* ============================================================ */}
      {/* 3. ARCHITECTURAL OVERLAYS & HARDWARE */}
      {/* ============================================================ */}
      {/* Outer Lateral Armor Wing (Left side) */}
      <mesh position={[0.1, 0.08, 0.65]} rotation={[0.08, 0, -0.05]} castShadow>
        <boxGeometry args={[1.7, 0.42, 0.08]} />
        <meshStandardMaterial
          color={palette.secondary}
          roughness={0.3}
          metalness={0.6}
          wireframe={wireframe}
        />
      </mesh>

      {/* Inner Medial Armor Wing (Right side) */}
      <mesh position={[0.1, 0.08, -0.65]} rotation={[-0.08, 0, -0.05]} castShadow>
        <boxGeometry args={[1.7, 0.42, 0.08]} />
        <meshStandardMaterial
          color={palette.secondary}
          roughness={0.3}
          metalness={0.6}
          wireframe={wireframe}
        />
      </mesh>

      {/* High-Contrast Diagonal Accent Stride (Brand Signature Slash) */}
      <mesh position={[0.2, 0.12, 0.7]} rotation={[0, 0, -0.45]} castShadow>
        <boxGeometry args={[1.1, 0.1, 0.04]} />
        <meshStandardMaterial
          color={palette.accent}
          emissive={palette.accent}
          emissiveIntensity={wireframe ? 0 : 0.6}
          roughness={0.2}
          metalness={0.7}
          wireframe={wireframe}
        />
      </mesh>
      <mesh position={[0.2, 0.12, -0.7]} rotation={[0, 0, -0.45]} castShadow>
        <boxGeometry args={[1.1, 0.1, 0.04]} />
        <meshStandardMaterial
          color={palette.accent}
          emissive={palette.accent}
          emissiveIntensity={wireframe ? 0 : 0.6}
          roughness={0.2}
          metalness={0.7}
          wireframe={wireframe}
        />
      </mesh>

      {/* ============================================================ */}
      {/* 4. SPEED-CABLE LACING SYSTEM & TONGUE */}
      {/* ============================================================ */}
      {/* Sculpted Tongue */}
      <mesh position={[0.25, 0.52, 0]} rotation={[0, 0, -0.42]} castShadow>
        <boxGeometry args={[1.1, 0.22, 0.75]} />
        <meshStandardMaterial
          color={palette.secondary}
          roughness={0.7}
          metalness={0.2}
          wireframe={wireframe}
        />
      </mesh>

      {/* Tension Cables / Laces */}
      {[-0.05, 0.2, 0.45].map((xPos, idx) => (
        <mesh
          key={idx}
          position={[xPos, 0.48 + idx * 0.09, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[0.035, 0.035, 0.88, 12]} />
          <meshStandardMaterial
            color={palette.laces}
            emissive={palette.laces}
            emissiveIntensity={palette.laces === '#d4ff00' ? 0.4 : 0.1}
            roughness={0.3}
            metalness={0.5}
            wireframe={wireframe}
          />
        </mesh>
      ))}

      {/* Magnetic Quick-Release Fidlock Top Toggle */}
      <mesh position={[-0.18, 0.78, 0]} castShadow>
        <boxGeometry args={[0.22, 0.14, 0.45]} />
        <meshStandardMaterial
          color={palette.hardware}
          roughness={0.2}
          metalness={0.9}
          wireframe={wireframe}
        />
      </mesh>

      {/* ============================================================ */}
      {/* 5. HEEL COUNTER & 3M REFLECTIVE PULL TAB */}
      {/* ============================================================ */}
      {/* Heel Shield */}
      <mesh position={[-1.42, 0.15, 0]} rotation={[0, 0, 0.18]} castShadow>
        <boxGeometry args={[0.28, 0.82, 1.05]} />
        <meshStandardMaterial
          color={palette.secondary}
          roughness={0.3}
          metalness={0.7}
          wireframe={wireframe}
        />
      </mesh>

      {/* Heel Pull Loop */}
      <mesh position={[-1.58, 0.52, 0]} rotation={[0, 0, -0.45]} castShadow>
        <torusGeometry args={[0.22, 0.045, 12, 24]} />
        <meshStandardMaterial
          color={palette.accent}
          emissive={palette.accent}
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.5}
          wireframe={wireframe}
        />
      </mesh>
    </group>
  );
};

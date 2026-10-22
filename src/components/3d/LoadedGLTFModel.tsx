import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

interface LoadedGLTFModelProps {
  modelPath: string;
  targetSize?: number;
  wireframe?: boolean;
  colorwayTint?: string;
  rotation?: [number, number, number];
}

export const LoadedGLTFModel: React.FC<LoadedGLTFModelProps> = ({
  modelPath,
  targetSize = 2.8,
  wireframe = false,
  colorwayTint,
  rotation = [0, 0, 0]
}) => {
  const gltf = useGLTF(modelPath);

  // Clone scene so multiple instances don't fight over mutations
  const { normalizedScene, centerOffset, scaleFactor } = useMemo(() => {
    const sceneClone = gltf.scene.clone(true);

    // Compute bounding box
    const box = new THREE.Box3().setFromObject(sceneClone);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = maxDim > 0 ? targetSize / maxDim : 1;

    // Center offset to place object center at origin (0, 0, 0)
    const offset: [number, number, number] = [
      -center.x * scale,
      -center.y * scale,
      -center.z * scale
    ];

    sceneClone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (mesh.material) {
          // Clone material to avoid cross-component mutation
          if (Array.isArray(mesh.material)) {
            mesh.material = mesh.material.map(m => m.clone());
            mesh.material.forEach(m => {
              if ('wireframe' in m) {
                (m as THREE.MeshStandardMaterial).wireframe = wireframe;
              }
              if (colorwayTint && m instanceof THREE.MeshStandardMaterial) {
                m.color = new THREE.Color(colorwayTint);
              }
            });
          } else {
            mesh.material = mesh.material.clone();
            if ('wireframe' in mesh.material) {
              (mesh.material as THREE.MeshStandardMaterial).wireframe = wireframe;
            }
            if (colorwayTint && mesh.material instanceof THREE.MeshStandardMaterial) {
              mesh.material.color = new THREE.Color(colorwayTint);
            }
          }
        }
      }
    });

    return {
      normalizedScene: sceneClone,
      centerOffset: offset,
      scaleFactor: scale
    };
  }, [gltf, targetSize, wireframe, colorwayTint]);

  return (
    <group rotation={rotation}>
      <primitive
        object={normalizedScene}
        position={centerOffset}
        scale={[scaleFactor, scaleFactor, scaleFactor]}
      />
    </group>
  );
};

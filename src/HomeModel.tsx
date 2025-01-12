import React, { useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface HomeModelProps {
    url: string;
    position: [number, number, number];
    scale: number;
    style: React.CSSProperties;
    camera: {
        position: [number, number, number];
        fov: number;    
    }
}


const HomeModel: React.FC<HomeModelProps> = ({ url, position, scale, style, camera }) => {
  const meshRef = useRef();
  const { scene } = useGLTF(url);

  useEffect(() => {
    if (scene) {
      // Center the model using its bounding box
      const box = new THREE.Box3().setFromObject(scene);
      const center = new THREE.Vector3();
      const size = new THREE.Vector3();
      box.getCenter(center); // Get center of bounding box
      box.getSize(size);
      scene.position.sub(center); // Move model so its center aligns with origin

      const maxAxis = Math.max(size.x, size.y, size.z);
      const scaleFactor = 1 / maxAxis; // Normalize size to 1 unit
      scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

      scene.rotation.z = Math.PI * 2; // Optional rotation
    }
  }, [scene]);

  return (
    <Canvas style={style} camera={camera}>
      <Suspense fallback={null}>
        <primitive
          ref={meshRef}
          object={scene}
          position={position}
          scale={scale}
        />
        <Environment preset="sunset" />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default HomeModel;
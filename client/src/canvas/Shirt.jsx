import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { Decal, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes } = useGLTF('/shirt_baked.glb');
  const [rotationY, setRotationY] = useState(0);
  const [isRotating, setIsRotating] = useState(true); // State to track rotation

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => {
    if (isRotating) {
      // Calculate the new rotation angle based on delta time
      const newRotationY = rotationY + (0.5 * Math.PI * delta);
    
      // Check if the rotation has completed a full 360 degrees
      const isCompleteRotation = newRotationY >= Math.PI * 2;
    
      // If the rotation has completed, reset the rotation angle
      if (isCompleteRotation) {
        setRotationY(0);
      } else {
        setRotationY(newRotationY);
      }
    }

    // Smoothly transition the color of the shirt material
    easing.dampC(nodes.T_Shirt_male.material.color, snap.color, 0.25, delta);
  });

  const handleShirtClick = () => {
    setIsRotating(!isRotating); // Toggle rotation state on click
  };

  return (
    <group rotation={[0, rotationY, 0]} onClick={handleShirtClick}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={nodes.T_Shirt_male.material}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;

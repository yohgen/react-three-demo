import { useRef } from 'react';
import { useThree, useFrame, extend } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

export const Controls = () => {
  const { camera, gl: { domElement } } = useThree();

  const orbitRef = useRef<OrbitControls>(null!);

  useFrame(() => {
    const orbit = orbitRef.current;
    orbit.update();
  });

  return <orbitControls ref={orbitRef} args={[camera, domElement]} />;
};

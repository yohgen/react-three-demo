import { useRef } from 'react';
import { BoxGeometry, Mesh } from 'three';

import { normalizeHeight, vectorizeDimensions } from 'shared/utils';

import { StateProps } from 'App';

export const Room = ({ state }: StateProps) => {
  const meshRef = useRef<Mesh>(null!);
  const boxRef = useRef<BoxGeometry>(null!);

  return (
    <mesh ref={meshRef} position={normalizeHeight(state)}>
      <boxGeometry ref={boxRef} args={vectorizeDimensions(state) as [number, number, number]} />
      <meshNormalMaterial />
    </mesh>
  );
};

import { useRef } from 'react';
import { BoxGeometry, Mesh } from 'three';

import { dimsToNormHeightVector, dimsToVector } from 'shared/utils';

import { StateProps } from 'App';

export const Room = ({ state }: StateProps) => {
  const meshRef = useRef<Mesh>(null!);
  const boxRef = useRef<BoxGeometry>(null!);

  return (
    <mesh ref={meshRef} position={dimsToNormHeightVector(state)}>
      <boxGeometry ref={boxRef} args={dimsToVector(state)} />
      <meshNormalMaterial />
    </mesh>
  );
};

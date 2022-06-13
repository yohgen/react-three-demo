import { Vector3 } from '@react-three/fiber';

import { randPosition } from 'shared/utils';

const STAR_QUANTITY = 2500;
const MIN_MAX_POSITION: [number, number] = [-60, 60];

const stars = [...Array(STAR_QUANTITY)].map((_ele, idx) => ({
  key: `STAR-${idx}`,
  position: randPosition(...MIN_MAX_POSITION),
}));

const Star = ({ position }: { position: Vector3 }) => (
  <mesh position={position}>
    <sphereGeometry args={[0.05]} />
    <meshBasicMaterial color='#ffffff' />
  </mesh>
);

export const Background = () => (
  <>
    <gridHelper args={[15, 15, '#ffffff', '#ffffff']} />
    {stars.map((starProps) => <Star {...starProps} />)}
  </>
);

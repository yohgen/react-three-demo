import { Vector3 } from '@react-three/fiber';

import { randPosition } from 'shared/utils';

const GRID_SIZE = 15;
const WHITE_HEX = '#ffffff';
const STAR_QUANTITY = 2500;
const MIN_MAX_POSITION: [number, number] = [-60, 60];

const stars = [...Array(STAR_QUANTITY)].map((_ele, idx) => ({
  key: `STAR-${idx}`,
  position: randPosition(...MIN_MAX_POSITION),
}));

const Star: React.FC<{ position: Vector3 }> = ({ position }) => (
  <mesh position={position}>
    <sphereGeometry args={[0.05]} />
    <meshBasicMaterial color={WHITE_HEX} />
  </mesh>
);

export const Background = () => (
  <>
    <gridHelper args={[GRID_SIZE, GRID_SIZE, WHITE_HEX, WHITE_HEX]} />
    {stars.map((starProps) => <Star {...starProps} />)}
  </>
);

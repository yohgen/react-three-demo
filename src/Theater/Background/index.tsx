import { useEffect, useState } from 'react';

import { randPosition, repeat } from 'shared/utils';

const STAR_QUANTITY = 2500;
const MIN_MAX_POSITION: [number, number] = [-60, 60];

const Star = ({ key }: { key: string }) => (
  <mesh key={key} position={randPosition(...MIN_MAX_POSITION)}>
    <sphereGeometry args={[0.05]} />
    <meshBasicMaterial color='#ffffff' />
  </mesh>
);

export const Background = () => {
  const [stars, setStars] = useState<(typeof Star)[]>([]);

  useEffect(() => {
    const repeated = repeat(Star, STAR_QUANTITY);
    setStars(repeated);
  }, []);

  return (
    <>
      <gridHelper args={[15, 15, '#ffffff', '#ffffff']} />
      {stars.map((star, idx) => star({ key: `STAR-${idx}` }))}
    </>
  );
}

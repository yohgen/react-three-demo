import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

export const useInitialCamera = () => {
  const camera = useThree((three) => three.camera);

  useEffect(() => {
    camera.position.set(10, 10, 10);
  }, []);
};

import { useThree } from '@react-three/fiber';

export const Camera = () => {
  useThree(({ camera }) => {
    camera.position.set(10, 10, 10);
  });
  return null;
};

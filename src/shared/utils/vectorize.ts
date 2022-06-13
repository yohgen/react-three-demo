import { Vector3 } from '@react-three/fiber';

interface DimensionObject {
  length: number;
  width: number;
  height: number;
};

export const vectorizeDimensions = (
  { length, width, height }: DimensionObject
): Vector3 => [width, height, length];

export const normalizeHeight = (
  { height }: DimensionObject
): Vector3 => [0, height / 2, 0];

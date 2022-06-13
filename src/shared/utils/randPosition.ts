import { Vector3 } from '@react-three/fiber';
import { MathUtils } from 'three';

export const randAxis = (min: number, max: number) => MathUtils.randFloat(min, max);

export const randPosition = (min: number, max: number): Vector3 => [
  randAxis(min, max),
  randAxis(min, max),
  randAxis(min, max),
];

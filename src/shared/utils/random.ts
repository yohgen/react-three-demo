import { MathUtils } from 'three';

export const randAxis = (min: number, max: number) => MathUtils.randFloat(min, max);

export const randPosition = (min: number, max: number): [number, number, number] => [
  randAxis(min, max),
  randAxis(min, max),
  randAxis(min, max),
];

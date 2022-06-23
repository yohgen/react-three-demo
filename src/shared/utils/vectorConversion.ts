interface Dims {
  length: number;
  width: number;
  height: number;
};

export const dimsToVector = (
  { length, width, height }: Dims
): [number, number, number] => [width, height, length];

export const dimsToNormHeightVector = (
  { height }: Dims
): [number, number, number] => [0, height / 2, 0];

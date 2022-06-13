export const repeat = (item: any, number: number) => {
  const result = [];

  for (let idx = 0; idx < number; idx++) {
    result.push(item);
  }

  return result;
};

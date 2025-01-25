export const calculateStickTransform = (x, y) => {
  const offsetX = x * 20;
  const offsetY = y * 20;
  return `translate(${offsetX}, ${offsetY})`;
};

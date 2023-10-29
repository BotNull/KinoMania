export const isObjectNested = obj => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    Object.values(obj).some(
      value => typeof value === 'object' && value !== null,
    )
  );
};

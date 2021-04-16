const convertInRange = (
  oldValue: number,
  oldRange: [number, number],
  newRange: [number, number]
): number => {
  return (
    ((oldValue - oldRange[0]) / (oldRange[1] - oldRange[0])) * (newRange[1] - newRange[0]) +
    newRange[0]
  );
};

export default convertInRange;

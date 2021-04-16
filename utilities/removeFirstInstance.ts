const removeFirstInstance = (array: string[], value: string): string[] => {
  let del = false;
  return array.filter((val) => {
    if (val === value && !del) {
      del = true;
      return false;
    }
    return true;
  });
};

export default removeFirstInstance;

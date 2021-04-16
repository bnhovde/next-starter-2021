function isNumber(value: number | string): boolean {
  if (typeof value === 'number') {
    return true;
  }

  if (typeof value === 'string') {
    return /^-?\d+$/.test(value);
  }

  return false;
}

export default isNumber;

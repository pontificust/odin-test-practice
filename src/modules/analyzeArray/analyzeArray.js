export const analyzeArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("wrong type, please input an array of numeric values");
  }

  arr.forEach((val) => {
    if (!Number.isFinite(val)) {
      throw new Error("wrong type, please input an array of numeric values");
    }
  });

  return {
    average:
      Math.round((arr.reduce((acc, val) => acc + val, 0) / arr.length) * 100) /
      100,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

export const capitalize = (str) => {
  if (typeof str !== "string") {
    throw new Error("wrong type, please input a string value");
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

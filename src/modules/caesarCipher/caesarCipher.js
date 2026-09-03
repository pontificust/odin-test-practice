export const caesarCipher = (str, shiftFactor) => {

  if(typeof str !== 'string' || !Number.isFinite(shiftFactor)){
    throw new Error('wrong input type');
  }

  let encryptedStr = "";
  
  const isUpperCase = (charCode) => {
      return charCode <= 90 && charCode >= 65;
    };
    
    const isLowerCase = (charCode) => {
        return charCode >= 97 && charCode <= 122;
    };
    
    const getShiftedLetter = (shiftedIdx, maxIdx) => {
        if (shiftedIdx <= maxIdx) {
            return String.fromCharCode(shiftedIdx);
        } else {
            return String.fromCharCode(shiftedIdx - 26);
        }
    };
    
    const mod = (n, m) => {
        return ((n % m) + m) % m;
    };
    const shift = mod(shiftFactor, 26);

  for (let i = 0; i < str.length; i += 1) {
    const unshiftedIdx = str.charCodeAt(i);
    const shiftedIdx = unshiftedIdx + shift;

    if (isUpperCase(unshiftedIdx)) {
      encryptedStr += getShiftedLetter(shiftedIdx, 90);
    } else if(isLowerCase(unshiftedIdx)){
      encryptedStr += getShiftedLetter(shiftedIdx, 122);
    } else {
        encryptedStr += str[i];
    }
  }

  return encryptedStr;
};

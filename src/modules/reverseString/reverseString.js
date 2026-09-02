export const reverseString = (str) => {
    if(typeof str !== 'string'){
        throw new Error('wrong type, please input a string value');
    }
    return str.split('').reverse().join('');
};
/**
 * Creates deep copy of an object
 * @param {Object<string, any>} obj Object to copy
 */

export const deepCopy = obj => JSON.parse(JSON.stringify(obj));

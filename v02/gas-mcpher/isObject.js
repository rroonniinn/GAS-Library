/**
 * isObject
 * check if an item is an object
 * @memberof DbAbstraction
 * @param {object} obj an item to be tested
 * @return {boolean} whether its an object
 * */
const isObject = obj => obj === Object(obj);

export { isObject };

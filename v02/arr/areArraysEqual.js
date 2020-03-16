/**
 *
 * From: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
 * @param {array} arr1
 * @param {array} arr2
 */
const areArraysEqual = (arr1, arr2) =>
	arr1.length === arr2.length && arr1.every((el, i) => el === arr2[i]);

export { areArraysEqual };

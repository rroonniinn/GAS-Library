/**
 * Tu jest gorsza funkcja: v02/gas/isDate.js
 * Taken from: https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date
 * @param {*} date
 */

export const isDate = date =>
	date &&
	Object.prototype.toString.call(date) === '[object Date]' &&
	!!Date.prototype.getFullYear.call(date);

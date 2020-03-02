import { isObject } from './isObject';

/**
 * test for a date object
 * @param {*} ob the on to test
 * @return {boolean} t/f
 */
const isDateObject = ob =>
	isObject(ob) && ob.constructor && ob.constructor.name === 'Date';

export { isDateObject };

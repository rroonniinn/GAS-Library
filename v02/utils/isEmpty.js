/* eslint-disable no-sparse-arrays */

import { isDate } from './isDate';

const checkArr = arr => {
	const booleanMap = arr.map(el =>
		Array.isArray(el) ? checkArr(el) : el === 0 ? false : !el
	);
	return !booleanMap.flat(10).some(el => el === false);
};

/**
 * Sprawdza czy otrzymana wartość jest pusta.
 * Zachowuje się wg. mojego wzoru. W unit testach
 * widać wyniki dla różnych wartości
 * @param {*} val Dowolna wartość
 * @returns {Boolean}
 */

const isEmpty = val => {
	if (isDate(val)) {
		return false;
	}
	if (Array.isArray(val)) {
		return checkArr(val);
	}
	if (typeof val === 'object' && val !== null) {
		return checkArr(Object.values(val));
	}
	return val === 0 ? false : !val;
};

export { isEmpty };

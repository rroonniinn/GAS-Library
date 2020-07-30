/* eslint-disable no-sparse-arrays */

const checkArr = arr => {
	const booleanMap = arr.map(el =>
		Array.isArray(el) ? checkArr(el) : el === 0 ? false : !el
	);
	return !booleanMap.flat(10).some(el => el === false);
};

/**
 * Sprawdza czy otrzymana wartość jest pusta. Zatem:
 * [] = true, [[]] = true, [[[]]] = true, {} = true, [''] = true,
 * { a: '' } = true, { a: [] } = true, { a: [[]] } = true,
 *
 * [[[1]]] = false, { a: [[1]] } = false, [0] = false,
 * { a: 0 } = false, 0 = false
 *
 * Nie działa tylko poprawnie dla zagnieżdzonych obiektów
 * [{}] - false / a powinno być true
 *
 * @param {*} val Dowolna wartość
 * @returns {Boolean}
 */

const isEmpty = val => {
	if (Array.isArray(val)) {
		return checkArr(val);
	}
	if (typeof val === 'object' && val !== null) {
		return checkArr(Object.values(val));
	}
	return val === 0 ? false : !val;
};

export { isEmpty };

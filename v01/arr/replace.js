/* eslint-disable max-params */
/* eslint-disable no-unused-vars */

/**
 * Zwraca nową tablicę w której wymieniony jest element z podanego indeksu
 * na przekazaną wartość. Jeśli index jest mniejszy od zera
 * lub przekraczający maksymalny index tablicy,
 * funkcja zwraca oryginalną tablicę
 *
 * @example
 * replaceC([1, 2, 3], 0, 'A') // -> ['A', 2, 3]
 *
 * @param {array} arr
 * @param {number} index
 * @param {*} element
 * @returns {array}
 */

const replace = (arr, index, element) => {
	if (index >= 0 && index < arr.length) {
		return [...arr.slice(0, index), element, ...arr.slice(index + 1)];
	}
	return arr;
};

export { replace };

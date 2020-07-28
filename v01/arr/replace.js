/* eslint-disable max-params */
/* eslint-disable no-unused-vars */

/**
 * Zwraca nową tablicę w której wymienony jest element z podanego indexu
 * na przekazaną wartość. Jeśli index jest mniejszy od zera
 * lub przekraczający maksymalny index tablicy,
 * funkcja zwraca oryginalną tablicę
 *
 * @param {Array} arr
 * @param {Number} index
 * @param {*} element
 * @returns {Array}
 */

const replace = (arr, index, element) => {
	if (index >= 0 && index < arr.length) {
		return [...arr.slice(0, index), element, ...arr.slice(index + 1)];
	}
	return arr;
};

export { replace };

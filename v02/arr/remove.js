/* eslint-disable max-params */
/* eslint-disable no-unused-vars */

/**
 * Zwraca nową tablicę z której usunięto element z podanego indeksu
 * Jeśli index jest mniejszy od zera lub przekraczający maksymalny index tablicy,
 * funkcja zwraca nie zmodyfikowaną tablicę
 *
 * @param {Array} arr
 * @param {Number} index
 * @returns {Array}
 */

const remove = (arr, index) => {
	if (!Array.isArray(arr))
		throw new Error('Remove works on arrays only');
	if (typeof index !== 'number')
		throw new Error(
			`Wrong argument type. Remove expects "number", got ${typeof index}`
		);

	if (index >= 0 && index < arr.length) {
		return [...arr.slice(0, index), ...arr.slice(index + 1)];
	}
	return arr;
};

export { remove };

/* eslint-disable max-params */
const isIndexOk = (arr, i) => i >= 0 && arr.length > i;
/**
 * Zwraca nową tablicę w której dodano element po wskazanym indeksie.
 * Nowa pozycja pojawi się na pozycji index + 1.
 * Wszystkie istniejące pozycje po wskazanym indeksie
 * zostaną przesunięte o jeden. Jeśli przekazany index będzie mniejszy od
 * 0 lub przekraczający długość tablicy - 1, zostanie zwrócona oryginalna
 * tablica
 *
 * @param {Array} arr
 * @param {Number} index Indeks po którym ma być dodany element
 * @param {*} element
 * @returns {Array}
 */

const insertAfter = (arr, index, element) => {
	if (isIndexOk(arr, index)) {
		return [
			...arr.slice(0, index + 1),
			element,
			...arr.slice(index + 1),
		];
	}

	return arr;
};

export { insertAfter };

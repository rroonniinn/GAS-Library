/* eslint-disable max-params */
const isIndexOk = (arr, i) => i >= 0 && arr.length > i;
/**
 * Zwraca nową tablicę w której dodano element przed wskazanym indeksem.
 * Nowa pozycja pojawi się na pozycji index.
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

const insertBefore = (arr, index, element) => {
	if (isIndexOk(arr, index)) {
		return [...arr.slice(0, index), element, ...arr.slice(index)];
	}
	return arr;
};

export { insertBefore };

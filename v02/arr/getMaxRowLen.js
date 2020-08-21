/**
 * Zwraca długość najdłuższego wiersza w tablicy 2d
 * @param {array[]} arr Tablica 2d
 * @returns {number} liczba komórek w najdłuższym wierszu
 */
const getMaxRowLen = arr =>
	arr.reduce((max, row) => (max > row.length ? max : row.length), 0);

export { getMaxRowLen };

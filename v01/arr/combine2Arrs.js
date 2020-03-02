/* eslint-disable complexity */

/**
 * Zwraca połączone dwie tablice lub każdą z osobna jeśli druga jest niezdefinowana
 * W przypadku obu niezdefiniowanych zwraca null
 *
 * @param {Array|undefined} arrA Tablica
 * @param {Array|undefined} arrB Tablica
 * @returns
 */

const combine2Arrs = (arrA, arrB) => {
	if (arrA && arrB) return arrA.concat(arrB);
	if (arrA || arrB) return arrA || arrB;
	return null;
};

export { combine2Arrs };

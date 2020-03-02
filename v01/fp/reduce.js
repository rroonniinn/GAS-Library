/**
 * Zcurowana wersja reduce przyjmująca tylko callback
 *
 * @param {Function} callback Funkcja do zastosowania na każdym elemencie tablicy
 * @param {Array} arr Tablica
 */
const reduce = callback => arr => arr.reduce(callback);

/**
 * Zcurowana wersja reduce przyjmująca oprócz callbacku również inicjalną wartość
 *
 * @param {Function} callback Funkcja do zastosowania na każdym elemencie tablicy
 * @param {Any} initEl Startowa wartość reduca
 * @param {Array} arr Tablica
 */
const reduceInitEl = (callback, initEl) => arr =>
	arr.reduce(callback, initEl);

export { reduce, reduceInitEl };

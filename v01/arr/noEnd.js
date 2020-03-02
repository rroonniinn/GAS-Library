/**
 * Zwraca tablicę skróconą o ostatni element,
 * dla pustej tablicy zwraca pustą tablicę
 *
 * @param {Array} arr Tablica
 * @returns {Array}
 */
const noEnd = arr => arr.slice(0, arr.length - 1);

export { noEnd };

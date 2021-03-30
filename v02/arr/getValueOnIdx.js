/**
 * @callback GetValueOnIdx Callback dla findRow
 * @param {array|array[]} arr Tablica z której pobieramy element
 * @returns {array|*} Szukany element -> dla array 2d wiersz dla array 1d wartość
 */

/**
 * Zwraca wartość elementu znajdującego się na wskazanym indeksie.
 * Jeśli indeks nie pokrywa się z tablicą, zwraca `undefined`
 * Funkcja scurowana . Do kompozycji. Dlatego zwraca pustą tablicę
 * a nie 'undefined' dla nieznalezionych wartości.
 * @param {number} idx Indeks z którego pobieramy wartość
 * @returns {GetValueOnIdx} Callback
 */

export const getValueOnIdx = idx => arr => arr[idx];

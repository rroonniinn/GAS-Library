/**
 * @callback FindRowArray Callback dla findRow
 * @param {array|array[]} arr Tablica na której wykonywany jest test z callbacka
 * @returns {array|*} Szukany element -> dla array 2d wiersz dla array 1d wartość
 */

/**
 * @callback FindRowCallback Callback dla findRow
 * @param {*} [row] Element tablicy na którym wykonywany jest callback
 * @param {number} [i] Indeks elementu
 * @returns {boolean} Wynik testu na elemencie
 */

/**
 * Zwraca pierwszy wiersz tablicy spełniający warunek sprawdzany
 * w callbacku. Jeśli element nie jest znaleziony, zwracana jest pusta tablica.
 * Funkcja scurowana . Do kompozycji. Dlatego zwraca pustą tablicę
 * a nie 'undefined' dla nieznalezionych wartości.
 * @example
 * const arr = [
 * 	[1, 'A'],
 * 	[2, 'B'],
 * 	[3, 'C'],
 * ];
 *
 * findRow(row => row[0] >= 2)(arr) // -> [2, 'B']
 * findRow(row => row[0] >= 4)(arr) // -> []
 *
 * @param {FindRowCallback} callback
 * @returns {FindRowArray}
 */

export const findRow = callback => arr => arr.find(callback) || [];

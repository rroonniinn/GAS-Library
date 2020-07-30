/**
 * Funkcja wykorzysytwana jako callback do filtru dla tablic 2d
 * Zwraca wiersze, które mają minimum jedną komórkę wypełnioną
 * @param {array} row Wiersz przekazany do filtru
 */

export const rowNotEmpty = row => !row.every(cell => !cell);

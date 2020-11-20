/**
 * Zwraca index kolumny, która w nagłówku posiada przekazaną nazwę
 * @param {array[]} arr Tablica z nagłówkami w pierwszym wierszu
 * @param {string} columnName Nazwa kolumny
 */
const getColumnIndex = (arr, columnName) =>
	arr
		.slice(0, 1)
		.reduce(a => a)
		.findIndex(val => val === columnName);

export { getColumnIndex };

/**
 * Zwraca obiekt: klucze - nagłówki kolumn, wartości - indeksy tych kolumn
 * @param {array[]} data Tablica z nagłówkami w pierwszym wierszu
 * @returns {Object<string, number>}
 */

const getHeaderColumns = data => {
	const header = data[0];

	return header.reduce((obj, headerEl, i) => {
		obj[headerEl] = i;
		return obj;
	}, {});
};

export { getHeaderColumns };

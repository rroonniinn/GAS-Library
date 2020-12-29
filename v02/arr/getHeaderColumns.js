import { isArray2d } from "./../../v02/utils/isArray2d";

/**
 * Zwraca obiekt: klucze - nagłówki kolumn, wartości - indeksy tych kolumn
 * @param {array[]|array} data Tablica z nagłówkami w pierwszym wierszu
 * @returns {Object<string, number>}
 */

const getHeaderColumns = data => {
	const header = isArray2d(data) ? data[0] : data;

	return header.reduce((obj, headerEl, i) => {
		obj[headerEl] = i;
		return obj;
	}, {});
};

export { getHeaderColumns };

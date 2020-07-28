// @ts-nocheck
import { isUrl } from '../str/isUrl';

import { getIdFromUrl } from './getIdFromUrl';
import { isSpradsheet } from './isSpradsheet';

const { openById } = SpreadsheetApp;

/**
 * Zwraca tablicę arkuszy z określonego skoroszytu
 * Opcjonalny parametr może przybierać: Obiekt Skoroszytu, id lub url skoroszytu zewnętrznego.
 * Jeśli nie jest podany - pobiera arkusze z bieżącego pliku (bound)
 *
 * @param {string|GoogleAppsScript.Spreadsheet.Spreadsheet} val Obiekt Spreadsheet lub id, url Skoroszytu
 * @returns {GoogleAppsScript.Spreadsheet.Sheet[]} Tablica arkuszy
 */

const getSheets = (val = null) => {
	if (!val) return SpreadsheetApp.getActive().getSheets();
	if (isSpradsheet(val)) return val.getSheets();

	return isUrl(val)
		? openById(getIdFromUrl(val)).getSheets()
		: openById(val).getSheets();
};

export { getSheets };

/**
 * openByUrl nie rozpoznaje poprawnie wszystkich urli - dlatego jest
 * wyciągane id z urla
 */

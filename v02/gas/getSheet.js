import { isUrl } from '../str/isUrl';

import { getIdFromUrl } from './getIdFromUrl';
import { isSheet } from './isSheet';
import { isSpradsheet } from './isSpradsheet';

const { openById } = SpreadsheetApp;

/**
 * Zwraca arkusza o podanej nazwie. Jako drugi parametr przyjmuje
 * opcjonalnie id lub url skoroszytu zewnętrznego. Jeśli drugi parametr
 * nie jest podany - pobiera arkusz z bieżącego pliku (bound)
 *
 * @param {any} val Obiekt Sheet lub Nazwa arkusza
 * @param {any} [idUrlSs] ID, Url lub Obiekt Skoroszytu
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} Arkusz
 */

const getSheet = (val, idUrlSs = null) => {
	if (isSheet(val)) return val;
	if (isSpradsheet(idUrlSs)) return idUrlSs.getSheetByName(val);

	return idUrlSs
		? isUrl(idUrlSs)
			? openById(getIdFromUrl(idUrlSs)).getSheetByName(val)
			: openById(idUrlSs).getSheetByName(val)
		: SpreadsheetApp.getActive().getSheetByName(val);
};

export { getSheet };

/**
 * openByUrl nie rozpoznaje poprawnie wszystkich url'i - dlatego jest
 * wyciągane id z url'a
 */

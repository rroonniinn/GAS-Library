import { isUrl } from '../str/isUrl';

import { getIdFromUrl } from './getIdFromUrl';
import { isSheet } from './isSheet';

const { openById } = SpreadsheetApp;

/**
 * Zwraca arkusza o podanej nazwie. Jako drugi parametr przyjmuje
 * opcjonalnie id lub url skoroszytu zewnętrznego. Jeśli drugi parametr
 * nie jest podany - pobiera arkusz z bieżącego pliku (bound)
 *
 * @param {any} val Obiekt Sheet lub Nazwa arkusza
 * @param {string} [idUrl] ID lub Url Skoroszytu
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} Arkusz
 */

const getSheet = (val, idUrl = null) => {
	if (isSheet(val)) return val;

	return idUrl
		? isUrl(idUrl)
			? openById(getIdFromUrl(idUrl)).getSheetByName(val)
			: openById(idUrl).getSheetByName(val)
		: SpreadsheetApp.getActive().getSheetByName(val);
};

export { getSheet };

/**
 * openByUrl nie rozpoznaje poprawnie wszystkich url'i - dlatego jest
 * wyciągane id z url'a
 */

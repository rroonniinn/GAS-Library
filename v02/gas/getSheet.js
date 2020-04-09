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
 * @param {string} [source] ID lub Url Skoroszytu
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} Arkusz
 */
const getSheet = (val, source = null) => {
	if (isSheet(val)) return val;

	return source
		? isUrl(source)
			? openById(getIdFromUrl(source)).getSheetByName(val)
			: openById(source).getSheetByName(val)
		: SpreadsheetApp.getActive().getSheetByName(val);
};

export { getSheet };

/**
 * openByUrl nie rozpoznaje poprawnie wszystkich urli - dlatego jest
 * wyciągane id z urla
 */

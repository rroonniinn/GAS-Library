import { isUrl } from '../str/isUrl';
import { getIdFromUrl } from './getIdFromUrl';

/**
 * Zwraca arkusza o podanej nazwie. Jako drugi parametr przyjmuje
 * opcjonalnie id lub url skoroszytu zewnętrznego. Jeśli drugi parametr
 * nie jest podany - pobiera arkusz z bieżącego pliku (bound)
 *
 * @param {string} sheetName Nazwa arkusza
 * @param {string} [source] Id lub url pliku
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} Arkusz
 */
const { openById } = SpreadsheetApp;
const getSheet = (sheetName, source = null) =>
	source
		? isUrl(source)
			? openById(getIdFromUrl(source)).getSheetByName(sheetName)
			: openById(source).getSheetByName(sheetName)
		: SpreadsheetApp.getActive().getSheetByName(sheetName);

export { getSheet };

/**
 * openByUrl nie rozpoznaje poprawnie wszystkich urli - dlatego jest
 * wyciągane id z urla
 */

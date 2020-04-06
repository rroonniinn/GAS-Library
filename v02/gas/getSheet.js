import { isUrl } from '../str/isUrl';

/**
 * Zwraca arkusza o podanej nazwie. Jako drugi parametr przyjmuje
 * opcjonalnie id lub url skoroszytu zewnętrznego. Jeśli drugi parametr
 * nie jest podany - pobiera arkusz z bieżącego pliku (bound)
 *
 * @param {string} sheetName Nazwa arkusza
 * @param {string} [source] Id lub url pliku
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} Arkusz
 */

const getSheet = (sheetName, source = null) =>
	source
		? isUrl(source)
			? SpreadsheetApp.openByUrl(source).getSheetByName(sheetName)
			: SpreadsheetApp.openById(source).getSheetByName(sheetName)
		: SpreadsheetApp.getActive().getSheetByName(sheetName);

export { getSheet };

/* eslint-disable max-params */
import { getSheetLastRowPosition } from '../../v01/gas/getSheetLastRowPosition';

/**
 * Dodaje wskazaną liczbę wierszy na końcu wskazanego arkusza.
 * Ostatni parametry jest opcjonalny - nie podanie go wskaże arkusz
 * w pliku w których został wywołany (bound)
 *
 * @param {number} howMany Liczba wierszy do dodania
 * @param {string} sheetName Nazwa arkusza
 * @param {string} fileId Opcjonalny ID pliku w którym znajduje się arkusz
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} Obiekt sheet do dalszej modyfikacji
 */

const insertRows = (howMany, sheetName, fileId) => {
	const { lastRow, sheet } = getSheetLastRowPosition(sheetName, fileId);
	return sheet.insertRowsAfter(lastRow, howMany);
};

export { insertRows };

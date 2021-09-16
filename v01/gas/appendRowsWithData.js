/* eslint-disable max-params */
import { getSheetLastRowPosition } from './getSheetLastRowPosition';
import { paste } from './paste';

/**
 * Dokleja wskazane dane
 * na końcu istniejących danych arkusza docelowego
 * Ostatni parametry jest opcjonalny - nie podanie go wskaże arkusz
 * w pliku w których został wywołany (bound)
 *
 * @param {Array[]} arr2d Tablica z danymi
 * @param {String} sheetName Nazwa arkusza
 * @param {String} fileId Opcjonalny ID pliku w którym znajduje się arkusz
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} Obiekt sheet do dalszej modyfikacji
 */

const appendRowsWithData = (arr2d, sheetName, fileId) => {
	const rows = arr2d.length;
	const { lastRow, sheet } = getSheetLastRowPosition(sheetName, fileId);
	sheet.insertRowsAfter(lastRow, rows);
	paste(sheet, 'A', lastRow + 1, arr2d);
	return sheet;
};

export { appendRowsWithData };

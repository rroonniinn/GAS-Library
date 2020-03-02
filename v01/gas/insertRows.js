/* eslint-disable max-params */
import { getSheetLastRowPosition } from './getSheetLastRowPosition';

/**
 * Dodaje wskazaną liczbę wierszy na końcu wskazanego arkusza.
 * Ostatni parametry jest opcjonalny - nie podanie go wskaże arkusz
 * w pliku w których został wywołany (bound)
 *
 * @param {Number} howMany
 * @param {String} sheetName Nazwa arkusza
 * @param {String} fileId Opcjonalny ID pliku w którym znajduje się arkusz
 * @returns {sheetObj} Obiekt sheet do dalszej modyfikacji
 */

const insertRows = (howMany, sheetName, fileId) => {
	const { lastRow, sheet } = getSheetLastRowPosition(sheetName, fileId);
	return sheet.insertRowsAfter(lastRow, howMany);
};

export { insertRows };

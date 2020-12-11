import { columnToLetter as toLetter } from '../../v01/gas/columnToLetter';

/**
 * Zwraca obiekt Range dla pojedynczej kolumny ciągnący się od wskazanego wiersza
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @param {number} colNr
 * @param {number} row
 * @returns
 */

const getColumnRange = (sheet, colNr, row) => {
	const col = toLetter(colNr);
	const range = `${col}${row}:${col}`;
	return sheet.getRange(range);
};

export { getColumnRange };

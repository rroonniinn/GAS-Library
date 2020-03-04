/* eslint-disable complexity */
/* eslint-disable max-params */

import { getSheet } from './getSheet';
// import { letterToColumn } from './letterToColumn';
import { columnToLetter } from './columnToLetter';

/**
 * Wkleja przekazaną tablicę danych (2D) w określone miejsce przekazanego
 * arkusza. Jako sheet przyjmuje zarówno string (wtedy pobiera arkusz
 * z bieżącego pliku - bound). Przy przekazaniu sheet jako object
 * pochodzenie pliku już nie ma znaczenia
 * @memberof Lib_Gas
 *
 * @param {string|object} sheet Nazwa arkusza lub obiekt arkusza
 * @param {string} col Lewa kolumna zakresu - string np. 'A'
 * @param {number} row Wiersz lewego górnego zakresu do wklejenia
 * @param {arrow[][]} arr Tablica 2D z danymi
 */
const opts = {
	fileId: 'fdfdssf',
	clearContent: 1, // before
	removeFilers: 0, // before
	sortCol: { col: 'A', order: 'asc' }, // before
	sortOrder: 1,
	removeEmptyRowsAndCols: 1, // after
};

/**
 * Trzy możliwe opcje userRange (przykładowy zakres arkusza A:D20)
 * 'A' - zakres zaczyna się od ostatniego pustego wiersza kolumny A,
 * kończy się na ostatniej kolumnie. Np. A3:D
 * '1' - zakres zaczyna się od ostatniej pustej kolumny wiersza 1,
 * kończy się na ostatnim wierszu. Np. C1:D
 * 'A1' - zakres zaczyna się w A1, kończy na ostatnim wierszu i kolumnie
 * Np. A1:D20
 *
 * @param {*} sheetObj
 * @param {*} userRange
 */

const getRange = (sheetObj, userRange) => {
	const maxCol = sheetObj.getDataRange().getLastColumn();
	const lastRow = sheetObj.getDataRange().getLastRow();
	// Opcja 1
	const opt1 = /[A-Z]|[A-Z][A-Z]/;
	const opt2 = /[1-9]+/;
	if (opt1.test(userRange)) {
		return `${userRange}${lastRow + 1}:${columnToLetter(maxCol)}`;
	}
	if (opt2.test(userRange)) {
	}
};

const checkTypes = (arr, str) => {
	if (!Array.isArray(arr))
		throw new Error('Not valid type was paste as "data" into "paste"');
	if (!Array.isArray(arr[0]))
		throw new Error('Only 2D arrays are alowed to "paste"');
	if (typeof str !== 'string')
		throw new Error('Range should be string in "paste"');
};

const newPaste = (
	sheet,
	range,
	data,
	opt = {
		fileId: null, // DONE
		clearContent: null, // before
		removeFilers: 1, // before
		sortCol: { col: null, order: 'asc' }, // before
		removeEmptyRowsAndCols: 1,
	}
) => {
	checkTypes(data, range);
	/* eslint-disable */
	const sheetObj =
	typeof sheet === 'object'
			? sheet
			: typeof opt.fileId === 'string'
				? getSheet(sheet, opt.fileId)
				: getSheet(sheet);
				/* eslint-enable */



	if (data.length === 0) return sheetObj;
};

const paste = (sheet, col, row, arr) => {
	if (arr.length > 0) {
		const colNumber = letterToColumn(col);
		const sheetObj =
			typeof sheet === 'object' ? sheet : getSheet(sheet);
		const range = sheetObj.getRange(
			row,
			colNumber,
			arr.length,
			arr[0].length
		);
		range.setValues(arr);
		return true;
	}
	const fileName = sheet.getParent().getName();
	SpreadsheetApp.getActive().toast(`Pusty plik: ${fileName}`);
};

export { paste };

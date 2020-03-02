/* eslint-disable max-params */
import { getSheet } from './getSheet';
import { letterToColumn } from './letterToColumn';

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

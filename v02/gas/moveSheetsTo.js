/* eslint-disable max-params */
import { getSpreadsheet } from './getSpreadsheet';

/**
 * @typedef {GoogleAppsScript.Spreadsheet.Spreadsheet} Spreadsheet
 * @typedef {GoogleAppsScript.Spreadsheet.Sheet} Sheet
 */

/**
 * Funkcja przekazywana do metody filter() aplikowanej na Sheet[].
 * @callback filterCallback
 * @param {Sheet} Sheet Arkusz
 * @param {number} [i] Index
 * @param {array} [array] Tablica arkuszy
 * @return {boolean}
 */

/**
 * Przenosi arkusze które pasują do przekazanego callbacku z jednego
 * arkusza do drugiego. Nazwy pozostają takie same, chyba że już istnieje
 * taki arkusz - wtedy dokleja info 'Copy'. Jeśli arkusze były uktyte w
 * źródłowym pliku w nowym zostaną 'odkryte'
 *
 * @param {string|Spreadsheet} source Obiekt, id lub url
 * @param {string|Spreadsheet} target Obiekt, id lub url
 * @param {filterCallback} callback Funkcja zwracająca boolean
 * @example copySheetsToOther('xxxxxx', 'xxxxxxx', sheet => sheet.getName().includes('abc'))
 * @returns {Spreadsheet} Skoroszyt do którego zostały skopiowane arkusze
 */

const moveSheetsTo = (source, target, callback) => {
	const dest = getSpreadsheet(target);
	const existing = dest.getSheets().map(sheet => sheet.getName());

	const getName = sheet => {
		const name = sheet.getName();
		return existing.includes(name) ? `Copy ${name}` : name;
	};

	getSpreadsheet(source)
		.getSheets()
		.filter(callback)
		.forEach(sheet => {
			sheet
				.copyTo(dest)
				.setName(getName(sheet))
				.showSheet();

			// @ts-ignore
			source.deleteSheet(sheet);
		});

	return dest;
};

export { moveSheetsTo };

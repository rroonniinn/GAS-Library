// @ts-nocheck
/* eslint-disable max-params */
import { pipe } from '../fp/pipe';

/**
 * Kopiuje arkusze które pasują do przekazanego callbacku z jednego
 * arkusza do drugiego. Nazwy pozostają takie same, chyba że już istnieje
 * taki arkusz - wtedy dokleja info 'Copy'. Jeśli arkusze były uktyte w
 * źródłowym pliku w nowym zostaną 'odkryte'
 *
 * @param {string} sourceId Id pliku źródłowego
 * @param {string} targetId Id pliku docelowego
 * @param {Function} callback np. sheet => sheet.getName().includes('res')
 * @returns {GoogleAppsScript.Spreadsheet.Spreadsheet} Plik do którego
 * zostały skopiowane arkusze

 */

const copySheetsToOther = (sourceId, targetId, callback) => {
	const targetSpreadsheet = SpreadsheetApp.openById(targetId);
	const existing = targetSpreadsheet
		.getSheets()
		.map(sheet => sheet.getName());

	const setName = sheet => {
		const orgName = sheet.getName();
		return existing.includes(orgName) ? `Copy ${orgName}` : orgName;
	};

	pipe(
		() =>
			SpreadsheetApp.openById(sourceId)
				.getSheets()
				.filter(callback),
		arr =>
			arr.forEach(sheet =>
				sheet
					.copyTo(targetSpreadsheet)
					.setName(setName(sheet))
					.showSheet()
			)
	)();

	return targetSpreadsheet;
};

export { copySheetsToOther };

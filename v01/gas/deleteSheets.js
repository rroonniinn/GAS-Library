/**
 * Funkcja przyjmująca jako argument arkusz
 * @callback filterCallback
 * @param {GoogleAppsScript.Spreadsheet.Sheet} Sheet
 */

/**
 * Usuwa arkusze, które zwracają wartość true z przekazanego callbacku
 *
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} spreadsheet
 * @param {filterCallback} callback Funkcja na podstawie której wybierane są
 * arkusze do usunięcia np. sheet => samples.getName() === 'Jakaś nazwa'
 * @returns
 */
const deleteSheets = (spreadsheet, callback) => {
	spreadsheet
		.getSheets()
		.filter(callback)
		.forEach(sheet => sheet.getParent().deleteSheet(sheet));

	return spreadsheet;
};
export { deleteSheets };

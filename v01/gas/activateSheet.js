/**
 * Aktywuje arkusza o przekazanej nazwie.
 * Tym samy przełącza na niego interfejs
 * @param {string} sheetName
 * @returns {GoogleAppsScript.Spreadsheet.Sheet}
 */

export const activateSheet = sheetName =>
	SpreadsheetApp.getActive()
		.getSheetByName(sheetName)
		.activate();

/* TODO: Możliwość przekazania Sheeta dorobić */

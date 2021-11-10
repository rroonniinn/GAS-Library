/**
 * Zwraca zakres zaznaczonej komórki w arkuszu.
 * @returns {GoogleAppsScript.Spreadsheet.Range}
 */

export const getCurrentCell = () =>
	SpreadsheetApp.getActiveSheet().getCurrentCell();

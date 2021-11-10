/**
 * Zwraca zawartość aktualnie zaznaczonej komórki w arkuszu.
 * @returns {*}
 */

export const getCurrentCellVal = () =>
	SpreadsheetApp.getActiveSheet()
		.getCurrentCell()
		.getValue();

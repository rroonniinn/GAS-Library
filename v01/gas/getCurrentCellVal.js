/**
 * Zwraca zawartość aktualnie zaznaczonej komórki w arkuszu.
 * @returns {*}
 */

const getCurrentCellVal = () =>
	SpreadsheetApp.getActiveSheet()
		.getCurrentCell()
		.getValue();

export { getCurrentCellVal };

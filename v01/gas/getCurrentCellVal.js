/**
 * Zwraca zawartość aktualnie zaznaczonej komórki w arkuszu.
 * @returns {string}
 */

const getCurrentCellVal = () =>
	SpreadsheetApp.getActiveSheet()
		.getCurrentCell()
		.getValue();

export { getCurrentCellVal };

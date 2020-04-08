/**
 * Ustawia wskazaną liczbę wierszy w arkuszu bez względu na znajdujące
 * się w nim dane. Zwraca arkusz
 *
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet Arkusz
 * @param {number} quant Docelowa liczba wierszy
 */

const adjustRows = (sheet, quant) => {
	const rows = sheet.getMaxRows();
	if (rows > quant) {
		sheet.deleteRows(quant + 1, rows - quant);
	} else if (rows < quant) {
		sheet.insertRowsAfter(rows, quant - rows);
	}
};

export { adjustRows };

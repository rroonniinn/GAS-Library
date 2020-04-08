/**
 * Ustawia wskazaną liczbę kolumn w arkuszu bez względu na znajdujące
 * się w nim dane. Zwraca arkusz
 *
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet Arkusz
 * @param {number} quant Docelowa liczba kolumn
 */
const adjustColumns = (sheet, quant) => {
	const columns = sheet.getMaxColumns();
	if (columns > quant) {
		sheet.deleteColumns(quant + 1, columns - quant);
	} else if (columns < quant) {
		sheet.insertColumnsAfter(columns, quant - columns);
	}
	return sheet;
};

export { adjustColumns };

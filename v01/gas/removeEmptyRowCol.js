/* eslint-disable complexity */
/* eslint-disable no-throw-literal */

/**
 * Usuwa zbędne kolumny i wiersze ze wskazanego arkusza
 *
 * @memberof Lib_Gas
 *
 * @param {object} sheet Obiekt arkusza
 * @returns {void}
 */

const removeEmptyRowCol = sheet => {
	const frozenRows = sheet.getFrozenRows();
	const maxDataRow = sheet.getLastRow();
	const maxTotalRow = sheet.getMaxRows();
	const rowDif = maxTotalRow - maxDataRow;

	const frozenCols = sheet.getFrozenColumns();
	const maxDataColumn = sheet.getLastColumn();
	const maxTotalColumn = sheet.getMaxColumns();
	const colDif = maxTotalColumn - maxDataColumn;

	try {
		if (
			rowDif + frozenRows !== maxTotalRow &&
			maxDataRow !== 0 &&
			rowDif > 0
		)
			sheet.deleteRows(maxDataRow + 1, rowDif);
		if (
			colDif + frozenCols !== maxTotalColumn &&
			maxDataColumn !== 0 &&
			colDif > 0
		)
			sheet.deleteColumns(maxDataColumn + 1, colDif);
	} catch (error) {
		throw new Error(error);
	}
};
export { removeEmptyRowCol };

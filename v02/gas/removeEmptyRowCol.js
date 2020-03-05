/* eslint-disable complexity */

/**
 * Usuwa zbędne kolumny i wiersze ze wskazanego arkusza
 *
 * @memberof Lib_Gas
 *
 * @param {object} sheetObj Obiekt arkusza
 * @returns {void}
 */

const removeEmptyRowCol = sheetObj => {
	const frozenRows = sheetObj.getFrozenRows();
	const maxDataRow = sheetObj.getLastRow();
	const maxTotalRow = sheetObj.getMaxRows();
	const rowDif = maxTotalRow - maxDataRow;

	const frozenCols = sheetObj.getFrozenColumns();
	const maxDataColumn = sheetObj.getLastColumn();
	const maxTotalColumn = sheetObj.getMaxColumns();
	const colDif = maxTotalColumn - maxDataColumn;

	try {
		if (
			rowDif + frozenRows !== maxTotalRow &&
			maxDataRow !== 0 &&
			rowDif > 0
		)
			sheetObj.deleteRows(maxDataRow + 1, rowDif);
		if (
			colDif + frozenCols !== maxTotalColumn &&
			maxDataColumn !== 0 &&
			colDif > 0
		)
			sheetObj.deleteColumns(maxDataColumn + 1, colDif);
	} catch (error) {
		throw new Error(error);
	}
};
export { removeEmptyRowCol };

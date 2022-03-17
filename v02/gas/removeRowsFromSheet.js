/* eslint-disable max-params */
import { getSheet } from './getSheet';

/**
 * Usuwa wiersze ze wskazanego arkusza
 * @param {Number} frozenRows Liczba "zablokowanych" wierszy nagłówka (nie usuwa ich).
 * @param {Number} deleteFrom Wiersz od którego usuwa dane
 * @param {Number} howManyStays Liczba wierszy które mają zostać "od dołu"
 * @param {*} sheetNameOb Nazwa arkusza lub obiekt arkusza
 * @param {string} [fileId] ID pliku - jeśli nie podane, szuka arkusza w bieżącym pliku
 */
const removeRowsFromSheet = (
	frozenRows,
	deleteFrom,
	howManyStays,
	sheetNameOb,
	fileId
) => {
	const sheet = getSheet(sheetNameOb, fileId);
	const maxRow = sheet.getMaxRows();
	const deleteHowMany = maxRow - frozenRows - howManyStays;

	if (deleteHowMany > 0) {
		sheet.deleteRows(deleteFrom, deleteHowMany);
	}
};

export { removeRowsFromSheet };

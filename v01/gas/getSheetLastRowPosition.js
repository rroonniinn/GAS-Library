import { getSheet } from './getSheet';

/**
 * Zwracaj pozycję ostatniego wiersza z danymi we wskazanym arkuszu oraz sam obiekt arkusza do dalszych manipulacji
 * Jeśli drugi parametr nie jest podany - pobiera arkusz z bieżącego pliku (bound)
 *
 * @memberof Lib_Gas
 *
 * @param {string} sheetName Nazwa arkusza
 * @param {string} [fileId] Id pliku
 * @returns {Object} Obiekt o dwóch kluczach (lastRow, oraz sheet będący obiketem arkusza)
 */

const getSheetLastRowPosition = (sheetName, fileId) => {
	const sheet = getSheet(sheetName, fileId);
	const lastRow = sheet.getDataRange().getLastRow();
	return {
		lastRow,
		sheet,
	};
};

export { getSheetLastRowPosition };

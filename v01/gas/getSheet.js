/**
 * Zwraca sheetObject arkusza o podanej nazwie.
 * Jeśli drugi parametr nie jest podany - pobiera arkusz
 * z bieżącego pliku (bound)
 *
 * @memberof Lib_Gas
 *
 * @param {string} sheetName Nazwa arkusza
 * @param {string} [fileId] Id pliku
 * @returns {object} Obiekt arkusza
 */

const getSheet = (sheetName, fileId) => {
	if (fileId)
		return SpreadsheetApp.openById(fileId).getSheetByName(sheetName);
	return SpreadsheetApp.getActive().getSheetByName(sheetName);
};

/**
 * Zcurrowana wersja
 * Zwraca sheetObject arkusza o podanej nazwie.
 * Jeśli drugi parametr nie jest podany -
 * pobiera arkusz z bieżącego pliku (bound)
 *
 * @memberof Lib_Gas
 *
 * @param {string} sheetName Nazwa arkusza
 * @param {string} [fileId] Id pliku
 * @returns {object} Obiekt arkusza
 */

const getSheetFp = (sheetName, fileId) => () =>
	getSheet(sheetName, fileId);

export { getSheet, getSheetFp };

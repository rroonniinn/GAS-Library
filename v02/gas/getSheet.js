/**
 * Zwraca sheetObject arkusza o podanej nazwie.
 * Jeśli drugi parametr nie jest podany - pobiera arkusz
 * z bieżącego pliku (bound)
 *
 * @memberof Lib_Gas
 *
 * @param {string} sheetName Nazwa arkusza
 * @param {string} [fileId] Id pliku
 * @returns {Object} Obiekt arkusza
 */

const getSheet = (sheetName, fileId = null) => {
	if (fileId)
		return SpreadsheetApp.openById(fileId).getSheetByName(sheetName);
	return SpreadsheetApp.getActive().getSheetByName(sheetName);
};

export { getSheet };

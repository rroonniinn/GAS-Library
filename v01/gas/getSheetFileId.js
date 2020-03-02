/**
 * Zwraca Id pliku do którego należy przekazany obiekt arkusza
 *
 * @param {object} sheetObj Object arkusza
 * @returns {string} Id pliku
 */

const getSheetFileId = sheetObj => sheetObj.getParent().getId();

export { getSheetFileId };

/**
 * Zwraca nazwę pliku do którego należy przekazany obiekt arkusza
 *
 * @param {object} sheetObj Object arkusza
 * @returns {string} Nazwa pliku do którego należy arkusz
 */

const getSheetFileName = sheetObj => sheetObj.getParent().getName();

export { getSheetFileName };

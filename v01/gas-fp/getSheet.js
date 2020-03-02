import { getSheet as getSheetS } from '../gas/getSheet';
/**
 * Zcurrowana wersja
 * Zwraca sheetObject arkusza o podanej nazwie.
 * Jeśli drugi parametr nie jest podany - pobiera arkusz z bieżącego pliku (bound)
 *
 * @memberof Lib_Gas
 *
 * @param {string} sheetName Nazwa arkusza
 * @param {string} [fileId] Id pliku
 * @returns {object} Obiekt arkusza
 */

export const getSheet = (sheetName, fileId) => () => getSheetS(sheetName, fileId);

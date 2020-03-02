/**
 * Zwraca nazwę pliku na podstawie przekaznego Id pliku
 *
 * @param {string} fileId Id pliku
 * @returns {string} Nazwa pliku
 */

const getFileNameFromId = fileId => DriveApp.getFileById(fileId).getName();

export { getFileNameFromId };

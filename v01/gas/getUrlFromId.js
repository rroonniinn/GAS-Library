/**
 * Zwraca adres URL pliku na podstawie przekaznego Id pliku
 *
 * @param {string} fileId Id pliku
 * @returns {string} Url pliku
 */

const getUrlFromId = fileId => DriveApp.getFileById(fileId).getUrl();

export { getUrlFromId };

/**
 * Pobiera treść przekazanego pliku csv zwracając tablicę 2d
 * @param {GoogleAppsScript.Drive.File} file Plik csv
 * @param {string} charset Kodowanie znaków w csv (np. 'utf-8')
 * @param {string} delimiter Separator użyty w csv (np. ';')
 * @returns {array[]} Tablica 2d
 */
const cvsToArr = (file, charset, delimiter) =>
	Utilities.parseCsv(file.getBlob().getDataAsString(charset), delimiter);

export { cvsToArr };

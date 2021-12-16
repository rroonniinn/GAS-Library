/**
 * Zapisuje w głównym folderze Drive plik txt o podanej nazwie i zawartości
 * @param {string} fileName
 * @param {string} txtContent
 */

export const createTxtFile = (fileName, txtContent) =>
	DriveApp.createFile(fileName, txtContent);

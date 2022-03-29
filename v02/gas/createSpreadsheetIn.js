import { addFileToFolder } from './addFileToFolder';

/**
 * Tworzy nowy Skoroszyt o określonej nazwie we wskazanym folderze.
 * Zwraca tenże Skoroszyt
 *
 * @param {GoogleAppsScript.Drive.Folder|string} parent Folder, ID lub Url katalogu w którym ma być utworzony plik
 * @param {string} newFileName Nazwa pliku
 * @returns {GoogleAppsScript.Spreadsheet.Spreadsheet} Spreadsheet
 */

const createSpreadsheetIn = (parent, newFileName) => {
	const newSpreadsheet = SpreadsheetApp.create(newFileName);
	const newFileId = newSpreadsheet.getId();
	newSpreadsheet.setSpreadsheetLocale('pl');

	addFileToFolder(parent, newFileId);
	// DriveApp.removeFile(DriveApp.getFileById(newFileId));
	return newSpreadsheet;
};

export { createSpreadsheetIn };

// Uwaga w ver1 jest analogiczna funkcja, ale zwracająca ID

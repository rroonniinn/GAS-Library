import { addFileToFolder } from './addFileToFolder';

/**
 * Tworzy nowy plik o określonej nazwie we wskazanym folderze.
 * Zwraca id nowo utworzonego pliku
 *
 * @memberof Lib_Gas
 *
 * @param {string} parentFolderId ID katalogu w którym ma być utworzony nowy plik
 * @param {string} newFileName Nazwa pliku
 * @returns {string} ID nowo utworzonego pliku
 */

const createSpreadsheetFileIn = (parentFolderId, newFileName) => {
	const newSpreadsheet = SpreadsheetApp.create(newFileName);
	const newFileId = newSpreadsheet.getId();
	newSpreadsheet.setSpreadsheetLocale('pl');

	addFileToFolder(parentFolderId, newFileId);
	// DriveApp.removeFile(DriveApp.getFileById(newFileId));
	return newFileId;
};

export { createSpreadsheetFileIn };

// To raczej powinno zwracać Spreadsheeta a nie jego id. Samo id jest łatwo
// z tego pobrać....

/**
 * Tworzy nowy subfolder o określonej nazwie we wskazanym folderze.
 * Zwraca id nowo utworzonego subfolderu
 * @memberof Lib_Gas
 * @param {string} parentFolderId ID katalogu w którym ma być utworzony subfolder
 * @param {string} newFolderName Nazwa subfolderu
 * @returns {string} ID nowo utworzonego folderu
 */

const createFolder = (parentFolderId, newFolderName) =>
	DriveApp.getFolderById(parentFolderId)
		.createFolder(newFolderName)
		.getId();

export { createFolder };

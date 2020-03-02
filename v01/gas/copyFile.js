/* eslint-disable max-params */

/**
 * Kopiuje wkazany plik (ID) do wskazanego folderu jednocześnie zmienijąc mu nazwę.
 * Zwraca id nowo utworzonego pliku
 *
 * @memberof Lib_Gas
 *
 * @param {string} parentFolderId ID katalogu w którym ma być utworzony subfolder
 * @param {string} newFileName Nazwa pliku
 * @returns {string} ID nowo utworzonego pliku
 */

const copyFile = (parentFolderId, newFileName, originFileId) => {
	const oryginal = DriveApp.getFileById(originFileId);
	const dest = DriveApp.getFolderById(parentFolderId);
	const newFile = oryginal.makeCopy(newFileName, dest);
	return newFile.getId();
};

export { copyFile };

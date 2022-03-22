/* eslint-disable max-params */

/**
 * Kopiuje wskazany plik (ID) do wskazanego folderu jednocześnie zmieniając mu nazwę.
 * Zwraca id nowo utworzonego pliku
 *
 * @memberof Lib_Gas
 *
 * @param {string} targetFolderId ID katalogu do którego ma być skopiowany plik
 * @param {string} newFileName Nazwa pliku
 * @returns {string} ID nowo utworzonego pliku
 */

const copyFile = (targetFolderId, newFileName, originFileId) => {
	const oryginal = DriveApp.getFileById(originFileId);
	const dest = DriveApp.getFolderById(targetFolderId);
	const newFile = oryginal.makeCopy(newFileName, dest);
	return newFile.getId();
};

export { copyFile };

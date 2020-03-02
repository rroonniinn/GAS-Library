/**
 * Usuwa plik z głownego katalogu Drive (plik może nadal znajodwać
 * się w innych katalogach)
 *
 * @memberof Lib_Gas
 *
 * @param {string} fileId ID pliku do usunięcia
 * @returns {Object} Folder Root
 */

const removeFileFromRoot = fileId =>
	DriveApp.removeFile(DriveApp.getFileById(fileId));
export { removeFileFromRoot };

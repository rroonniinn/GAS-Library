/**
 * FUNKCJA USUNIĘTA PRZEZ GOOGLA! NIE UŻYWAĆ
 * Usuwa plik z głównego katalogu Drive (plik może nadal znajdować
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

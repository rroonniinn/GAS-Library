/**
 * Usuwa plik z katalogu (plik może nadal znajodwać
 * się w innych katalogach)
 *
 * @memberof Lib_Gas
 *
 * @param {string} folderId ID katalogu z którego ma być usunięty plik
 * @param {string} fileId ID pliku do usunięcia
 * @returns {void} Tylko side effect
 */

const removeFileFromFolder = (folderId, fileId) => {
	DriveApp.getFolderById(folderId).removeFile(
		DriveApp.getFileById(fileId)
	);
};
export { removeFileFromFolder };

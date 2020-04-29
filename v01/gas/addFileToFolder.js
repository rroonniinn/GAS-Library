/**
 * Dodaje plik do katalogu (plik może znajdować się w wielu katalogach)
 * @memberof Lib_Gas
 * @param {string} folderId ID katalogu do którego ma być dodany plik
 * @param {string} fileId ID pliku do dodania
 * @returns {void} Tylko side effect +
 */

const addFileToFolder = (folderId, fileId) => {
	DriveApp.getFolderById(folderId).addFile(DriveApp.getFileById(fileId));
};

export { addFileToFolder };

//  W lib 2 znajduje się lepsza wersja

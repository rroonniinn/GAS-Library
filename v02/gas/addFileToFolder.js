import { getFolder } from './getFolder';

/**
 * Dodaje plik do katalogu (plik może znajdować się w wielu katalogach)
 * @memberof Lib_Gas
 * @param {GoogleAppsScript.Drive.Folder|string} folder Folder, ID lub Url katalogu do którego ma być dodany plik
 * @param {string} fileId ID pliku do dodania
 * @returns {void} Tylko side effect
 */

const addFileToFolder = (folder, fileId) => {
	getFolder(folder).addFile(DriveApp.getFileById(fileId));
};

export { addFileToFolder };

//  W lib 1 znajduje się gorsza wersja

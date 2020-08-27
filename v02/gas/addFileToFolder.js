import { getFolder } from './getFolder';
import { getFile } from './getFile';

/**
 * Dodaje plik do katalogu (plik może znajdować się w wielu katalogach)
 * @param {GoogleAppsScript.Drive.Folder|string} folder Folder, ID lub Url katalogu do którego ma być dodany plik
 * @param {GoogleAppsScript.Drive.File|string} file File, URL lub ID
 * @returns {GoogleAppsScript.Drive.Folder} Folder do którego był dodany plik
 */

const addFileToFolder = (folder, file) =>
	getFolder(folder).addFile(getFile(file));

export { addFileToFolder };

//  W lib 1 znajduje się gorsza wersja

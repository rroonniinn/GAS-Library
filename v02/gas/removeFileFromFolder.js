import { getFolder } from './getFolder';
import { getFile } from './getFile';

/**
 * Usuwa plik z katalogu (plik może nadal znajdować
 * się w innych katalogach)
 * @param {string|GoogleAppsScript.Drive.Folder} folder ID, URL lub Folder katalogu z którego ma być usunięty plik
 * @param {string|GoogleAppsScript.Drive.File} file ID, URL lub File pliku do usunięcia
 * @returns {GoogleAppsScript.Drive.Folder} Folder z którego usunięto plik
 */

const removeFileFromFolder = (folder, file) =>
	getFolder(folder).removeFile(getFile(file));

export { removeFileFromFolder };

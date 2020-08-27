import { getFile } from './getFile';

/**
 * Usuwa plik z głównego katalogu Drive (plik może nadal znajdować
 * się w innych katalogach)
 * @param {GoogleAppsScript.Drive.Folder|string} file Url, ID lub File pliku do usunięcia
 * @returns {GoogleAppsScript.Drive.Folder} Folder Root
 */

const removeFileFromRoot = file => DriveApp.removeFile(getFile(file));
export { removeFileFromRoot };

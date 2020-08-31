import { getFolder } from './getFolder';

/**
 * Tworzy nowy subfolder o określonej nazwie we wskazanym folderze.
 * Zwraca id nowo utworzonego subfolderu
 * @param {GoogleAppsScript.Drive.Folder|string} parent Folder, ID lub Url katalogu w którym ma być utworzony nowy
 * @param {string} name Nazwa subfolderu
 * @returns {GoogleAppsScript.Drive.Folder} Nowo utworzony Folder
 */

const createFolder = (parent, name) =>
	getFolder(parent).createFolder(name);

export { createFolder };

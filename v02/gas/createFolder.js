import { getFolder } from './getFolder';

/**
 * Tworzy nowy subfolder o określonej nazwie we wskazanym folderze.
 * Zwraca id nowo utworzonego subfolderu
 * @memberof Lib_Gas
 * @param {GoogleAppsScript.Drive.Folder|string} parent Foler, ID lub Url katalogu w którym ma być utworzony nowy
 * @param {string} name Nazwa subfolderu
 * @returns {GoogleAppsScript.Drive.Folder} Nowo utworzony Folder
 */

const createFolder = (parent, name) =>
	getFolder(parent).createFolder(name);

export { createFolder };

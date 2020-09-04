/* eslint-disable max-params */
import { getFile } from './getFile';
import { getFolder } from './getFolder';

/**
 * Kopiuje wskazany plik (ID) do wskazanego folderu jednocześnie zmieniając
 * mu nazwę. Zwraca nowo utworzony plik
 * @param {GoogleAppsScript.Drive.File|string} source Obiekt File, ID lub url pliku kopiowanego
 * @param {string} name Nazwa pliku po skopiowaniu
 * @param {GoogleAppsScript.Drive.Folder|string} toFolder Obiekt Folder, ID lub URL katalogu do którego ma być skopiowany plik
 * @returns {GoogleAppsScript.Drive.File} Obiekt File
 */

const copyFile = (source, name, toFolder) =>
	getFile(source).makeCopy(name, getFolder(toFolder));

export { copyFile };

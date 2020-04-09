/* eslint-disable max-params */
import { getHandyFile } from './getHandyFile';
import { getHandyFolder } from './getHandyFolder';

/**
 * Kopiuje wkazany plik (ID) do wskazanego folderu jednocześnie zmienijąc
 * mu nazwę. Zwraca id nowo utworzonego pliku
 * @param {GoogleAppsScript.Drive.File|string} source Obiekt File, ID lub url pliku kopiowanego
 * @param {GoogleAppsScript.Drive.Folder|string} toFolder Obiekt Folder, ID lub URL katalogu do którego ma być skopiowany plik
 * @param {string} name Nazwa pliku po skopiowaniu
 * @returns {GoogleAppsScript.Drive.File} Obiekt File
 */

const copyFile = (source, name, toFolder) =>
	getHandyFile(source).makeCopy(name, getHandyFolder(toFolder));

export { copyFile };

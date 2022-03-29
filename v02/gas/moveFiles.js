/* eslint-disable no-unused-expressions */
/* eslint-disable max-params */
import { addFileToFolder } from './addFileToFolder';

/**
 * Przenosi pliki do wskazanego folderu (usuwając z folderu
 * w którym się właśnie znajdują)
 *
 * @param {GoogleAppsScript.Drive.File[]|string[]} files Tablica plików - mogą być to URL, ID lub File
 * @param {GoogleAppsScript.Drive.Folder|string} targetFolder Folder, ID lub Url katalogu do którego ma być dodany plik
 * @param {GoogleAppsScript.Drive.Folder|string} [existingFolder] ID, Url lub Folder obecnego folderu. Jeśli nie podane
 * zakłada, że plik należy przenieść z roota
 * @returns {GoogleAppsScript.Drive.File[]|string[]} Zwraca otrzymaną tablicę
 */
const moveFiles = (files, targetFolder, existingFolder = null) => {
	files.forEach(file => {
		addFileToFolder(targetFolder, file);

		// existingFolder
		// 	? removeFileFromFolder(existingFolder, file)
		// 	: removeFileFromRoot(file);
	});

	return files;
};

export { moveFiles };

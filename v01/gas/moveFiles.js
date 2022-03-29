/* eslint-disable max-params */
import { addFileToFolder } from './addFileToFolder';
import { removeFileFromFolder } from './removeFileFromFolder';
import { removeFileFromRoot } from './removeFileFromRoot';

/**
 * Przenosi pliki do wskazanego folderu (usuwając z folderu
 * w którym się właśnie znajdują)
 *
 * @param {GoogleAppsScript.Drive.File[]} files Tablica plików
 * @param {string} targetFolderId Id docelowego folderu
 * @param {string} [existingFolderId] Id obecnego folderu. Jeśli nie podane
 * zakłada, że plik należy przenieść z roota
 * @returns {Array} Zwraca otrzymaną tablicę plików
 */
const moveFiles = (files, targetFolderId, existingFolderId = null) => {
	// Przeniesienie plików do folderu
	files.forEach(file => {
		const fileId = file.getId();
		addFileToFolder(targetFolderId, fileId);

		// if (existingFolderId) {
		// 	removeFileFromFolder(existingFolderId, fileId);
		// } else {
		// 	removeFileFromRoot(fileId);
		// }
	});

	return files;
};

export { moveFiles };

// TODO - powinien przyjmowac równiex id plików oraz url folderu docelowego

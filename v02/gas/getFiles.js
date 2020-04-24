import { getFolder } from './getFolder';

/**
 * Zwraca tablicę plików znajdujących się ze wskazanym folderze
 * @param {string|GoogleAppsScript.Drive.Folder} folder ID, URL lub Folder
 * @param {string} [search] Opcjonalne Querry do wyszukiwania plików
 * np. <tt>'title contains "__MACOSX"'</tt>.
 * Jeśli jest przekazany to funkcja
 * zwraca tylko pliki spełniające warunek zawarty w querry.
 * Jeśli brak, to funkcja zwraca wszystkie pliki z katalogu.
 * @returns {array} Tablica plików
 */
const getFiles = (folder, search) => {
	const rootFolder = getFolder(folder);

	const files = !search
		? rootFolder.getFiles()
		: rootFolder.searchFiles(search);
	const arr = [];

	while (files.hasNext()) {
		arr.push(files.next());
	}

	return arr;
};
export { getFiles };
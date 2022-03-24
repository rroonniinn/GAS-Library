import { getFolder } from './getFolder';

/**
 * Zwraca tablicę folderów znajdujących się ze wskazanym folderze
 * @param {string|GoogleAppsScript.Drive.Folder} folder ID, URL lub Folder
 * @param {string} [search] Opcjonalne Query do wyszukiwania plików
 * np. <tt>'title contains "__MACOSX"'</tt>. Dokumentacja do query
 * znajduje się tu: https://developers.google.com/drive/api/v2/ref-search-terms
 * Jeśli jest przekazany to funkcja
 * zwraca tylko pliki spełniające warunek zawarty w query.
 * Jeśli brak, to funkcja zwraca wszystkie pliki z katalogu.
 * @returns {GoogleAppsScript.Drive.Folder[]} Tablica folderów
 */

export const getFolders = (folder, search) => {
	const rootFolder = getFolder(folder);

	const files = !search
		? rootFolder.getFolders()
		: rootFolder.searchFolders(search);
	const arr = [];

	while (files.hasNext()) {
		arr.push(files.next());
	}

	return arr;
};

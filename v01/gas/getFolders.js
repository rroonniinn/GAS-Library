/**
 * Zwraca tablicę folderów znajdujących się ze wskazanym folderze
 *
 * @memberof Lib_Gas
 *
 * @param {string} id ID folderu
 * @param {string} [search] Querry do wyszukiwania folderów
 * np. <tt>'title contains "Work"'</tt>. Jeśli jest przekazany to funkcja
 * zwraca tylko foldery spełniające warunek zawarty w querry.
 * Jeśli brak, to funkcja zwraca wszystkie foldery.
 * @returns {array} Tablica folderów
 */
const getFolders = (id, search) => {
	const rootFolder = DriveApp.getFolderById(id);
	const folders = !search
		? rootFolder.getFolders()
		: rootFolder.searchFolders(search);
	const arr = [];

	while (folders.hasNext()) {
		arr.push(folders.next());
	}

	return arr;
};
export { getFolders };

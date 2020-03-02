/**
 * Zwraca tablicę plików znajdujących się ze wskazanym folderze
 *
 * @memberof Lib_Gas
 *
 * @param {string} id ID folderu
 * @param {string} [search] Opcjonalne Querry do wyszukiwania plików
 * np. <tt>'title contains "__MACOSX"'</tt>.
 * Jeśli jest przekazany to funkcja
 * zwraca tylko pliki spełniające warunek zawarty w querry.
 * Jeśli brak, to funkcja zwraca wszystkie pliki z katalogu.
 * @returns {array} Tablica plików
 */
const getFiles = (id, search) => {
	const rootFolder = DriveApp.getFolderById(id);
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

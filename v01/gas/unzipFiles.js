import { getFiles } from './getFiles';
import { moveFilesToTrash } from './moveFilesToTrash';

/**
 * Odzipowuje pliki zip we wskazanym katalogu (jeśli zipów brak to nic nie robi)
 * Przymuje id katalogu w którym ma działać.
 * Nic nie zwraca
 *
 * @memberof Lib_Gas
 * @requires Helpers
 *
 * @param {string} folderId ID katalogu w którym znajują się pliki (odzipowane będą bezpośrednio do niego)
 * @return {void} Tylko side effect
 */

const unzipFiles = folderId => {
	const zipedFiles = getFiles(folderId, 'mimeType = "application/zip"');

	if (zipedFiles[0]) {
		// Tablica 2D rozzipowanych plików (tablica na plik)
		const unzipedCollection = zipedFiles.map(file => {
			const fileBlob = file
				.getBlob()
				.setContentType('application/zip');
			return Utilities.unzip(fileBlob);
		});
		// Tablica pojedyńczych plików
		const singles = unzipedCollection.reduce((first, coll) =>
			first.concat(coll)
		);

		// Utworzenie indywidualnych plików na Drive
		singles.forEach(unzipedFile => {
			// Od razu usuwamy pozostałości po odzipowaniu z maca
			if (!/__MACOSX/.test(unzipedFile.getName())) {
				DriveApp.getFolderById(folderId).createFile(unzipedFile);
			}
		});
		// Usunęcie plików zipów
		const zippedIds = zipedFiles.map(file => file.getId());
		moveFilesToTrash(zippedIds);
	}
};
export { unzipFiles };

/**
 * FIXME - jeślli w zipie znajdują się katalogi to je rozwala - poprawić
 */

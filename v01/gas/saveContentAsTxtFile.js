/* eslint-disable max-params */
import { addFileToFolder } from './addFileToFolder';
/**
 * Tworzy we wskazanym katalogu plik tekstowy traktując przekazany string jako treść
 *
 * @param {string} fileName Nazwa nowo tworzonego pliku
 * @param {string} folder ID folderu w którym ma być umieszczony plik
 * @param {string} content Zawartość pliku
 */
const saveContentAsTxtFile = (fileName, folder, content) => {
	const file = DriveApp.createFile(
		fileName,
		content,
		// @ts-ignore
		MimeType.PLAIN_TEXT
	);
	addFileToFolder(folder, file.getId());
	// DriveApp.removeFile(file); // usuwa z Drive-a
};

export { saveContentAsTxtFile };

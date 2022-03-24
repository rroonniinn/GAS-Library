import { pipe } from '../../v02/fp/pipe';
import { moveFiles } from '../../v02/gas/moveFiles';

/**
 * Zapisuje przekazany obiekt jako json w przekazanym folderze
 * @param {*} ob Obiekt do zapisania jako json
 * @param {string} fileName Nazwa pliku po zapisaniu
 * @param {GoogleAppsScript.Drive.Folder} folder Folder w którym ma być zapisany
 * @returns {GoogleAppsScript.Drive.Folder[]}
 */

export const saveObjectAsJsonToDrive = (ob, fileName, folder) => {
	const fullFileName = `${fileName}.json`;
	// @ts-ignore
	const type = MimeType.PLAIN_TEXT;

	return pipe(
		() => JSON.stringify(ob),
		str => DriveApp.createFile(fullFileName, str, type),
		file => moveFiles([file], folder)
	)();
};

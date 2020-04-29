import { getFiles } from './getFiles';

import { addFileToFolder } from './addFileToFolder';
import { removeFileFromRoot } from '../../v01/gas/removeFileFromRoot';

/**
 * Konwertuje plik excella na Google Sheets w wskazanym katalogu, domyślnie
 * je usuwając (parametr remove za to odpowiada).
 * Wymaga włączenia zaawasowanych metod (Drive)
 * Inspirowane tym: https://www.labnol.org/code/20500-convert-microsoft-excel-xlsx-to-google-spreadsheet
 *
 * @param {string | GoogleAppsScript.Drive.Folder} folder  ID, URL lub Folder
 * @param {boolean} [remove=true] Usuwać czy nie pliki excella
 */

const convertFromExcell = (folder, remove = true) => {
	const excellMime =
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

	getFiles(folder, `mimeType="${excellMime}"`).forEach(file => {
		const desc = {
			title: file.getName().replace(/\.xlsx?/, ''),
			key: file.getId(),
		};

		const newFile = Drive.Files.insert(desc, file.getBlob(), {
			convert: true,
		});

		addFileToFolder(folder, newFile.id);
		removeFileFromRoot(newFile.id);

		if (remove) {
			file.setTrashed(true);
		}
	});
};
export { convertFromExcell };

import { deleteSheets } from '../../v01/gas/deleteSheets';
import { getContainingFolder } from '../../v01/gas/getContainingFolder';
import { getFiles } from '../gas/getFiles';
import { getFolders } from '../gas/getFolders';

/**
 * Usuwa dotychczasową wcześniejszą strukturę plików eksperymentu
 * zmieniając nazwę pliku ze skryptem
 * @param {import('./types').ExpSetup} expSetup Obiekt z ustawieniami eksperymentu
 */

const resetStructure = expSetup => {
	const mainFile = SpreadsheetApp.getActive();
	const dir = getContainingFolder(mainFile);
	const folderToDel = expSetup.misc.dataFolder;

	getFiles(dir)
		.filter(file => file.getName() !== mainFile.getName())
		.forEach(file => file.setTrashed(true));

	getFolders(dir)
		.filter(folder => folder.getName() === folderToDel)
		.forEach(folder => folder.setTrashed(true));

	mainFile.insertSheet();

	deleteSheets(mainFile, sheet => /^[\d]+$/.test(sheet.getName()));
};
export { resetStructure };

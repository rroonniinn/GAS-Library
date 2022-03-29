import { getFile } from './getFile';
import { getFolder } from './getFolder';

/**
 * Dodaje plik do katalogu (ta wersja bazuje na tym, że plik może
 * znajdować się tylko w jednym katalogu)
 * @param {GoogleAppsScript.Drive.Folder|string} folder Folder, ID lub Url katalogu do którego ma być dodany plik
 * @param {GoogleAppsScript.Drive.File|string} file File, URL lub ID
 * @returns {GoogleAppsScript.Drive.Folder} Folder do którego był dodany plik
 */

export const addFileToFolder = (folder, file) => {
	const targetFolder = getFolder(folder);
	const fileOb = getFile(file);

	console.log(
		`About moving file ${fileOb.getName()} to folder: ${targetFolder.getName()} `
	);
	// @ts-ignore
	fileOb.moveTo(targetFolder);

	console.log('!Success');
	return targetFolder;
};

//  W lib 1 znajduje się gorsza wersja

// Stara wersja sprzed zmiany po stronie Google-a
// export const addFileToFolder = (folder, file) =>
// 	getFolder(folder).addFile(getFile(file));

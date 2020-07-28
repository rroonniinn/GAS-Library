/* eslint-disable max-lines-per-function */

/**
 * Kolejna próba przeniesienia danych do reaportu
 */

import { copyFile } from '../../gas/copyFile';
import { createFolder } from '../../gas/createFolder';
import { getFiles } from '../../gas/getFiles';
import { getFolders } from '../../gas/getFolders';
import { getSpreadsheet } from '../../gas/getSpreadsheet';
import { isEmpty } from '../../gas/isEmpty';
import { paste } from '../../gas/paste';
import { moveFiles } from '../../../v01/gas/moveFiles';

/**
 * Funkcja jednorazowa służąca do aktulizacji raportów bazowych do formy
 * 2.0 (full wypas wraz z rozkładem częstotliwości). Po aktualizacji
 * można ją wywalić
 *
 */

// Template tylko wyników eksperytmntów
const template =
	'https://docs.google.com/spreadsheets/d/1UEy7diJ6U33ytZkgz2wIlffkGd-qN6YcOfoMvD-GZoQ';

/**
 * @param {string} str
 */
const replaceName = str => str.replace('- List', '- Res');

/**
 * Pobranie danych z indywidualnych arkuszy A-F i wsadzenie
 * ich w jeden arkusz.
 *
 * @param {*} file
 */
const reapData = file =>
	getSpreadsheet(file)
		.getSheetByName('data')
		.getRange('B1:K')
		.getValues();

const createNewReport = ({ folder, archiveFolderID, files }) => {
	console.log(`A. -- Entered: ${folder} with ${files.length} --`);
	files.forEach(file => {
		const newReport = copyFile(
			template,
			replaceName(file.getName()),
			folder
		);

		console.log(`B. -- Before paste into: ${newReport.getName()} --`);

		try {
			paste(
				getSpreadsheet(newReport).getSheetByName('data'),
				'A1',
				reapData(file),
				{
					notRemoveFilers: true,
					restrictCleanup: 'preserve',
				}
			);
		} catch (e) {
			console.log(
				`!!! ERROR with file ${newReport.getName()}. MESSAGE: ${
					e.message
				}`
			);
		}

		console.log(`C. -- After paste into: ${newReport.getName()} --`);
	});

	moveFiles(files, archiveFolderID, folder.getId());
};

const applyNewReports = folderUrl => {
	// getFolders(folderUrl)
	getFolders(folderUrl, 'title = "B.4.1 Odczyt : Smalls : 1 min"')
		.map(folder => ({
			folder,
			// archiveFolderID: createFolder(folder, '_Lists').getId(),
			archiveFolderID: '1yI1bMIwX8PHa1DzZWiNFMu_D0y9LlY8i',
			files: getFiles(folder, 'not title contains "Res"'),
		}))
		.forEach(createNewReport);
};

const applyNewReportsOnFolder = () => {
	const folder =
		// A.1 Zapis : Całość
		// A.2 Zapis : Entry By Entry
		// 'https://drive.google.com/drive/folders/1OZSEdqQlPwi6Kpck1jnge3dj6rofDDi7';
		// A.3 Zapis : By Range
		// 'https://drive.google.com/drive/folders/16OfrpA8aA7RbKqasrSK9Qkm8WvWubRgy';
		// A.4 Zapis : Smalls
		// 'https://drive.google.com/drive/folders/1M5TqsR9NjZ2u_Zl5fgd2oTz3iKc9_eJQ';
		// B.1 Odczyt : Całość - tu się wysypuje...DO POPRAWY
		// 'https://drive.google.com/drive/folders/1X__TVwEUHOyqnvPYv6CZsI0Nl8CnPkUU';
		// B.2 Odczyt : Entry by Entry
		// 'https://drive.google.com/drive/folders/1HQ4Dt5s0FA6YgVdMZxwZSmieO5TTAGJK';
		// B.3 Odczyt : By Range
		// 'https://drive.google.com/drive/folders/1bRrTHHx6rx8kfV0nQZsyfn77kFlku0OU';
		// B.4 Odczyt : Smalls
		'https://drive.google.com/drive/folders/1DuPUu4uPT3bKNWe6YdeKEuZ4iaLRotYE';

	applyNewReports(folder);
};

export { applyNewReportsOnFolder };

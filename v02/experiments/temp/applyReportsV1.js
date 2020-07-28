/* eslint-disable max-lines-per-function */

/**
 * Opcja dla zapisu źródłowego wg. schematu poniżej
 * znajdującego się w całości w kolumnie d
 * Zapis źródłowy - Zapis : Entry by Entry : 1 min : Local : 1 row
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
	'https://docs.google.com/spreadsheets/d/19JfGKdaIdIY2OIA6eXyB6cu-P-5dV7n3-y8kviUK_DU/edit#gid=1620347848';

let expTitle = '';

/**
 * Pobranie danych z indywidualnych arkuszy A-F i wsadzenie
 * ich w jeden arkusz.
 *
 * @param {*} file
 */
const reapData = file =>
	getSpreadsheet(file)
		.getSheets()
		.filter(sheet =>
			['A', 'B', 'C', 'D', 'E', 'F'].includes(sheet.getName())
		)
		.map(sheet => sheet.getRange('A3:D').getValues())
		.reduce((acc, sheetData) => acc.concat(sheetData))
		.filter(row => !isEmpty(row))
		.sort(
			(rowA, rowB) =>
				new Date(rowA[0]).getTime() - new Date(rowB[0]).getTime()
		)
		.map(([a, b, c, d]) => {
			if (typeof d === 'string') {
				/**
				 * Co jest czym?
				 * io - np. Zapis, Odczyt, itp.
				 * type - np. Całość, ByRange, itp.
				 * structure - Local, Hub, itp.
				 * frq - częstotliwość testu
				 * method - np. nativeF, nothing itp
				 *
				 */

				const regEx = /(.+) : (.+) : (.+) : (.+) : (.+)/;
				const [, io, type, frq, structure, method] = regEx.exec(
					d
				) || ['', '', '', '', '', ''];

				expTitle = `${io} : ${type} : ${structure} : ${frq}`;

				return [a, b, c, method, io, type, structure, frq];
			}
			return [a, b, c, d];
		});

const createNewReport = ({ folder, archiveFolderID, files }) => {
	console.log(`A. -- Entered: ${folder} --`);
	files
		.filter(file => !/Dashboard|Skrypt/.test(file.getName()))
		.forEach(file => {
			const newReport = copyFile(
				template,
				`${file.getName()} - List`,
				folder
			);

			console.log(
				`B. -- Before paste into: ${newReport.getName()} --`
			);

			paste(
				getSpreadsheet(newReport).getSheetByName('data'),
				'B3',
				reapData(file),
				{ notRemoveFilers: true, restrictCleanup: 'preserve' }
			)
				.getRange('B1')
				.setValue(expTitle);

			console.log(
				`C. -- After paste into: ${newReport.getName()} --`
			);
		});

	moveFiles(files, archiveFolderID, folder.getId());
};

const applyNewReports = folderUrl => {
	// getFolders(folderUrl)
	getFolders(
		folderUrl,
		'title = "A.1.2 Zapis : Całość : 15 min (fala 2)"'
	)
		.map(folder => ({
			folder,
			archiveFolderID: createFolder(folder, '_Ver 3').getId(),
			files: getFiles(folder),
		}))
		.forEach(createNewReport);
};

const applyNewReportsOnFolder = () => {
	const folder =
		// A.1 Zapis : Całość
		'https://drive.google.com/drive/folders/1bqq5b-bC3nwrswRouX-cjbrWFtWQWHly';
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
	// 'https://drive.google.com/drive/folders/1DuPUu4uPT3bKNWe6YdeKEuZ4iaLRotYE';

	applyNewReports(folder);
};

export { applyNewReportsOnFolder };

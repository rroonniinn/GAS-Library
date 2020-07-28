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
import { getNormalizedDate } from '../../../v01/time/getNormalizedDate';

/**
 * Funkcja jednorazowa służąca do aktulizacji raportów bazowych do formy
 * 2.0 (full wypas wraz z rozkładem częstotliwości). Po aktualizacji
 * można ją wywalić
 *
 */

// Template tylko wyników eksperytmntów
const template =
	'https://docs.google.com/spreadsheets/d/19JfGKdaIdIY2OIA6eXyB6cu-P-5dV7n3-y8kviUK_DU';

/**
 * @param {string} str
 */
const replaceName = (str, part) => {
	const [el1, el2] = str.split(' - ');
	return `${el1} part ${part} - ${el2}`;
};

/**
 * Pobranie danych z indywidualnych arkuszy A-F i wsadzenie
 * ich w jeden arkusz.
 *
 * @param {*} file
 */
const reapData = file =>
	getSpreadsheet(file)
		.getSheetByName('data')
		.getRange('B3:I')
		.getValues();

const splitMe = ({ folder, archiveFolderID, files }) => {
	console.log(`A. -- Entered: ${folder} with ${files.length} --`);
	files.forEach(file => {
		const presentName = file.getName();
		const data = reapData(file);

		const middleRow = Math.round(data.length / 2);
		const middleDay = getNormalizedDate(new Date(data[middleRow][0]));

		const lastIndex = data.reduce((lastDayIndex, row, i) => {
			const currentDay = getNormalizedDate(new Date(row[0]));
			// console.log(`index: ${i}. CurrentDay: ${currentDay}`);

			if (
				currentDay.getTime() === middleDay.getTime() &&
				i > lastDayIndex
			) {
				return i;
			}
			return lastDayIndex;
		}, 0);

		const filePart2 = copyFile(
			template,
			replaceName(file.getName(), '2'),
			folder
		);

		try {
			paste(
				getSpreadsheet(filePart2).getSheetByName('data'),
				'B3',
				data.slice(lastIndex + 1),
				{
					notRemoveFilers: true,
					restrictCleanup: 'preserve',
				}
			);
		} catch (e) {
			console.log(
				`!!! ERROR with file ${filePart2.getName()}. MESSAGE: ${
					e.message
				}`
			);
		}

		const filePart1 = copyFile(
			template,
			replaceName(file.getName(), '1'),
			folder
		);

		try {
			paste(
				getSpreadsheet(filePart1).getSheetByName('data'),
				'B3',
				data.slice(0, lastIndex + 1),
				{
					notRemoveFilers: true,
					restrictCleanup: 'preserve',
				}
			);
		} catch (e) {
			console.log(
				`!!! ERROR with file ${filePart1.getName()}. MESSAGE: ${
					e.message
				}`
			);
		}

		console.log(
			`File: ${presentName}. middleRow: ${middleRow}. MiddleDay ${middleDay}. lastRow ${lastIndex}`
		);

		// console.log(`B. -- Before paste into: ${newReport.getName()} --`);

		// console.log(`C. -- After paste into: ${newReport.getName()} --`);
	});

	moveFiles(files, archiveFolderID, folder.getId());
};

const splitFromFolder = folderUrl => {
	// getFolders(folderUrl)
	getFolders(folderUrl, 'title = "A.4.1 Zapis : Smalls : 1 min (bis)"')
		.map(folder => ({
			folder,
			archiveFolderID: createFolder(
				folder,
				'_Lists to long'
			).getId(),
			// archiveFolderID: '149vQQAbLkiBjAwLpqT6nLUyH7j92dIwC',
			files: getFiles(folder, 'not title contains "Res"'),
		}))
		.forEach(splitMe);
};

const splitBigData = () => {
	const folder =
		// A.1 Zapis : Całość
		// 'https://drive.google.com/drive/folders/1bqq5b-bC3nwrswRouX-cjbrWFtWQWHly';
		// A.2 Zapis : Entry By Entry
		// 'https://drive.google.com/drive/folders/1OZSEdqQlPwi6Kpck1jnge3dj6rofDDi7';
		// A.3 Zapis : By Range
		// 'https://drive.google.com/drive/folders/16OfrpA8aA7RbKqasrSK9Qkm8WvWubRgy';
		// A.4 Zapis : Smalls
		'https://drive.google.com/drive/folders/1M5TqsR9NjZ2u_Zl5fgd2oTz3iKc9_eJQ';
	// B.1 Odczyt : Całość - tu się wysypuje...DO POPRAWY
	// 'https://drive.google.com/drive/folders/1X__TVwEUHOyqnvPYv6CZsI0Nl8CnPkUU';
	// B.2 Odczyt : Entry by Entry
	// 'https://drive.google.com/drive/folders/1HQ4Dt5s0FA6YgVdMZxwZSmieO5TTAGJK';
	// B.3 Odczyt : By Range
	// 'https://drive.google.com/drive/folders/1bRrTHHx6rx8kfV0nQZsyfn77kFlku0OU';
	// B.4 Odczyt : Smalls
	// 'https://drive.google.com/drive/folders/1DuPUu4uPT3bKNWe6YdeKEuZ4iaLRotYE';

	splitFromFolder(folder);
};

export { splitBigData };

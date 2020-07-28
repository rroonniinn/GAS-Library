/* eslint-disable max-lines-per-function */

/**
 * Kolejna próba przeniesienia danych do reaportu
 */

import { copyFile } from '../../gas/copyFile';
import { getFolder } from '../../gas/getFolder';
import { getSheet } from '../../gas/getSheet';
import { getSpreadsheet } from '../../gas/getSpreadsheet';
import { paste } from '../../gas/paste';
import { getContainingFolder } from '../../../v01/gas/getContainingFolder';

/**
 * Funkcja jednorazowa służąca do aktulizacji raportów bazowych do formy
 * 2.0 (full wypas wraz z rozkładem częstotliwości). Po aktualizacji
 * można ją wywalić
 *
 */

// Template tylko wyników eksperytmntów
const template =
	'https://docs.google.com/spreadsheets/d/1V0wZOlSGs_qcCmgqxx7km0s-O8BpYJlpqXlM_qjY_f8';

/**
 * @param {string} str
 */
const removeSuffix = str => str.split(' - ')[0];

const splitFile = (url, range) => {
	const ss = getSpreadsheet(url);
	const parentFolder = getFolder(getContainingFolder(ss))
		.getParents()
		.next();

	const baseName = removeSuffix(ss.getName());

	const tables = {
		' < 5 min': [],
		' > 5 min': [],
	};

	const allData = ss
		.getSheetByName('data')
		.getRange(range)
		.getValues();

	const header = allData.filter((row, i) => i <= 1);
	const allDataNoHeader = allData.filter((row, i) => i > 1);

	allDataNoHeader
		// .filter((row, i) => i < 20)
		.forEach(row => {
			const entry = row[row.length - 1];
			const sec =
				typeof entry === 'object'
					? new Date(entry).getMinutes()
					: '--';

			if (sec < 5) {
				tables[' < 5 min'].push(row);
			} else {
				tables[' > 5 min'].push(row);
			}
		});

	Object.entries(tables).forEach(([key, tab]) => {
		const fileName = `${baseName} - Res (${key})`;
		const newFile = copyFile(template, fileName, parentFolder);
		const newFileUrl = newFile.getUrl();

		// const sheet = getSheet('data', newFile.getId());
		const newSheet = getSpreadsheet(newFile);
		const sheet = newSheet.insertSheet('newData', 9);
		paste(sheet, 'A1', header.concat(tab), {
			notRemoveFilers: true,
			restrictCleanup: 'preserve',
			notRemoveEmptys: true,
		});

		paste(
			newSheet.getSheetByName('data'),
			'A1',
			[['={newData!A1:J}']],
			{
				notRemoveFilers: true,
				restrictCleanup: 'preserve',
				notRemoveEmptys: true,
			}
		);

		console.log(`${fileName} | URL: ${newFileUrl}`);
		console.log(`FOLDER: ${parentFolder.getUrl()}`);
		console.log(`-----------------`);
	});
};

const split5minData = () => {
	const urls = [
		// [
		// 	'https://docs.google.com/spreadsheets/d/1kgRuBhJLSXdxC-wcnDcaULS2MrCMa18-gjwFpqPyPFs',
		// 	'data!A1:J',
		// ],
		// [
		// 	'https://docs.google.com/spreadsheets/d/1jmmX0bFegIO5yJmCWVHIRDdHTZN2ByzNyHxi6sxRGxk',
		// 	'data!B1:K',
		// ],
		// [
		// 	'https://docs.google.com/spreadsheets/d/109b1mYjM1-sxI8qpOl7ZtbaCPvKk8kzJa5aIfl69p0o',
		// 	'data!B1:K',
		// ],
		// [
		// 	'https://docs.google.com/spreadsheets/d/1jDuJlpwfaGASznUqZMPQAGU35bAZt3srDKSEtkmCXkA',
		// 	'data!B1:K',
		// ],
		// [
		// 	'https://docs.google.com/spreadsheets/d/1QqNb4bk8H4rcYawQ3gGZEy7ymwqcwYSBtJv_qij6TWQ',
		// 	'data!B1:K',
		// ],
		// [
		// 	'https://docs.google.com/spreadsheets/d/1ptRGDLrhIKsMNEC-BIWVrZ-5RRdsDP1T3hdN7XQl5H0',
		// 	'data!B1:K',
		// ],
		// [
		// 	'https://docs.google.com/spreadsheets/d/1WrrgXsnlH0alxH3t-XPxlTT8voKZaB9WI5Hxapcr4OM',
		// 	'data!B1:K',
		// ],
		// [
		// 	'https://docs.google.com/spreadsheets/d/1WQ8S2muL8o4Me5QR6iLM30OWj3nEwfml6HHnVoiGz3M',
		// 	'data!B1:K',
		// ],
		// [
		// 	'https://docs.google.com/spreadsheets/d/1KBgioJyTmhSgPj-hHJtKA8VJdTtywXnOzbi6QLTO6rE',
		// 	'data!B1:K',
		// ],
		[
			'https://docs.google.com/spreadsheets/d/1OA9x6smHnYfo1F--vAB8PZOifbrPBoOTB41mJQFp0Hk',
			'data!B1:K',
		],
	];

	urls.forEach(([url, range]) => {
		splitFile(url, range);
	});
};

export { split5minData };

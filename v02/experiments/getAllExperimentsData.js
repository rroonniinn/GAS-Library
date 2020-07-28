/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import { getFiles } from '../gas/getFiles';
import { getFolders } from '../gas/getFolders';
import { getSheet } from '../gas/getSheet';
import { getSpreadsheet } from '../gas/getSpreadsheet';
import { paste } from '../gas/paste';
import { disp } from '../../v01/gas/disp';
import { transpose } from '../../v01/arr/transpose';

const source =
	'https://drive.google.com/drive/folders/1CXA3ddWhqxqWxZsiTmfvQUYTt4X0UP1t';

const target =
	'https://docs.google.com/spreadsheets/d/1_j-3qKH8Op-uS6UZYLReuQQJDc7GxxBmTgarXS9Mn4E/edit#gid=0';

const printExperimentNames = () => {
	paste(
		getSheet('helpers', target),
		'A2',
		transpose(
			getSpreadsheet(target)
				.getSheets()
				.map(sheet => sheet.getName())
				.filter(sheetName => sheetName.includes(':'))
		)
	);
};

const helperToFront = () => {
	const ss = getSpreadsheet(target);
	const s = getSheet('helpers', target);
	ss.setActiveSheet(s);
	ss.moveActiveSheet(2);
};

/**
 * Kopuje wszystkie wyniki eksperymentów do jednego skoroszytu celem
 * dalszych analiz
 */

const getAllExperimentsData = () => {
	const targetFile = getSpreadsheet(target);
	const existing = targetFile.getSheets().map(sheet => sheet.getName());

	getFolders(
		source,
		// 'title contains "A." or title contains "B."'
		'title contains "B.2 Odczyt : Entry by Entry"'
	).forEach(folder => {
		getFolders(folder).forEach(subFolder => {
			getFiles(subFolder, 'title contains "Wyniki"').forEach(
				file => {
					const fileName = file.getName();
					console.log(`--- started: ${fileName} `);
					const content = [
						['Data', 'Struktura', 'Czas (s)', 'Zadanie'],
					];

					SpreadsheetApp.open(file)
						.getSheets()
						.filter(sheet =>
							['A', 'B', 'C', 'D', 'E', 'F'].includes(
								sheet.getName()
							)
						)
						.forEach(sheet =>
							content.push(
								...sheet
									.getRange('A3:D')
									.getValues()
									.filter(row =>
										row.every(cell => cell !== '')
									)
							)
						);

					// wlejenie danych
					if (existing.includes(fileName)) {
						paste(
							targetFile.getSheetByName(fileName),
							'A1',
							content
						);
					} else {
						paste(
							targetFile.insertSheet(fileName),
							'A1',
							content
						);
					}
				}
			);
		});
	});
	printExperimentNames();
	helperToFront();
};

export { getAllExperimentsData };

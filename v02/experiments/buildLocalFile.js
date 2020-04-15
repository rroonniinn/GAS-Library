/* eslint-disable max-params */
/* eslint-disable complexity */

import { adjustColumns } from '../../v01/gas/adjustColumns';
import { adjustRows } from '../../v01/gas/adjustRows';
import { randomIntegersArray2d } from '../arr/randomIntegersArray2d';
import { paste } from '../gas/paste';
import { deleteSheets } from '../../v01/gas/deleteSheets';
/**
 * @typedef {import('./types').ExpSetup} ExpSetup
 */

/**
 * Tablica rozmiarów arkuszy które mają się znależć w plikach
//  * @param {Object<string,number>} samples Obiekt z expSetup typu: {s1: 100, s2: 200}
 * @return {{code: string, size: number}[]} betterSamples
 */
const getSamplesArr = ({ samples }) =>
	Object.entries(samples).map(([code, size]) => ({
		code,
		size,
	}));

/**
 * Wstawia odpowiedni arkusz z właściwą nazwą, rozmiarem i danymi
 // * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} spreadsheet
 // * @returns {(quant: number) => GoogleAppsScript.Spreadsheet.Sheet} Wstawiony sheet
 */

const insertProperSheet = expSetup => spreadsheet => quant => {
	const { fixedSize, fixed, randomData } = expSetup.structure;

	// Wstaw arkusz
	const sheet = spreadsheet.insertSheet(`${quant}`);

	// Dopasuje zafiksowany wymiar
	if (fixed === 'col') {
		adjustColumns(sheet, fixedSize);
		adjustRows(sheet, quant);
	} else if (fixed === 'row') {
		adjustRows(sheet, fixedSize);
		adjustColumns(sheet, quant);
	}

	// Wypełnij danymi
	if (randomData) {
		if (fixed === 'col') {
			paste(sheet, 'A', randomIntegersArray2d(quant, fixedSize));
		} else if (fixed === 'row') {
			paste(sheet, 'A', randomIntegersArray2d(fixedSize, quant));
		}
	}
	return sheet;
};

/**
 * Dodaje do Skoroszytu ze skryptem arkusze z danymi do eksperymentu
 * @param {ExpSetup} expSetup Plik config eksperymentu
 */

const buildLocalFile = (expSetup, deleteOthers = true) => {
	const samplesArr = getSamplesArr(expSetup);
	const callback = insertProperSheet(expSetup);

	const spreadsheet = SpreadsheetApp.getActive();
	samplesArr.map(({ size }) => size).forEach(callback(spreadsheet));

	if (deleteOthers) {
		deleteSheets(
			spreadsheet,
			sheet =>
				!samplesArr
					.map(({ size }) => String(size))
					.includes(sheet.getName())
		);
	}
};

export { buildLocalFile };

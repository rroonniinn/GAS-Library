/* eslint-disable complexity */

import { adjustColumns } from '../../v01/gas/adjustColumns';
import { adjustRows } from '../../v01/gas/adjustRows';
import { randomIntegersArray2d } from '../arr/randomIntegersArray2d';
import { paste } from '../gas/paste';

/**
 * Wstawia odpowiedni arkusz z właściwą nazwą, rozmiarem i danymi
 * @param {import('./types').ExpSetup} expSetup Plik config eksperymentu
 * @returns {(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) => {(quant: number) : GoogleAppsScript.Spreadsheet.Sheet} }
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

export { insertProperSheet };

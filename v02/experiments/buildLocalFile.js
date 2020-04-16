import { deleteSheets } from '../../v01/gas/deleteSheets';
import { getSamples } from './getSamples';
import { insertProperSheet } from './insertProperSheet';

/**
 * Dodaje do Skoroszytu ze skryptem arkusze z danymi do eksperymentu
 * @param {import('./types').ExpSetup} expSetup Plik config eksperymentu
 * @param {boolean} deleteOthers Czy usuwać wcześniej istniejące w pliku arkusze.
 * Domyślnie tak.
 * @returns {GoogleAppsScript.Spreadsheet.Spreadsheet}
 */

const buildLocalFile = (expSetup, deleteOthers = true) => {
	const samplesArr = getSamples(expSetup);
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

	return spreadsheet;
};

export { buildLocalFile };

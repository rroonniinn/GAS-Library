import { deleteSheets } from '../../v01/gas/deleteSheets';
import { getSamples } from './getSamples';
import { insertProperSheet } from './insertProperSheet';
import { isEmpty } from '../../v01/utils/isEmpty';

/**
 * Dodaje do Skoroszytu ze skryptem arkusze z danymi do eksperymentu
 * Wykonuje się tylko jeśli są zdefiniowane dane dla eks local. Jeśli
 * nie ma definicji eksperymentu zwraca null.
 * @param {boolean} deleteExisting Czy usuwać wcześniej istniejące arkusze w pliku lokalnym
 * @returns {(expSetup: import('./types').ExpSetup) => GoogleAppsScript.Spreadsheet.Spreadsheet|null} Spreadsheet lub null
 */

const buildLocal = (deleteExisting = true) => expSetup => {
	if (isEmpty(expSetup.results.loc)) return null;

	const samplesArr = getSamples(expSetup);
	const callback = insertProperSheet(expSetup);

	const spreadsheet = SpreadsheetApp.getActive();
	samplesArr.map(({ size }) => size).forEach(callback(spreadsheet));

	if (deleteExisting) {
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

export { buildLocal };

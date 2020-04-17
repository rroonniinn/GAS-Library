import { createSpreadsheetIn } from '../gas/createSpreadsheetIn';
import { deleteSheets } from '../../v01/gas/deleteSheets';
import { addToProps } from '../../v01/gas/properties';
import { getSamples } from './getSamples';
import { insertProperSheet } from './insertProperSheet';
import { isEmpty } from '../../v01/utils/isEmpty';

/**
 * Buduje plik Huba i umieszcza w propsach skryptu jego id
 * Wykonuje się tylko jeśli są zdefiniowane dane dla eks hub. Jeśli
 * nie ma definicji eksperymentu zwraca null.
 * @param {GoogleAppsScript.Drive.Folder} parent Folder, do którego ma trafić plik
 * @returns {(expSetup: import('./types').ExpSetup) => GoogleAppsScript.Spreadsheet.Spreadsheet|null} Spreadsheet lub null
 *
 */

const buildHub = parent => expSetup => {
	if (isEmpty(expSetup.results.hub)) return null;

	const samplesArr = getSamples(expSetup);
	const { hubName } = expSetup.misc;
	const callback = insertProperSheet(expSetup);

	const spreadsheet = createSpreadsheetIn(parent, hubName);
	samplesArr.map(({ size }) => size).forEach(callback(spreadsheet));

	deleteSheets(
		spreadsheet,
		sheet =>
			!samplesArr
				.map(({ size }) => String(size))
				.includes(sheet.getName())
	);

	addToProps('script', 'HUB', spreadsheet.getId());
	return spreadsheet;
};

export { buildHub };

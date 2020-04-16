import { createSpreadsheetIn } from '../gas/createSpreadsheetIn';
import { deleteSheets } from '../../v01/gas/deleteSheets';
import { addToProps } from '../../v01/gas/properties';
import { getSamples } from './getSamples';
import { insertProperSheet } from './insertProperSheet';

/**
 * Buduje plik Huba i umieszcza w propsach skryptu jego id
 * @param {import('./types').ExpSetup} expSetup Plik config eksperymentu
 * @param {GoogleAppsScript.Drive.Folder} parent Folder katalogu w którym
 * ma być utworzony plik
 * @returns {GoogleAppsScript.Spreadsheet.Spreadsheet}
 */

const buildHub = (expSetup, parent) => {
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

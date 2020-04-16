import { createSpreadsheetIn } from '../gas/createSpreadsheetIn';
import { insertProperSheet } from './insertProperSheet';
import { deleteSheets } from '../../v01/gas/deleteSheets';
import { addToProps } from '../../v01/gas/properties';
import { getSamples } from './getSamples';

/**
 * Tworzy pliki z danymi do eksperymentów external dodając ich id do
 * propsów skryptu
 * @param {import('./types').ExpSetup} expSetup Plik config eksperymentu
 * @returns {(parent: GoogleAppsScript.Drive.Folder) => Object<string, string>}
 */

// @ts-ignore
const buildExternals = expSetup => parent => {
	const urls = {};
	const samplesArr = getSamples(expSetup);
	const { externalsSheetName, externalsPrefix } = expSetup.misc;
	const callback = insertProperSheet(expSetup);

	samplesArr.forEach(({ code, size }) => {
		const externalSpreadsheet = createSpreadsheetIn(
			parent,
			`${externalsPrefix}${size}`
		);
		callback(externalSpreadsheet)(size).setName(externalsSheetName);
		deleteSheets(
			externalSpreadsheet,
			sheet => sheet.getName() !== externalsSheetName
		);

		urls[code] = externalSpreadsheet.getId();
	});

	addToProps('script', 'EXTERNALS', urls);
	return urls;
};

export { buildExternals };

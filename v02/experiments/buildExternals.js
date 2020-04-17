import { createSpreadsheetIn } from '../gas/createSpreadsheetIn';
import { deleteSheets } from '../../v01/gas/deleteSheets';
import { addToProps } from '../../v01/gas/properties';
import { isEmpty } from '../../v01/utils/isEmpty';

import { getSamples } from './getSamples';
import { insertProperSheet } from './insertProperSheet';

/**
 * Tworzy pliki z danymi do eksperymentów external dodając ich id do
 * propsów skryptu. Wykonuje się tylko jeśli są zdefiniowane dane dla
 * eks ext. Jeśli nie ma definicji eksperymentu zwraca null.
 * @param {GoogleAppsScript.Drive.Folder} parent
 * @returns {(expSetup: import('./types').ExpSetup) => Object<string, string>|null}
 */

// @ts-ignore
const buildExternals = parent => expSetup => {
	if (isEmpty(expSetup.results.ext)) return null;

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

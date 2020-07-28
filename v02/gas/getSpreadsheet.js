import { isUrl } from '../str/isUrl';
import { isSpreadsheet } from '../../v01/utils/isSpreadsheet';

import { getIdFromUrl } from './getIdFromUrl';
import { isFile } from './isFile';

const { openById, open } = SpreadsheetApp;

/**
 * Zwraca skoroszyt o określonym ID lub url. Jeśli przekazany zostanie
 * obiekt Skoroszytu to go zwraca
 * @param {any} val Obiekt Skoroszytu, File lub ID albo Url
 * @returns {GoogleAppsScript.Spreadsheet.Spreadsheet} Skoroszyt
 */

const getSpreadsheet = val => {
	if (isSpreadsheet(val)) return val;
	if (isFile(val)) return open(val);
	if (typeof val === 'string')
		return isUrl(val) ? openById(getIdFromUrl(val)) : openById(val);

	throw new TypeError('Wrong argument to "getSpreadsheet" function');
};

export { getSpreadsheet };

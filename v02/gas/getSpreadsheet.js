import { isUrl } from '../str/isUrl';
import { isSpreadsheet } from '../../v01/utils/isSpreadsheet';

import { getIdFromUrl } from './getIdFromUrl';

const { openById } = SpreadsheetApp;

/**
 * Zwraca skoroszyt o określonym ID lub url. Jeśli przekazany zostanie
 * obiekt Skoroszytu to go zwraca
 * @param {any} val Obiekt Skoroszytu lub ID albo Url
 * @returns {GoogleAppsScript.Spreadsheet.Spreadsheet} Skoroszyt
 */

const getSpreadsheet = val => {
	if (isSpreadsheet(val)) return val;
	return isUrl(val) ? openById(getIdFromUrl(val)) : openById(val);
};

export { getSpreadsheet };

import { isUrl } from '../str/isUrl';
import { getIdFromUrl } from './getIdFromUrl';
import { isFile } from './isFile';

const { getFileById } = DriveApp;

/**
 * Dobiera odpowiednią metodą aby zwrócić obiekt pliku
 * @param {any} val File, URL lub ID
 * @returns {GoogleAppsScript.Drive.File}
 */

const getHandyFile = val => {
	if (isFile(val)) return val;
	if (isUrl(val)) return getFileById(getIdFromUrl(val));
	return getFileById(val);
};

export { getHandyFile };

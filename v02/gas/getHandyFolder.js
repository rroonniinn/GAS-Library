import { isFolder } from './isFolder';
import { getIdFromUrl } from './getIdFromUrl';
import { isUrl } from '../str/isUrl';

const { getFolderById } = DriveApp;

/**
 * Dobiera odpowiednią metodą aby zwrócić obiekt folderu
 * @param {any} val Folder, URL lub ID
 * @returns {GoogleAppsScript.Drive.Folder}
 */
const getHandyFolder = val => {
	if (isFolder(val)) return val;
	if (isUrl(val)) return getFolderById(getIdFromUrl(val));
	return getFolderById(val);
};

export { getHandyFolder };

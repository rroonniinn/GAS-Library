import { getFile } from './getFile';

/**
 * Puts file in a trash
 * @param {GoogleAppsScript.Drive.File|string} file File, URL lub ID
 * @returns {GoogleAppsScript.Drive.File}
 */

export const trashFile = file => getFile(file).setTrashed(true);

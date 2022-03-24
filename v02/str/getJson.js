/* eslint-disable max-params */
import { pipe } from '../fp/pipe';
import { getSheet } from '../gas/getSheet';
import { tail } from '../../v01/arr/tail';
import { getValues } from '../../v01/gas/getValues';
import { moveFiles } from '../../v01/gas/moveFiles';

/**
 * Zapisuje na Drive plik JSON z danymi ze wskazanego arkusza
 * @param {string} fileName Docelowa nazwa pliku json
 * @param {string} folderId Id folderu w którym ten plik ma wylądować
 * @param {string} srcSheetName Nazwa arkusza z danymi
 * @param {string} [srcId] Opcjonalne id pliku
 */

const getDataAsJson = (fileName, folderId, srcSheetName, srcId) => {
	const sheet = getSheet(srcSheetName, srcId);
	pipe(
		() => sheet,
		getValues,
		tail,
		arr => JSON.stringify(arr),
		str =>
			DriveApp.createFile(
				`${fileName}.json`,
				str,
				// @ts-ignore
				MimeType.PLAIN_TEXT
			),
		file => moveFiles([file], folderId)
	)();
};

export { getDataAsJson };

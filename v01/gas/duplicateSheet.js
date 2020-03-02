/* eslint-disable max-params */
import { getSheet } from './getSheet';
/**
 * Duplikuje wskazany arkusz w określonym pliku nadając mu nową nazwę
 * UWAGA: Jeśli w pliku znajuje się już arkusz o nowym imieniu - wywali błędem
 *
 * @param {String} fileId Id pliku w którym ma być zuplikowany arkusz
 * @param {String} sourceSheet Nazwa arkusza do zduplikowania
 * @param {String} newSheetName Opcjonalna nazwa arkusza po zduplikowaniu - jeśli nie podana to sheets sam nada nazwe typu "copy of xxx". W takiej sytuacji nie pojawi się błąd opisany wyżej
 * @returns
 */
const duplicateSheet = (fileId, sourceSheet, newSheetName = null) => {
	const newSheet = getSheet(sourceSheet, fileId)
		.activate()
		.getParent()
		.duplicateActiveSheet();

	if (newSheetName) newSheet.setName(newSheetName);

	return newSheet;
};

export { duplicateSheet };

/**
 * FIXME - Należy dodać obsługę błędu wskazanego w opisie
 */

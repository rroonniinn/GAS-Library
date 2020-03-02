/* eslint-disable max-params */
import { getFileNameFromId } from './getFileNameFromId';
import { getSheet } from './getSheet';
import { paste } from './paste';
import { duplicateSheet } from './duplicateSheet';

/**
 * Połączenie danych z różnych plików w indywidualne arkusze w innym pliku.
 * Pojedyńcze pliki muszą mieć taką samą strukturę i dane muszą być trzymane w arkuszu o tej samej nazwie
 * Dane z plików trafią do arkuszy o nazwach takich jak nazwy plików z których pochodzą
 * @param {String} targetFileId Id docelowego arkusza
 * @param {String} targetSheetTemplateName Nazwa arkusza który funkcjonuje jako template dla nowych arkuszy do których zostanie wklejony
 * @param {Array<String>} sourceFilesIds Tablica id plików z których mają być pobrane dane
 * @param {String} sourceSheetName Nazwa arkusza z którego mają być pobrane dane (taka sama dla każdego pliku źródłowego)
 *
 */

const mergeIntoFileSeparateSheets = (targetFileId, targetSheetTemplateName, sourceFilesIds, sourceSheetName) => {
	const getFileNameAndContent = sourceFileId => {
		const fileName = getFileNameFromId(sourceFileId);
		const content = getSheet(sourceSheetName, sourceFileId)
			.getDataRange()
			.getValues();

		return { content, fileName };
	};

	const pasteIntoSheets = ({ content, fileName }) => {
		const newSheet = duplicateSheet(targetFileId, targetSheetTemplateName, fileName);
		paste(newSheet, 'A', 1, content);
	};

	const mergeFiles = () => {
		sourceFilesIds.map(getFileNameAndContent).forEach(pasteIntoSheets);
	};

	mergeFiles();
};

export { mergeIntoFileSeparateSheets };

/**
 * Potencjalnie można by przrobić tę funkcję aby:
 * [] Dodać opcję w której nie trzeba wskazywać arkusza-templatu (tworząc po prostu nowy arkusz)
 * [] Zweryfikować czy nie byłoby łatwiej zbudować to wokół kopiowania arkuszy z plików do docelowego pliku.
 * 			to co prawda oznacza nieco inną funkcjonalność w której nie przechodzi formatowanie
 * [] Pozwalała definiować różne nazwy arkuszy w plikach źródłowych (jako obiket: {id: 'xxxx', sheet: 'xxxx'})
 */

import { getSheet } from './getSheet';
import { paste } from './paste';

/**
 * Połączenie danych z różnych plików w jeden arkusz w innym pliku.
 * Pojedyńcze pliki muszą mieć taką samą strukturę i dane muszą być trzymane w arkuszu o tej samej nazwie
 * @param {String} targetFileId Id docelowego arkusza
 * @param {String} targetSheetName Nazwa arkusza do którego mają zostać dane wklejone
 * @param {Array<String>} sourceFilesIds Tablica id plików z których mają być pobrane dane
 * @param {String} sourceSheetName Nazwa arkusza z którego mają być pobrane dane (taka sama dla każdego pliku źródłowego)
 *
 */
const mergeIntoFileOneSheet = (targetFileId, targetSheetName, sourceFilesIds, sourceSheetName) => {
	const getContent = fileId =>
		getSheet(sourceSheetName, fileId)
			.getDataRange()
			.getValues();

	const mergeFiles = () => {
		const mergedContent = sourceFilesIds.map(getContent).reduce((a, b) => a.concat(b));
		paste(getSheet(targetSheetName, targetFileId), 'A', 1, mergedContent);
	};

	mergeFiles();
};

export { mergeIntoFileOneSheet };

/**
 * Potencjalnie można by przrobić tę funkcję aby:
 * [] Zwracała obiekt utworzonego arkusza
 * [] Pozwalała definiować różne nazwy arkuszy w plikach źródłowych (jako obiket: {id: 'xxxx', sheet: 'xxxx'})
 */

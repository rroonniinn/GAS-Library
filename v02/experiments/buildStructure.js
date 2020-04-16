import { getContainingFolder } from '../../v01/gas/getContainingFolder';
import { seq } from '../../v01/fp/seq';
import { buildResultsFiles } from './buildResultsFiles';
import { createFolder } from '../gas/createFolder';
import { buildLocal } from './buildLocal';
import { buildHub } from './buildHub';
import { buildExternals } from './buildExternals';

/**
 * Folder, w którym znajduje się plik ze skryptem (bouund) eksperymentu
 * @returns {GoogleAppsScript.Drive.Folder}
 *
 */
const experimentRoot = () =>
	getContainingFolder(SpreadsheetApp.getActive());

/**
 * Na bazie pliku z konfigujracją eksperymentu, buduje całą strukturę plików,
 * łącznie z danymi testowymi, plikami wyników i dashboardem (soon).
 * Do propsów skryptu ładuje wszystkie id plików potrzebne podczas wykonywania eksperymentów
 * @param {import('./types').ExpSetup} expSetup Obiekt z ustawieniami eksperymentu
 * @param {boolean} [deleteExisting=true] Czy usuwać wcześniej istniejące arkusze w pliku lokalnym. Domyślnie tak
 */
const buildStructure = (expSetup, deleteExisting = true) => {
	const { dataFolder } = expSetup.misc;
	const dirExp = experimentRoot();
	const dirData = createFolder(dirExp, dataFolder);

	seq(
		buildResultsFiles(dirExp),
		buildLocal(deleteExisting),
		buildHub(dirData),
		buildExternals(dirData)
	)(expSetup);
};

export { buildStructure };

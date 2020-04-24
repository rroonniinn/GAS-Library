import { pipe } from '../fp/pipe';
import { createFolder } from '../gas/createFolder';
import { seq } from '../../v01/fp/seq';
import { getContainingFolder } from '../../v01/gas/getContainingFolder';

import { buildDashboard } from './buildDashboard';
import { buildExternals } from './buildExternals';
import { buildHub } from './buildHub';
import { buildLocal } from './buildLocal';
import { buildResultsFiles } from './buildResultsFiles';
import { resetStructure } from './resetStructure';

/**
 * Na bazie pliku z konfigujracją eksperymentu, buduje całą strukturę plików,
 * łącznie z danymi testowymi, plikami wyników i dashboardem (soon).
 * Do propsów skryptu ładuje wszystkie id plików potrzebne podczas wykonywania eksperymentów
 * @param {import('./types').ExpSetup} expSetup Obiekt z ustawieniami eksperymentu
 * @param {boolean} [deleteExisting=true] Czy usuwać wcześniej istniejące arkusze w pliku lokalnym. Domyślnie tak
 */
const buildStructure = (expSetup, deleteExisting = true) => {
	const { dataFolder } = expSetup.misc;
	const scriptFile = SpreadsheetApp.getActive();

	// Usuwa wcześniejsze pliki i arkusza
	resetStructure(expSetup);

	// Zmienia nazwę pliku ze skryptem
	scriptFile.rename(
		`${expSetup.title} : ${expSetup.misc.scriptFileSufix}`
	);

	const dirExp = getContainingFolder(scriptFile);
	const dirData = createFolder(dirExp, dataFolder);

	seq(
		pipe(buildResultsFiles(dirExp), buildDashboard(expSetup, dirExp)),
		buildLocal(deleteExisting),
		buildHub(dirData),
		buildExternals(dirData)
	)(expSetup);
};

export { buildStructure };

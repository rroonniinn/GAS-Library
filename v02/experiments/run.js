/* eslint-disable max-params */
import { performanceCheckerObj } from '../../v01/utils/performanceCheckerObj';
import { paste } from '../gas/paste';
import { getSheet } from '../gas/getSheet';
import { getProp } from '../../v01/gas/properties';

/**
 * @type {Object<string, string>} Obiekt pobrany z propsów zawierający ID
 * plików, do których wklejane są wyniki eksperymentów. Kluczem jest np.
 * loc, hub czy też ext. Wartością jest id pliku.
 */

const resultsFiles = getProp('script', 'PRINT_TO_PROPS');

/**
 * @type {array[]} Docelowa tablica na dane z czasami wykonywania funkcji
 */
const loggerRes = [];

/**
 * Podstawowa funkcja odpalająca indywidualny eksperyment.
 * Wykonuje się i zapisuje czas w pliku
 *
 * @param {import('./types').ExpSheet} target Obiekt z danymi na temat arkusza testowego
 * @param {import('./types').ExpTasks} task
 * @param {import('./types').ExpSetup} expSetup Obiekt z ustawieniami eksperymentu
 */

const run = (target, task, expSetup) => {
	const { title, printTo } = expSetup;
	const { geo, sheetSym, callback } = task;
	const desc = `${title} : ${printTo[geo].name} : ${printTo[geo].sheetsMeaning[sheetSym]}`;
	const sheet = sheetSym.toUpperCase();

	performanceCheckerObj(
		loggerRes,
		callback(target),
		target.printName,
		desc,
		expSetup.method
	);

	const pasteOpts = {
		notRemoveFilers: true,
		restrictCleanup: 'preserve',
	};

	paste(getSheet(sheet, resultsFiles[geo]), 'A', loggerRes, pasteOpts);
};

export { run };

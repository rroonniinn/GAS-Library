import { randomFromArray } from '../arr/randomFromArray';
import { getTargets } from './getTargets';
import { run } from './run';

/**
 * Generator obiektu dla funkcji / zadania
 * @param {[string, function, string][]} arr Do którego pliku ma wklejać dane. Musi odpowiadać obiektowi printTo z EXP_SETUP z configu
 * @returns {import('./types').ExpTasks[]}
 */

const changeIntoObj = arr =>
	arr.map(([geo, callback, sheetSym]) => ({
		geo,
		callback,
		sheetSym,
	}));

/**
 * Losowo odpala przekazane w argumencie funkcje aplikując do nich losowe
 * sample danych skonfugurowane w configu
 * @param {import('./types').ExpSetup} expSetup Obiekt z ustawieniami eksperymentu
 * @returns {(arr: [string, function, string][]) => void}
 */

const runRandom = expSetup => arr => () => {
	const functionsSet = changeIntoObj(arr);

	const [[, target]] = randomFromArray(getTargets(expSetup), 1);
	const [task] = randomFromArray(functionsSet, 1);

	run(target, task, expSetup);
};

export { runRandom };

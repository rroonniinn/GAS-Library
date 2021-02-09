import { pipe } from '../fp/pipe';

import { correctJsonDates } from './correctJsonDates';

/**
 * Tworzy głęboką kopię tablicy 1D nie rozwalając przy tym dat.
 * Wymaga nieco pracy - np. walidacji
 * @param {array} arr
 * @returns {array}
 */

const deepCopyArr1d = arr =>
	pipe(() => arr, JSON.stringify, JSON.parse, correctJsonDates)();

export { deepCopyArr1d };

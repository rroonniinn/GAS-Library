import { pipe } from '../fp/pipe';

import { correctJsonDates } from './correctJsonDates';

/**
 * Tworzy głęboką kopię przekazanej tablicy (zarówno 1d jak i 2d)
 * nie rozwalając przy tym dat. Wymaga nieco pracy - np. walidacji
 * @param {array|array[]} arr Tablica 1/2d
 * @returns {array|array[]} Kopia tablicy
 */

export const deepCopyArr = arr =>
	pipe(() => arr, JSON.stringify, JSON.parse, correctJsonDates)();

/**
 * To samo co deepCopyArr1d - ale dla wstecznej kompatybilności
 * zrobiłem kopię - ta jest oficjalna.
 * Zastępuję przy okazji `deepCopyArr2d`
 */

/**
 * UT - done
 */

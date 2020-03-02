import { arrToObj } from './arrToObj';
import { isEmpty } from '../utils/isEmpty';

/**
 * Przerabia tablicę 2d na obiekt którego kluczem jest wartość
 * z ostatniej kolumny.
 *
 * @param {Array[]} arr Tablica 2d posiadająca struktruę bazy danych
 * @returns {Object}
 */

export const arrToObjByLast = arr => {
	if (isEmpty(arr)) return {};
	return arrToObj(arr, arr[0].length - 1);
};

/* eslint-disable complexity */
/* eslint-disable no-unused-expressions */
import { remove } from './remove';
import { isEmpty } from '../utils/isEmpty';

/**
 * Przerabia tablicę 2d na obiekt którego kluczem jest
 * wartość ze wskazanego indexu.
 * Jeśli drugi parametr nie podany uzna pierwszą kolumnę za klucz.
 * Jeśli dostanie pustą tablicę to zwraca pusty obiekt
 *
 * @param {Array[]} arr Tablica 2d posiadająca struktruę bazy danych
 * @param {Number} index Index kolumny z której warotści mają zostać
 * użyte jako klucze. Domyślne 0
 * @returns {Object}
 */

const arrToObj = (arr, index = 0) => {
	if (isEmpty(arr)) return {};
	if (!Array.isArray(arr))
		throw new Error('arrToObj works on arrays only');
	if (typeof index !== 'number')
		throw new Error(
			`Wrong argument type. arrToObj expects "number", got ${typeof index}`
		);
	if (index >= arr[0].length || index < 0)
		throw new Error(
			'Wrong index. arrToObj expects "index" greater than 0 and less then arr.lenght-1'
		);

	return arr.reduce((obj, row) => {
		const key = row[index];
		const cleanRow = remove(row, index);
		obj[key] ? obj[key].push(cleanRow) : (obj[key] = [cleanRow]);
		return obj;
	}, {});
};

export { arrToObj };

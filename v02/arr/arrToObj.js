/* eslint-disable complexity */
/* eslint-disable no-unused-expressions */
import { isArray2d } from '../utils/isArray2d';
import { isEmpty } from '../utils/isEmpty';

import { remove } from './remove';

/**
 * Przerabia tablicę 2d na obiekt którego kluczem jest
 * wartość ze wskazanego indeksu. Drugi parametr określa czy ma zostać
 * usunięta z wierszy kolumna z której pobierany jest indeks. Domyślnie
 * nie usuwa. Jeśli trzeci parametr nie podany uzna pierwszą kolumnę
 * za klucz. Zwraca pusty obiekt gdy:
 * - jako tablica zostanie przekazane coś innego niż tablica 2d,
 * - przekazano pustą tablicę,
 * - jako removeIdx zostanie przekazane coś co nie jest boolean
 * - indeks mniejszy niż zero lub większy niż maksymalny dla tablicy,
 * - jako indeks zostanie przekazana wartość nie będąca liczbą całkowitą
 *
 * @param {array[]} arr Tablica 2d posiadająca strukturę bazy danych
 * @param {boolean} removeIdx Info czy usunąć z wierszy tablicy kolumnę
 * z której pobierany jest indeks (domyślnie nie)
 * @param {number} index Index kolumny z której wartości mają zostać
 * użyte jako klucze. Domyślne 0
 * @returns {Object}
 */

const arrToObj = (arr, removeIdx = false, index = 0) => {
	if (
		!isArray2d(arr) ||
		isEmpty(arr) ||
		typeof removeIdx !== 'boolean' ||
		!Number.isInteger(index) ||
		index >= arr[0].length ||
		index < 0
	)
		return {};

	return arr.reduce((obj, row) => {
		const key = row[index];
		const cleanRow = removeIdx ? remove(row, index) : row;
		obj[key] ? obj[key].push(cleanRow) : (obj[key] = [cleanRow]);
		return obj;
	}, {});
};

export { arrToObj };

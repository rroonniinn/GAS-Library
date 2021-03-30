/* eslint-disable max-params */

import { pipe } from '../fp/pipe';
import { findRow } from './findRow';
import { getValueOnIdx } from './getValueOnIdx';
import { isArray2d } from '../utils/isArray2d';

/**
 * Funkcja wyszukuje pierwszy wiersz w którym ze wskazanej kolumnie
 * (`conditionColIdx`) znajduje się przekazana wartość (`conditionColVal),
 * a następnie zwraca inną wartość znajdującą się w innej kolumnie
 * tego wiersza `returnIdx`. Przeznaczona dla tablic 2d. Dla tablicy 1d
 * zwraca `undefined` (zasadniczo każda wartość jako `arr` nie będąca
 * tablicą 2d zwraca `undefined`).
 *
 * @example
 * const arr = [
 * 	[1, 'A'],
 * 	[2, 'B'],
 * 	[3, 'C'],
 * ];
 *
 * findRowAndGetIdxValue(arr, 0, 3, 1); // -> 'C'
 * findRowAndGetIdxValue([], 0, 3, 1); // ->  undefined
 * findRowAndGetIdxValue(arr, 0, 4, 1); // ->  undefined
 * findRowAndGetIdxValue(arr, 3, 3, 1); // ->  undefined
 * findRowAndGetIdxValue(arr, 0, 3, 10); // ->  undefined
 *
 * @param {array[]} arr Tablica 2d na której wyszukiwana jest wartość
 * @param {number} conditionColIdx Indeks kolumny dla której przekazuję wartość poniżej
 * @param {*} conditionColVal Wartość jaka ma znajdować się w powyższej kolumnie
 * @param {number} returnIdx Indeks kolumny z której wartość jest zwracana
 * @returns {*|undefined} Wartość w powyższej kolumnie lub `undefined` jeśli nie znaleziono
 */

const findRowAndGetIdxValue = (
	arr,
	conditionColIdx,
	conditionColVal,
	returnIdx
) => {
	if (!isArray2d(arr)) return undefined;

	return pipe(
		() => arr,
		findRow(row => row[conditionColIdx] === conditionColVal),
		getValueOnIdx(returnIdx)
	)();
};

export { findRowAndGetIdxValue };

/**
 * UT - done
 */

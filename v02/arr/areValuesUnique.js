/**
 * @module Arr
 */

/**
 * Sprawdza czy w przekazanej tablicy nie ma duplikatów.
 * Przed sprawdzeniem usuwa puste wartości
 * @instance
 * @function areValuesUnique
 * @param {array} arr Tablica 1d z wartościami
 * @returns {boolean}
 */

export const areValuesUnique = arr => {
	const fullArr = arr.filter(el => el !== '');
	return arr.filter(el => el !== '').length === new Set(fullArr).size;
};

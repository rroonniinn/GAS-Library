/**
 * Sprawdza czy w przekazanej tablicy nie ma duplikatów.
 * Przed sprawdzeniem usuwa puste wartości
 */

export const areValuesUnique = arr => {
	const fullArr = arr.filter(el => el !== '');
	return arr.filter(el => el !== '').length === new Set(fullArr).size;
};

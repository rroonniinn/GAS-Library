/* eslint-disable max-params */
/**
 * Zwraca rekursywnie tablicę zawierającą kolejne liczby rozpoczynając
 * od przekazanej a kończąc na tej, która ma wartość równą lub mniejszą od
 * docelowej
 * @example
 * @param {number} firstNum Startowa wartość
 * @param {number} finalValue Docelowa wartość włącznie
 * @param {number} [step] Wartość o którą należy powiększyć kolejne numery, domyślnie 1
 * @param {array} [arr] Pusta tablica dla pierwszego odpalenia rekursywnego
 * @returns {number[]} Tablica wpisów
 */

export const getNumConsecutiveValue = (
	firstNum,
	finalValue,
	step = 1,
	arr = []
) => {
	arr.push(firstNum);
	const nextNum = firstNum + step;

	if (nextNum > finalValue) {
		return arr;
	}

	return getNumConsecutiveValue(nextNum, finalValue, step, arr);
};

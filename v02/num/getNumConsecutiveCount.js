/* eslint-disable max-params */
/**
 * Zwraca rekursywnie tablicę o określonej liczbie wpisów zawierającą kolejne
 * liczby rozpoczynając od przekazanej w ilości wynikającej z drugiego parametru
 * @param {number} firstNum Startowa wartość
 * @param {number} count Docelowa liczba wartości
 * @param {number} [step] Wartość o którą należy powiększyć kolejne numery, domyślnie 1
 * @param {array} [arr] Pusta tablica dla pierwszego odpalenia rekursywnego
 * @returns {number[]} Tablica wynikowa
 */

export const getNumConsecutiveCount = (
	firstNum,
	count,
	step = 1,
	arr = []
) => {
	arr.push(firstNum);
	const nextNum = firstNum + step;

	if (arr.length === count) {
		return arr;
	}

	return getNumConsecutiveCount(nextNum, count, step, arr);
};

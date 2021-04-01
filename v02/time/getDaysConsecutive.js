import { getDateAfter } from './getDateAfter';

/**
 * Zwraca rekursywnie tablicę zawierającą obiekty kolejnych Dat poczynając
 * od Daty przekazanej (włącznie) w ilości wynikającej z drugiego parametru
 *
 * @example
 * getDaysConsecutive(new Date(2021, 0, 30), 3);
 * // -> [Date '2021-01-30', Date '2021-01-31', Date '2021-02-01']
 *
 * @param {Date} day Startowy dzień
 * @param {number} count Liczba dni do zwrócenia
 * @param {array} [arr] Pusta tablica dla pierwszego odpalenia rekursywnego
 * @returns {Date[]} Tablica dat
 */

const getDaysConsecutive = (day, count, arr = []) => {
	arr.push(day);
	const nextDay = getDateAfter(day, 1);

	if (arr.length === count) {
		return arr;
	}
	return getDaysConsecutive(nextDay, count, arr);
};

export { getDaysConsecutive };

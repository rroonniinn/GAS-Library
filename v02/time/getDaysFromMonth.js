import { getDateAfter } from './getDateAfter';
import { getDaysInMonth } from './getDaysInMonth';

/**
 * Zwraca rekursywnie tablicę zawierającą obiekty Dat wszystkich
 * dni w danym miesiącu poczynając od przekazanego dnia.
 *
 * @example
 * getDaysFromMonth(new Date(2021, 0, 29));
 * // -> [Date '2021-01-29', Date '2021-01-30', Date '2021-01-31'] // length = 3
 *
 * getDaysFromMonth(new Date(2021, 0, 1));
 * // -> [Date '2021-01-01', ..., Date '2021-01-31'] // length = 31
 *
 * @param {Date} day Startowy dzień
 * @param {array} [arr] Pusta tablica dla pierwszego odpalenia rekursywnego
 * @returns {Date[]} Tablica dat
 */

const getDaysFromMonth = (day, arr = []) => {
	arr.push(day);
	const nextDay = getDateAfter(day, 1);

	if (getDaysInMonth(day) === day.getDate()) {
		return arr;
	}
	return getDaysFromMonth(nextDay, arr);
};

export { getDaysFromMonth };

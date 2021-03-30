import { isDate } from '../utils/isDate';

/**
 * Zwraca liczbę dni w miesiącu z danego roku
 * month, year strings / month - 1 dla stycznia, 2 dla lutego itp.
 *
 * @example
 * getDaysInMonth(new Date(2021, 0, 1)); // ->  31
 * getDaysInMonth(new Date(2021, 1, 1)); // ->  28
 * getDaysInMonth(new Date(2021, 2, 1)); // ->  31
 * getDaysInMonth(new Date(2021, 3, 1)); // ->  3
 *
 * getDaysInMonth(new Date(2021, 0, 15)); // ->  31
 * getDaysInMonth(new Date(2021, 1, 15)); // ->  28
 * getDaysInMonth(new Date(2021, 2, 15)); // ->  31
 * getDaysInMonth(new Date(2021, 3, 15)); // ->  3
 *
 * getDaysInMonth(2021, 1); // ->  31
 * getDaysInMonth(2021, 2); // ->  28
 * getDaysInMonth(2021, 3); // ->  31
 * getDaysInMonth(2021, 4); // ->  30
 *
 * @param {number|Date} yearDate rok lub obiekt daty
 * @param {number} [month] Opcjonalny numer miesiąca liczony od 1 (jeśli w pierwszym argumencie przekazano rok jako numer)
 * @returns {number} Liczba dni we wskazanym miesiącu
 */

const getDaysInMonth = (yearDate, month) => {
	if (isDate(yearDate)) {
		return new Date(
			/** @type {Date} */ (yearDate).getFullYear(),
			/** @type {Date} */ (yearDate).getMonth() + 1,
			0
		).getDate();
	}

	return new Date(/** @type {number} */ (yearDate), month, 0).getDate();
};

export { getDaysInMonth };

import { isDate } from '../../v02/utils/isDate';

/**
 * Zwraca liczbę dni w miesiącu z danego roku
 * month, year strings / month - 1 dla stycznia, 2 dla lutego itp.
 * @param {number|Date} yearDate rok lub obiekt daty
 * @param {number} month
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

import { getDateAfter } from './getDateAfter';
import { getFirstDayNextM } from './getFirstDayNextM';

/**
 * Zwraca obiekt daty przypadający na konkretny dzień kolejnego miesiąca.
 * Jeśli liczba przekracza liczbę dni miesiąca kolejnego miesiąca, to
 * wyjdzie poza ten miesiąc
 * @param {Date} monthDate Np. '2021-01-01'
 * @param {number} exactDay Np. 20
 * @returns {Date} Np. 2021-02-20
 */

export const getExactDayNextMonth = (monthDate, exactDay) => {
	const firstOfNextMonth = getFirstDayNextM(monthDate, 1);
	return getDateAfter(firstOfNextMonth, exactDay - 1);
};

import { isDate } from '../utils/isDate';

/**
 * Zwraca różnicę w dniach między dwoma datami.
 * Nie bierze pod uwagę która data jest starsza
 *
 * @example
 * getDaysDiff('2021-01-01', '2021-01-02'); // -> 1
 * getDaysDiff('2021-01-01', '2020-12-31'); // -> 1
 *
 * @param {Date|string} a Zarówno obiekt daty jak i string np. "2019-01-01"
 * @param {Date|string} b Zarówno obiekt daty jak i string np. "2019-01-01"
 * @returns {number}
 */

const getDaysDiff = (a, b) => {
	const _MS_PER_DAY = 1000 * 60 * 60 * 24;

	const dateA = /** @type {Date} */ (isDate(a) ? a : new Date(a));
	const dateB = /** @type {Date} */ (isDate(b) ? b : new Date(b));

	const utc1 = Date.UTC(
		dateA.getFullYear(),
		dateA.getMonth(),
		dateA.getDate()
	);
	const utc2 = Date.UTC(
		dateB.getFullYear(),
		dateB.getMonth(),
		dateB.getDate()
	);

	const timeDiff = Math.abs(utc2 - utc1);

	return Math.floor(timeDiff / _MS_PER_DAY);
};

export { getDaysDiff };

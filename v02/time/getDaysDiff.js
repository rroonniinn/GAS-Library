import { isDate } from '../utils/isDate';

/**
 * Zwraca różnicę w dniach między dwoma datami. Jeśli trzeci,
 * opcjonalny argument nie jest podany (domyślnie `false`) to nie bierze
 * pod uwagę, która data jest starsza - zwraca wartość bezwzględną.
 * Jeśli argument przyjmuje wartość `true` to jeśli b jest datą
 * wcześniejszą to zwróci ujemna różnicę dni.
 *
 * @example
 * getDaysDiff('2021-01-01', '2021-01-02'); // -> 1
 * getDaysDiff('2021-01-01', '2020-12-31'); // -> 1
 *
 * @param {Date|string} a Zarówno obiekt daty jak i string np. "2019-01-01"
 * @param {Date|string} b Zarówno obiekt daty jak i string np. "2019-01-01"
 * @param {boolean} isRelative Info czy zwrócona wartość ma być relatywna
 * @returns {number}
 */

const getDaysDiff = (a, b, isRelative = false) => {
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

	const timeDiff = !isRelative ? Math.abs(utc2 - utc1) : utc2 - utc1;

	return Math.floor(timeDiff / _MS_PER_DAY);
};

export { getDaysDiff };

/**
 * UT - done
 */

/**
 * Zwraca różnicę w dniach między dwoma datami.
 * Jeśli b jest datą wcześniejszą to zwróci ujemna różnicę dni
 * @memberof Lib_Date
 *
 */

const getDaysDiffRelative = (a, b) => {
	// a, b - zarówno obiekt daty jak i string np. "2019-01-01"
	const _MS_PER_DAY = 1000 * 60 * 60 * 24;

	// weryfikacja czy a,b to stringi czy obiekty
	const dateA = typeof a === 'object' ? a : new Date(a);
	const dateB = typeof b === 'object' ? b : new Date(b);

	// Discard the time and time-zone information.
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

	// Kolejność podawanych day bez znaczenia
	const timeDiff = utc2 - utc1;

	return Math.floor(timeDiff / _MS_PER_DAY);
};

export { getDaysDiffRelative };

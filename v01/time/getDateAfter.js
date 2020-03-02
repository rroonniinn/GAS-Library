/**
 * Zwraca datę przesuniętą o liczbę dni wskazaną w argumencie
 * @memberof Lib_Date
 *
 */

const getDateAfter = (date, days) => {
	// date - zarówno obiekt daty jak i string np. "2019-01-01"
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
};

export { getDateAfter };

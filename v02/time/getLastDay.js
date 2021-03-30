/**
 * Zwraca obiekt daty ustawiony na ostatni dzień miesiąca
 * w którym wypada przekazana w argumencie data
 * (nie mutuje przekazanego argumentu)
 *
 * @example
 * getLastDay(new Date(2021, 0, 1)); // -> Date 2021-01-31
 * getLastDay(new Date(2021, 0, 15)); // -> Date 2021-01-31
 * getLastDay(new Date(2021, 0, 31)); // -> Date 2021-01-31
 * getLastDay(new Date(2021, 1, 1)); // -> Date 2021-02-28
 * getLastDay(new Date(2021, 1, 15)); // -> Date 2021-02-28
 * getLastDay(new Date(2021, 1, 28)); // -> Date 2021-02-28
 *
 * @param {Date} date Obiekt daty
 * @returns {Date} Obiekt daty ustawiony na ostatni dzień miesiąca
 */

const getLastDay = date =>
	new Date(date.getFullYear(), date.getMonth() + 1, 0);

export { getLastDay };

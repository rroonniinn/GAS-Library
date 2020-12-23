/**
 * Zwraca obiekt daty ustawiony na ostatni dzień miesiąca
 * w którym wypada przekazana w argumencie data
 * (nie mutuje przekazanego argumentu)
 * @param {Date} date Obiekt daty
 * @returns {Date} Obiekt daty
 */

const getLastDay = date =>
	new Date(date.getFullYear(), date.getMonth() + 1, 0);

export { getLastDay };

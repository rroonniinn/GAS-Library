/**
 * Zwraca obiekt daty ustawiony na ostatni dzień miesiąca
 * w którym wypada przekazana w argumencie data
 * (nie mutuje przekaznego argumentu)
 *
 * @memberof Lib_Date
 *
 * @param {dateObj} dateObj Obiekt daty
 * @returns {dateObj} Obiekt daty
 */

const getLastDay = dateObj =>
	// dateObj - obiekt daty
	new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0);

export { getLastDay };

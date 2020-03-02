/**
 * Zwraca obiekt daty ustawiony na 1 dzień miesiąca
 * w którym wypada przekazana w argumencie data
 * (nie mutuje przekaznego argumentu)
 *
 * @memberof Lib_Date
 *
 * @param {dateObj} dateObj Obiekt daty
 * @returns {dateObj} Odpowiedni obiekt daty
 */

const getFirstDay = dateObj =>
	new Date(dateObj.getFullYear(), dateObj.getMonth(), 1);
export { getFirstDay };

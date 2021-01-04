/**
 * Zwraca obiekt daty ustawiony na 1 dzień miesiąca
 * w którym wypada przekazana w argumencie data
 * (nie mutuje przekazanego argumentu)
 * @param {Date} date Obiekt daty
 * @returns {Date} Odpowiedni obiekt daty
 */

const getFirstDay = date =>
	new Date(date.getFullYear(), date.getMonth(), 1);
export { getFirstDay };

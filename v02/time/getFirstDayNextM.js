/**
 * Zwraca obiekt daty ustawiony na 1 dzień KOLEJNEGO miesiąca
 * w którym wypada przekazana w argumencie data. Nie mutuje
 * przekazanego argumentu. Opcjonalny parametr offset pozwala
 * przesunąć datę o dalsze miesiące. Tenże parametr może
 * przyjąć negatywną wartość - wtedy funkcja zwraca datę
 * wcześniejszą. Jeśli ten parametr ustawić na 0, wtedy zwróci
 * datę pierwszego dnia miesiąca przekazanego.
 *
 * @example
 * getFirstDayNextM(new Date(2021, 0, 1)); // -> Date 2021-02-01
 * getFirstDayNextM(new Date(2021, 0, 15), 1); // -> 2021-02-01
 * getFirstDayNextM(new Date(2021, 0, 15), 0); // -> 2021-01-01
 * getFirstDayNextM(new Date(2021, 0, 1), 3); // -> 2021-04-01
 * getFirstDayNextM(new Date(2021, 0, 1), -1); // -> Date 2020-12-01
 *
 * @param {Date} date Obiekt daty
 * @param {number} [offset] Liczba miesięcy przesunięcia - domyślnie jeden miesiąc
 * @returns {Date} Odpowiedni obiekt daty
 */

const getFirstDayNextM = (date, offset = 1) =>
	new Date(date.getFullYear(), date.getMonth() + offset, 1);

export { getFirstDayNextM };

/**
 * UT - done
 */

/**
 * Zwraca obiekt daty ustawiony na 1 dzień KOLEJNEGO miesiąca
 * w którym wypada przekazana w argumencie data
 * (nie mutuje przekazanego argumentu). Opcjonalny parametr offset pozwala
 * przesunąć datę o dalsze miesiące.
 * @param {Date} date Obiekt daty
 * @param {number} [offset] Liczba miesięcy przesunięcia - domyślnie jeden miesiąc
 * @returns {Date} Odpowiedni obiekt daty
 */

const getFirstDayNextM = (date, offset = 1) =>
	new Date(date.getFullYear(), date.getMonth() + offset, 1);

export { getFirstDayNextM };

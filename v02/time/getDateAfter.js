/**
 * Zwraca datę przesuniętą o liczbę dni wskazaną w argumencie.
 * Liczba dni może być ujemna - wtedy zwraca datę wcześniejszą.
 * Jako pierwszy argument przyjmuje zarówno Datę jak i string
 * w formacie `2021-12-01` lub `2021.12.01` (przyjmuje również
 * format amerykański, ale jego nie stosuję)
 *
 * @example
 * getDateAfter(new Date(2021, 0, 1), 0); // -> Date 2021-01-01
 * getDateAfter(new Date(2021, 0, 1), 1); // -> Date 2021-01-02
 * getDateAfter(new Date(2021, 0, 1), -1); // ->   Date 2020-12-31
 * getDateAfter(new Date(2021, 0, 1), 35); // ->   Date 2021-02-05
 * getDateAfter('2021-12-01', 1); // -> Date 2021-12-02;
 * getDateAfter('2021.12.01', 1); // -> Date 2021-12-02;
 *
 * @param {Date|string} date Zarówno obiekt daty jak i string np. "2019-01-01"
 * @param {number} days Przesunięcie daty w dniach
 * @returns {Date} Obiekt daty z przesuniętym dniem
 */

const getDateAfter = (date, days) => {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	result.setHours(0);
	return result;
};

export { getDateAfter };

/**
 * UT - done
 */

/**
 * Zwraca obiekt daty ze znormalizowanymi godzinami - służy do wszelkich
 * porównań w których nie interesuje nas różnica godzinowa / minutowa
 * pomiędzy porównywanymi datami.
 *
 * Zatem po użyciu tej funkcji obie poniże daty będą sobie równe
 * (mimo, że mają inne godziny )
 * 'Thu. Jan 02 00:00:00 GMT+01:00 2020';
 * 'Thu. Jan 02 01:00:00 GMT+01:00 2020'
 *
 * @param {Date} dateObj Obiekt daty do normalizacji
 * @returns {Date} Obiekt daty po normalizacji
 */
export const getNormalizedDate = dateObj =>
	new Date(dateObj.toDateString());

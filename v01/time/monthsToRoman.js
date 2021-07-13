/**
 * Zamienia numery miesięcy w notacji arabskiej na rzymską.
 * Przyjmuje numery od 0-11 jako styczeń-grudzień (zgodnie z
 * indeksacją metody Dare.getMonth())
 * @param {number} number Liczba od 0 do 11
 * @returns {string} Arabskie oznaczenie miesięcy I - XII
 */

export const monthsToRoman = number =>
	[
		'I',
		'II',
		'III',
		'IV',
		'V',
		'VI',
		'VII',
		'VIII',
		'IX',
		'X',
		'XI',
		'XII',
	][number];

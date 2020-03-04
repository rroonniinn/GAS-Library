/* eslint-disable complexity */

/**
 * Zwraca informację o przekazanym rodzaju zakresu komórek.
 * Zwraca kod typu:
 * Dla A2:E4 -> regular;
 * Dla A2 -> letNum;
 * Dla A -> let;
 * Dla 1 -> num;
 * Dla '1' -> num;
 * Dla innych wartości, lub "nie stringów" wyrzuca błąd
 *
 * @param {String} rangeStr Zakres
 * @returns {String} kod
 */

const getRangeType = rangeStr => {
	if (typeof rangeStr !== 'string' && typeof rangeStr !== 'number')
		throw new Error('Only string or numbers to getRangeType');

	if (/:/.test(rangeStr)) return 'regular';
	if (/[A-Z]+[1-9]+/.test(rangeStr)) return 'letNum';
	if (/[A-Z]+/.test(rangeStr)) return 'let';
	if (/[1-9]+/.test(rangeStr)) return 'num';

	throw new Error('Not valid range');
};

export { getRangeType };

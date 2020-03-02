/**
 * Zamienia nagłówek (np. A) ma numer kolumny (np. 1)
 * Wzięte stąd: https://stackoverflow.com/questions/21229180/convert-column-index-into-corresponding-column-letter/21231012#21231012
 * @memberof Lib_Gas
 * @param {string} letter Identyfikator kolumny np. 'B'
 * @returns {number} Numer kolumny np. 2
 */
const letterToColumn = letter => {
	let column = 0;
	const { length } = letter;
	for (let i = 0; i < length; i++) {
		// column += (letter.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
		column += (letter.charCodeAt(i) - 64) * 26 ** (length - i - 1);
	}
	return column;
};
export { letterToColumn };

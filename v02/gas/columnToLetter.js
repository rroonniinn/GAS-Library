/* eslint-disable no-param-reassign */

/**
 * Zmienia numer kolumny na odpowiednią literę nagłowka (np. 1 na A).
 * Wzięte stąd: https://stackoverflow.com/questions/21229180/convert-column-index-into-corresponding-column-letter
 *
 * @param {Number} column Numer kolumny
 * @returns {String} Nagłówek kolumny
 */

const columnToLetter = column => {
	let temp;
	let letter = '';
	while (column > 0) {
		temp = (column - 1) % 26;
		letter = String.fromCharCode(temp + 65) + letter;
		column = (column - temp - 1) / 26;
	}
	return letter;
};

export { columnToLetter };

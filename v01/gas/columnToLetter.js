/* eslint-disable no-param-reassign */

/**
 * Zamiana numeru kolumny na literę
 * from: https://stackoverflow.com/questions/21229180/convert-column-index-into-corresponding-column-letter
 *
 * @param {number} column
 * @returns {string}
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

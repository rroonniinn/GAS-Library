import { columnToLetter } from './../../v01/gas/columnToLetter';

/**
 * Przyjmuje Range jako tablicę [row, column, numRows, numColumns],
 * zwraca jako notację A1 (np. A1:B3)
 * @param {number[]} arr
 * @returns {string}
 */
const changeRangeArrIntoA1Notation = arr => {
	const startColumn = columnToLetter(arr[1]);
	const startRow = arr[0];
	const endColumn = columnToLetter(arr[1] + arr[3] - 1);
	const endRow = arr[0] + arr[2] - 1;

	return `${startColumn}${startRow}:${endColumn}${endRow}`;
};

export { changeRangeArrIntoA1Notation }

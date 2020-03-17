import { randomIntegersArray } from './randomIntegersArray';

/**
 * Generates array 2d filled with random integers from 0 to 1000
 *(both inclusive)
 *
 * @param {number} rows Number of rows
 * @param {number} cols Number of cols
 */

const randomIntegersArray2d = (rows, cols) => {
	const arr = [];
	while (arr.length < rows) {
		arr.push(randomIntegersArray(cols, 0, 1000, false, false, false));
	}
	return arr;
};
export { randomIntegersArray2d };

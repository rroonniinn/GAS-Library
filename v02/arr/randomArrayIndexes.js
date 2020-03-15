/* eslint-disable max-params */
import { randomIntegersArray } from '../num/randomIntegersArray';

const errorMsg = 'Quantity is biger than array length!';

/**
 * Returns array of unique, random indexes of passed array
 *
 * @param {array} arr Data array
 * @param {number} quant Quantity of indexes
 * @param {boolean} sort Whether to sort indexes
 * @param {boolean} startEnd Whether to include first and last index
 * @returns {number[]} Array of random indexes
 */

const randomArrayIndexes = (arr, quant, startEnd, sort) => {
	if (quant > arr.length) throw new Error(errorMsg);

	return randomIntegersArray(
		quant,
		0,
		arr.length - 1,
		true,
		startEnd,
		sort
	);
};

export { randomArrayIndexes };

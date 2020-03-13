import { randomIntegersArray } from '../num/randomIntegersArray';

/**
 * Returns array of unique, random indexes of passed array
 *
 * @param {[][]} arr Data array
 * @param {number} quantity Quantity of indexes
 * @param {boolean} sort Whether to sort indexes
 * @param {boolean} mustInclStarEnd Whether to include first and last index
 * @returns {number[]} Array of random indexes
 */

const randomArrayIndexes = (arr, quantity, mustInclStarEnd, sort) => {
	if (quantity > arr.length) {
		throw new Error('Quantity is biger than array length!');
	}
	return randomIntegersArray(
		quantity,
		0,
		arr.length - 1,
		true,
		mustInclStarEnd,
		sort
	);
};

export { randomArrayIndexes };

/* eslint-disable max-params */

import { randomArrayIndexes } from './randomArrayIndexes';
import { randomShuffleArray } from './randomShuffleArray';

/**
 * Returns random elements from an array in given quantity
 *
 * @param {array} arr Array with data
 * @param {number} quantity How many elements to return
 * @param {boolean} mustInclStarEnd Whether to return first and last el.
 * @param {boolean} sort Whether to sort returned alements according to oryginal positions
 * @returns {array} Array with random elements
 */

const randomFromArray = (
	arr,
	quantity,
	mustInclStarEnd = false,
	sort = false
) => {
	const inds = randomArrayIndexes(arr, quantity, mustInclStarEnd, true);
	const final = arr.filter((row, i) => inds.includes(i));
	return sort ? final : randomShuffleArray(final);
};

export { randomFromArray };

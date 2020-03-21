/* eslint-disable max-len */
/* eslint-disable max-params */

import { randomArrayIndexes } from './randomArrayIndexes';
import { randomShuffleArray } from './randomShuffleArray';

/**
 * Returns random elements from an array in given quantity
 *
 * @param {array} arr Array with data
 * @param {number} quant How many elements to return. Default = arr.length
 * @param {boolean} [startEnd] Whether to include first and last element. Default = false
 * @param {boolean} [sort] Whether to sort elements according to their original positions. Default = false
 * @returns {array} Array with random elements
 */

const randomFromArray = (
	arr,
	quant = arr.length,
	startEnd = false,
	sort = false
) => {
	const idxs = randomArrayIndexes(arr, quant, startEnd, true);
	const final = arr.filter((row, i) => idxs.includes(i));
	return sort ? final : randomShuffleArray(final);
};

export { randomFromArray };

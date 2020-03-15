/* eslint-disable max-params */
/* eslint-disable complexity */
import { randomShuffleArray } from '../arr/randomShuffleArray';
import { randomInteger } from './randomInteger';

/**
 * Returns an array of random unique numbers from given range
 *
 * @param {number} quant Quantity of numbers
 * @param {number} min Min value
 * @param {number} max Max value
 * @param {boolean} startEnd Whether to include min and max value
 * @param {boolean} sort Whether to sort final values
 * @param {boolean} unique Whether values have to be unique
 * @param {number[]} arr Tablica startowa indeksów (używna jeśli któreś
 * indeksy mają być umieszczone w tablicy)
 * @returns {number[]}
 */

const randomIntegersArray = (
	quant,
	min,
	max,
	unique = false,
	startEnd = false,
	sort = false,
	arr = []
) => {
	if (unique && quant > max - min + 1) {
		throw new Error('To restrictive min and max for given quantity');
	}

	if (arr.length === quant) {
		return sort ? arr.sort((a, b) => a - b) : randomShuffleArray(arr);
	}

	if (startEnd) {
		arr.push(min, max);
	}

	const random = randomInteger(min, max);

	if (unique) {
		if (!arr.includes(random)) {
			arr.push(random);
		}
	} else {
		arr.push(random);
	}

	return randomIntegersArray(quant, min, max, unique, false, sort, arr);
};

export { randomIntegersArray };

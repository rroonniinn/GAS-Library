/* eslint-disable max-params */
/* eslint-disable complexity */
import { randomInteger } from './randomInteger';
import { randomShuffleArray } from './randomShuffleArray';

/**
 * Returns an array of random unique numbers from given range
 *
 * @param {number} quantity Number of numbers
 * @param {number} min Min index
 * @param {number} max Max index
 * @param {boolean} mustInclStarEnd Whether to include first and last index
 * @param {boolean} sort Whether to sort indexes
 * @param {boolean} unique Whether values have to be unique
 * @param {number[]} arr Tablica startowa indeksów (używna jeśli któreś
 * indeksy mają być umieszczone w tablicy)
 * @returns {number[]}
 */

const randomIntegersArray = (
	quantity,
	min,
	max,
	unique = false,
	mustInclStarEnd = false,
	sort = false,
	arr = []
) => {
	if (unique && quantity > max - min + 1) {
		throw new Error('To restrictive min and max for given quantity');
	}

	if (arr.length === quantity) {
		return sort ? arr.sort((a, b) => a - b) : randomShuffleArray(arr);
	}

	if (mustInclStarEnd) {
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

	return randomIntegersArray(
		quantity,
		min,
		max,
		unique,
		false,
		sort,
		arr
	);
};

export { randomIntegersArray };

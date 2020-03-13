/* eslint-disable max-params */

import { randomArrayIndexes } from './randomArrayIndexes';
import { randomShuffleArray } from './randomShuffleArray';

/**
 * Returns random elements from an array
 *
 * @param {object} arr An Array with data
 * @param {number} amount Liczba transakcji do pobrania
 * @param {boolean} mustInclStarEnd Czy lista ma zawierać najbardziej
 * skrajne transakcje
 * @param {boolean} sort Czy wyniki mają być posortowane czy nie
 * @returns {Array[]} Tablica 2d transakcji
 */

const randomFromArray = (
	arr,
	amount,
	mustInclStarEnd = false,
	sort = false
) => {
	const indexes = randomArrayIndexes(arr, amount, mustInclStarEnd, true);
	const final = arr.filter((row, i) => indexes.includes(i));
	return sort ? final : randomShuffleArray(final);
};

export { randomFromArray };

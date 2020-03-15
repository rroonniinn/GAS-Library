/**
 * Shuffle random array of numbers. Based on "the right" algorithm:
 * https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
 *
 * @param {array} arr Array of elements
 * @returns {array} Shuffled array
 */

const randomShuffleArray = arr => {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i);
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
};

export { randomShuffleArray };

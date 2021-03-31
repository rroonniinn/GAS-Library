/**
 * Returns (pseudo) random integer from min - max range.
 * Min and max included
 * Taken from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
 *
 * @param {number} min Min value (inclusive)
 * @param {number} max Max value (inclusive)
 * @returns {number} Pseudo random number
 */

const randomInteger = (min, max) =>
	Math.floor(Math.random() * (max - min + 1) + min);

export { randomInteger, randomInteger as getRandomInt };

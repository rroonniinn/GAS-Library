/**
 * Returns (pseudo) random integer from min - max range (inclusive)
 *
 * @param {number} min Min value (inclusive)
 * @param {number} max Max value (inclusive)
 */

const randomInteger = (min, max) =>
	Math.floor(Math.random() * (max - min + 1) + min);

export { randomInteger };

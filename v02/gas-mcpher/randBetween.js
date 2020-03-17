/**
 * randBetween
 * get an random number between x and y
 * @param {number} min the lower bound
 * @param {number} max the upper bound
 * @return {number} the random number
 * */
const randBetween = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export { randBetween };

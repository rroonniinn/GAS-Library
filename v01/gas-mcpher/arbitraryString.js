import { randBetween } from './randBetween';
/**
 * get an arbitrary alpha string
 * @param {number} length of the string to generate
 * @return {string} an alpha string
 * */
const arbitraryString = length => {
	let s = '';
	for (let i = 0; i < length; i++) {
		s += String.fromCharCode(randBetween(97, 122));
	}
	return s;
};

export { arbitraryString };

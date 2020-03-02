import { isUndefined } from './isUndefined';
import { arbitraryString } from './arbitraryString';

/**
 * generateUniqueString
 * get a unique string
 * @param {number} optAbcLength the length of the alphabetic prefix
 * @return {string} a unique string
 * */
const generateUniqueString = optAbcLength => {
	const abcLength = isUndefined(optAbcLength) ? 3 : optAbcLength;
	return new Date().getTime().toString(36) + arbitraryString(abcLength);
};

export { generateUniqueString };

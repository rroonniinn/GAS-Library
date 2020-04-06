/* eslint-disable max-len */
/**
 * Sprawdza czy przekazany string jest urlem.
 * Wzięte stąd: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
 *
 * @param {string} str
 */

const isUrl = str => {
	const res = str.match(
		/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
	);
	return res !== null;
};

export { isUrl };

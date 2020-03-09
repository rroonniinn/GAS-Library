/**
 * Weryfikuje czy przekazana wartośc jest tablicą 2d
 *
 * @param {Any} val Sprawdzana wartość
 * @returns {Boolean} true / false
 */

const isArray2d = val => {
	if (!Array.isArray(val)) return false;
	if (!Array.isArray(val[0])) return false;
	return true;
};

export { isArray2d };

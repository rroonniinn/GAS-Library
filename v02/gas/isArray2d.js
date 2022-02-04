import { isEmpty } from './isEmpty';
/**
 * Weryfikuje czy przekazana wartość jest tablicą 2d
 *
 * @param {any} val Sprawdzana wartość
 * @returns {Boolean} true / false
 */

const isArray2d = val => {
	if (isEmpty(val)) return false;
	if (!Array.isArray(val)) return false;
	return val.every(cell => Array.isArray(cell));
};

export { isArray2d };

/**
 * Weryfikuje czy przekazana wartość jest tablicą 2d
 * @param {*} val
 * @returns {boolean}
 */

const isArray2d = val => {
	if (!Array.isArray(val)) {
		return false;
	}

	if (val.length === 0) {
		return false;
	}

	return val.every(el => Array.isArray(el));
};

export { isArray2d };

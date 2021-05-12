/**
 * Bazowa weryfikacja czy output uzyskany z GAS jest
 * standardowym obiektem jakim się posługuję
 * @param {*} out Return z GAS
 * @returns
 */

const isStandardGasReturn = out => {
	if (typeof out !== 'object') {
		return false;
	}

	if (out.success !== undefined && out.data && out.log) {
		return true;
	}

	return false;
};

export { isStandardGasReturn };

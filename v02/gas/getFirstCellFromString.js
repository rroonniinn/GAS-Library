/**
 * Z przekazanego zakresu jako stringa w formacie 'A1:B3'
 * zwraca tylko pierwszą komórkę jako string. W tym przypadku 'A1'
 *
 * @param {String} str Zakres typu A1:B2, A1:2, A1:B
 * @returns {String}
 */

const getFirstCellFromString = str => {
	const regExRes = /([A-Z]+[0-9]+?):/.exec(str);
	if (!regExRes) {
		throw new TypeError(
			`Not valid string to "getFirstCellFromString".
			Expected something like "A3:B4", got ${str}`
		);
	}
	return regExRes[1];
};
export { getFirstCellFromString };

/**
 * BUG? Patern przepuszca sting A0:.... można by to poprawić kiedyś
 */

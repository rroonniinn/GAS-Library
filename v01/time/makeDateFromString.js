/**
 * Zwraca poprawną datę dla ciągu typu '2010-01-01'
 *
 * @param {string} str String typu '2010-01-01' lub '2010.01.01'
 * @returns {Date} Poprawny obiekt daty
 */
const makeDateFromString = str => {
	const year = Number(/^([0-9]+)\D/.exec(str)[1]);
	const month = Number(/\D([0-9]+)\D/.exec(str)[1]);
	const day = Number(/\D([0-9]+)$/.exec(str)[1]);
	return new Date(year, month - 1, day);
};

export { makeDateFromString };

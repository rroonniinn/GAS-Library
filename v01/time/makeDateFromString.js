/**
 * Zwraca poprawną datę dla stringa typu '2010-01-01'
 *
 * @param {string} str String typu '2010-01-01' lub '2010.01.01'
 * @returns {string} Poprawny obikt daty
 */
const makeDateFromString = str => {
	const year = /^([0-9]+)\D/.exec(str)[1];
	const month = /\D([0-9]+)\D/.exec(str)[1];
	const day = /\D([0-9]+)$/.exec(str)[1];
	return new Date(year, month - 1, day);
};

export { makeDateFromString };

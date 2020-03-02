/**
 * Zwraca poprawny obiekt daty dla stringa o "odwróconej strukturze" np.'03-05-1976' lub '03.05.1976'.
 * Rozdzielacz cyfr może być dowolnym znakiem.
 * @memberof Lib_Str
 *
 * @param {string} str Data typu '03-05-1976' lub '03.05.1976'
 * @returns {Date} Poprawny obiekt daty
 */
const reverseDate = str => {
	const day = /^([0-9]+)\D/.exec(str)[1];
	const month = /\D([0-9]+)\D/.exec(str)[1];
	const year = /\D([0-9]+)$/.exec(str)[1];
	return new Date(year, month - 1, day);
};

export { reverseDate };

/**
 * Zamienia ciąg spacji w jedną spację. Nie rozwala znaków nowej linii.
 * Wzięte stąd: https://stackoverflow.com/questions/3871816/is-there-a-javascript-regular-expression-to-remove-all-whitespace-except-newline
 * @memberof Lib_Str
 *
 * @param {string} str String do poprawinia
 * @returns {string} Poprawiony string
 */
const removeConsecutiveSpaces = str => {
	const newStr = typeof str !== 'string' ? String(str) : str;
	return newStr.replace(/[ \t\r]+/g, ' ');
};

export { removeConsecutiveSpaces };

// return newStr.replace(/\s+/g, ' ').trim(); // to rozwiązanie usuwało również znaki nowej linii

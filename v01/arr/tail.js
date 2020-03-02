/**
 * Zwraca ciąg znaków lub tablicę pozbawioną pierwszego elementu
 * Dla pustej tablicy lub ciągu zwraca pustą tablicę lub ciąg
 *
 * @param {Array|String} el Tablica lub String
 * @returns {Array|String}
 */
const tail = el => {
	if (typeof el === 'string' || Array.isArray(el)) {
		return el.slice(1);
	}
	throw new Error('Tail is possible only on strings and arrays');
};

export { tail };

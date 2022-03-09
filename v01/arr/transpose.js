/**
 * Zamiana poziomej tablicy na pionową (2D)
 * @param {array} horArr
 * @returns {array[]}
 */

const transpose = horArr =>
	horArr.reduce((acc, cell) => {
		acc.push([cell]);
		return acc;
	}, []);

/**
 * FIXED
 * Zamiana poziomej tablicy na pionową (2D)
 * https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
 * @param {array} matrix
 * @returns {array[]}
 */

const transpose2 = matrix =>
	matrix.reduce(
		(prev, next) =>
			next.map((item, i) => (prev[i] || []).concat(next[i])),
		[]
	);

export { transpose, transpose2 };

/**
 * TOFIX: WYDAJE MI SIĘ ŻE W PIERWSZEJ WERSJI JEST BŁĄD!
 * DLA LEGACY ZOSTAWIAM GO, ALE WYSTAWIAM RÓWNIEŻ POPRAWIONĄ
 */

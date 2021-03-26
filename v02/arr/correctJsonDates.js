/**
 * Poprawia daty w tablicach uzyskanych z JSON.parse.
 * Przywraca daty jako obiekty. Przyjmuje tablice 1d i 2d.
 * Zwraca nową kopię tablicy
 * @param {array} postJsonArr
 * @returns {array}
 */

const correctJsonDates = postJsonArr => {
	const isJsonDate = v => /\d{4}-\d{2}-\d{2}T/.test(v);

	return postJsonArr.map(el => {
		if (Array.isArray(el)) {
			return el.map(cell =>
				isJsonDate(cell) ? new Date(cell) : cell
			);
		}

		return isJsonDate(el) ? new Date(el) : el;
	});
};

export { correctJsonDates };

/**
 * UT - done
 */

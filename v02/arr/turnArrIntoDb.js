/* eslint-disable max-params */
/**
 * Zamienia tablicę na obiekt o strukturze bazy danych traktując
 * pierwszy wiersz jako klucze
 *
 * @param {Array[]} arr
 * @returns {Object}
 */

const turnArrIntoDb = arr =>
	arr.reduce((obj, row, i, oryginalArr) => {
		if (i === 0) {
			row.forEach(headerEl => (obj[headerEl] = []));
		} else {
			row.forEach((el, index) =>
				obj[oryginalArr[0][index]].push(el)
			);
		}
		return obj;
	}, {});

export { turnArrIntoDb };

/**
 * TODO: zamiana liter na małe w nagłówku i usunięcie spacji,
 * znaków specjalnych itp (w nagłówku)
 */

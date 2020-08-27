/* eslint-disable max-params */
/**
 * Zamienia tablicę na obiekt o strukturze bazy danych traktując
 * pierwszy wiersz jako klucze
 *
 * @param {Array[]} arr
 * @returns {Object<string, array>}
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
 * TODO: co z tablicą w której są puste komórki w wierszach? Szczególnie
 * w nagłówku?
 * TODO: zamiana liter w nagłówku na camelCase i usunięcie spacji,
 */

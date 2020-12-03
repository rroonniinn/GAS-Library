import { getDateAsSimpleStr } from '../../v01/time/getDateAsSimpleStr';
import { isDateStr } from '../../v01/time/isDateStr';

/**
 * Przyjmując tablicę post JSON-ową zawierający m.in. stringi daty,
 * zamienia je na normalne daty. Pozostałych wartości nie zmienia.
 * Przyjmuje zarówno tablice 2d jak i płaskie.
 * @param {array} arr Tablica 1d lub 2d
 * @param {'object'|'string'} type Jaki mi być docelowy format daty - Date czy Simple String
 * @returns {array}
 */

const restoreDateFromJsonArr = (arr, type) =>
	arr.map(row =>
		row.map(el =>
			isDateStr(el)
				? type === 'string'
					? getDateAsSimpleStr(new Date(el))
					: new Date(el)
				: el
		)
	);

export { restoreDateFromJsonArr };

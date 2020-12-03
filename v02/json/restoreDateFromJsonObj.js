import { isDateStr } from '../../v01/time/isDateStr';

/**
 * Przyjmując obiekt post JSON-owy zawierający m.in. stringi daty,
 * zamienia je na normalne daty. Pozostałych wartości nie zmienia
 * @param {Object<string, any>} postJsonObj
 */

const restoreDateFromJsonObj = postJsonObj =>
	Object.entries(postJsonObj)
		.map(([key, val]) => [key, isDateStr(val) ? new Date(val) : val])
		.reduce((res, el) => {
			const [key, val] = el;
			res[key] = val;
			return res;
		}, {});

export { restoreDateFromJsonObj };

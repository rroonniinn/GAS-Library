import { isSheet } from './isSheet';

/**
 * Usuwa wszelkie filtry we wskazanym arkuszu
 * Jako arkusz przyjmuje obiekt arkusza.
 *
 * @param {Object} sheetObj Nazwa arkusza
 * @param {string} [fileId] Id pliku
 * @returns {Object} Obiekt arkusza
 */

const removeFilter = sheetObj => {
	if (!isSheet(sheetObj))
		throw new TypeError(
			'Not Sheet Object was pased into "removeFilter"'
		);

	const filter = sheetObj.getDataRange().getFilter();
	if (filter) filter.remove();

	return sheetObj;
};

export { removeFilter };

import { getSheet } from './getSheet';

/**
 * Usuwa wszelkie filtry we wskazanym arkuszu
 * Jako arkusz przyjmuje albo string z nazwą arkusza,
 * albo obiekt arkusza. Jeśli drugi parametr nie jest podany
 * - pobiera arkusz z bieżącego pliku (bound)
 *
 * @memberof Lib_Gas
 *
 * @param {string|Object} sheet Nazwa arkusza
 * @param {string} [fileId] Id pliku
 * @returns {Object} Obiekt arkusza

 */

const removeFilter = (sheet, fileId) => {
	const sheetToGo = (() => {
		if (typeof sheet === 'string') {
			return getSheet(sheet, fileId);
		}
		return sheet;
	})();

	const filter = sheetToGo.getDataRange().getFilter();
	if (filter) filter.remove();

	return sheetToGo;
};

export { removeFilter };

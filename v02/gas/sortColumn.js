/* eslint-disable max-params */
import { letterToColumn } from './letterToColumn';
import { isColumn } from './isColumn';

const dirs = {
	az: true,
	asc: true,
	za: false,
	des: false,
};

const errorHandling = (sheetObj, col, dir) => {
	if (typeof sheetObj !== 'object')
		throw new TypeError(
			'Sheet object was not passed into "sortColumn"'
		);

	if (!isColumn(col))
		throw new TypeError(
			'Wrong type as "col" to "sortColumn" provided'
		);

	if (dirs[dir] === undefined)
		throw new TypeError(
			'Only "az", "asc", "za", "des" may be passed as dir to "sortColumn"'
		);
};

/**
 * Sortuje wkazaną kolumnę w przekazanym obiekcie arkusza.
 * Jako kolumnę przyjmuje zarówno numer jak i identyfikator (np. A).
 * Jako kolejność sortowania przyjmuje jeden ze stringów:
 * az, asc (rosnąco), za, des (malejąco).
 * Jeśli w arkuszu znajdują się headery (frozen) pozostawia je nietknięte
 * Jeśli kolumna poza zakresem, nic nie robi - zwraca obiekt arkusza
 *
 * PRZETESTOWANA (test zbudowany)
 *
 * @param {Object} sheetObj
 * @param {Number|String} col 1, 2, itd. lub 'A', 'AB' itd.
 * @param {String} dir Opcjonalny kierunek sortowania (domyślnie az)
 * az, asc (rosnąco), za, des (malejąco).
 * @returns {Object} Zwraca obiekt arkusza
 */

const sortColumn = (sheetObj, col, dir = 'az') => {
	errorHandling(sheetObj, col, dir);

	const colNum = typeof col === 'number' ? col : letterToColumn(col);

	if (colNum > sheetObj.getMaxColumns()) {
		console.log('Col number is grater than max columns');
		return sheetObj;
	}

	return sheetObj.sort(colNum, dirs[dir]);
};
export { sortColumn };

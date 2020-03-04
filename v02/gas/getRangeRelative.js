/* eslint-disable complexity */

import { getRangeType } from './getRangeType';
import { columnToLetter } from './columnToLetter';
import { getLastNotEmptyRowInCol } from './getLastNotEmptyRowInCol';
import { getLastNotEmptyColInRow } from './getLastNotEmptyColInRow';

/**
 * Przyjmując 4 możliwe zapisy zakresu, zwraca m.in relatywny zakres
 * uwzględniający znajdujące się w arkuszu dane. I tak dla przykładowego
 * arkusza o wymiarach A1:J10 (10 x 10) po przekazaniu zakresu:
 * 'A' - zakres zaczyna się od ostatniego pustego wiersza kolumny A,
 * kończy się na ostatniej kolumnie. Np. A3:J
 * '1' - zakres zaczyna się od ostatniej pustej kolumny wiersza 1,
 * kończy się na ostatnim wierszu. Np. C1:J
 * 'A1' - zakres zaczyna się w A1, kończy na ostatnim wierszu
 * i kolumnie Np. A1:J10 (bez względu na znajdujące się już w arkuszu dane)
 * 'A3:B5' zwraca nie zmieniony zakres
 *
 * @param {Object} sheetObj Obiekt arkusza
 * @param {String} userRange Zakres
 * @returns {Object} Obiekt o kluczach { range, rangeObj, sheetObj } gdzie
 * range {String}, rangeObj {Object}, sheetObj {Object}
 */

const getRangeRelative = (sheetObj, strRange) => {
	const opt = getRangeType(strRange);
	console.log('opt: ', opt);

	let range;

	if (opt === 'letNum') {
		const maxCols = sheetObj.getMaxColumns();
		range = `${strRange}:${columnToLetter(maxCols)}`;
	}

	if (opt === 'let') {
		const maxColsLet = columnToLetter(sheetObj.getMaxColumns());
		const starRow = getLastNotEmptyRowInCol(sheetObj, strRange) + 1;

		console.log('strRange: ', strRange);
		console.log('starRow: ', starRow);

		range = `${strRange}${starRow}:${maxColsLet}`;
	}

	if (opt === 'num') {
		const maxRows = sheetObj.getMaxRows();
		const startCol = getLastNotEmptyColInRow(sheetObj, strRange) + 1;
		const startColLet = columnToLetter(startCol);
		range = `${startColLet}${strRange}:${maxRows}`;
	}

	if (opt === 'regular') {
		range = strRange;
	}

	const rangeObj = sheetObj.getRange(range);

	return {
		range,
		rangeObj,
		sheetObj,
	};
};

export { getRangeRelative };

/**
 * Todo:
 * - dla przekazanego normalnego zakresu (np. A1:B11) oraz zapisu A11
 * mógłby sprawdzać czy pokrywa się z istniejącym zakresem całego
 * arkusza (np. może nie być 11 wiersza)
 */

/* eslint-disable max-params */
/* eslint-disable complexity */

import { columnToLetter } from './columnToLetter';
import { getLastNotEmptyColInRow } from './getLastNotEmptyColInRow';
import { getLastNotEmptyRowInCol } from './getLastNotEmptyRowInCol';
import { getRangeRestricted } from './getRangeRestricted';
import { getRangeType } from './getRangeType';

/**
 * Przyjmując 4 możliwe zapisy zakresu, zwraca m.in relatywny zakres
 * uwzględniający znajdujące się w arkuszu dane. I tak dla przykładowego
 * arkusza o wymiarach A1:J10 (10 x 10) po przekazaniu zakresu:
 * 'A' - zakres zaczyna się od ostatniego pustego wiersza kolumny A,
 * kończy się na ostatniej kolumnie. Np. A3:J
 * '1' (lub 1) - zakres zaczyna się od ostatniej pustej kolumny wiersza 1,
 * kończy się na ostatnim wierszu. Np. C1:J
 * 'A1' - zakres zaczyna się w A1, kończy na ostatnim wierszu
 * i kolumnie Np. A1:J10 (bez względu na znajdujące się już w arkuszu dane)
 * 'A3:B5' zwraca nie zmieniony zakres.
 *
 * Jeśli dodatkowo zostaną przekazane argumenty restHor i/lub restVer
 * wynikowy zakres będzie pomniejszony do przekazanej
 * liczny wierszy (restVer) i/lub kolumn (restHor)
 *
 * Chcą podać tylko restVer należy przekazać restHor z wartością null
 *
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet Sheet object
 * @param {string|number} strRange Zakres
 * @param {Number|null} restHor Ograniczają zakres w poziomie traktując
 * pierwszą komórkę (np. A1) jako początek zakresu. Zatem dla wynikowego
 * zakresu np. A1:C3 dla restHor = 2 dostaniemy A1:B3
 * @param {Number|null} restVer Ograniczają zakres w pionie traktując
 * pierwszą komórkę (np. A1) jako początek zakresu. Zatem dla wynikowego
 * zakresu np. A1:C3 dla restVer = 2 dostaniemy A1:C2
 * @returns {Object} Obiekt o kluczach { range, rangeObj, sheetObj } gdzie
 * range {String}, rangeObj {Object}, sheetObj {Object}
 */

const getRangeRelative = (
	sheet,
	strRange,
	restHor = null,
	restVer = null
) => {
	const opt = getRangeType(strRange);

	let rangeTmp;

	if (opt === 'letNum') {
		const maxCols = sheet.getMaxColumns();
		rangeTmp = `${strRange}:${columnToLetter(maxCols)}`;
	}

	if (opt === 'let') {
		const maxColsLet = columnToLetter(sheet.getMaxColumns());
		const starRow = getLastNotEmptyRowInCol(sheet, strRange) + 1;
		rangeTmp = `${strRange}${starRow}:${maxColsLet}`;
	}

	if (opt === 'num') {
		const maxRows = sheet.getMaxRows();
		const startCol = getLastNotEmptyColInRow(sheet, strRange) + 1;
		const startColLet = columnToLetter(startCol);
		rangeTmp = `${startColLet}${strRange}:${maxRows}`;
	}

	if (opt === 'regular') {
		rangeTmp = strRange;
	}

	// Jeśli potrzeba zmniejszenia zakresu
	const range =
		restHor || restVer
			? getRangeRestricted(rangeTmp, restHor, restVer)
			: rangeTmp;

	const rangeObj = sheet.getRange(range);

	return {
		range,
		rangeObj,
		sheetObj: sheet,
	};
};

export { getRangeRelative };

/**
 * Todo:
 * - dla przekazanego normalnego zakresu (np. A1:B11) oraz zapisu A11
 * mógłby sprawdzać czy pokrywa się z istniejącym zakresem całego
 * arkusza (np. może nie być 11 wiersza)
 */

/* eslint-disable max-params */
/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable max-params */

import { getColAndRowFromCellAsNum } from './getColAndRowFromCellAsNum';
import { getFirstCellFromString } from './getFirstCellFromString';
import { getRangeRelative } from './getRangeRelative';
import { isArray2d } from './isArray2d';
import { isSheet } from './isSheet';
import { letterToColumn } from './letterToColumn';
import { removeEmptyRowCol } from './removeEmptyRowCol';

/**
 * Values allowed in cleanup Options
 * @typedef {'nothing'|'everything'|'down'|'right'} cleanupOption
 * Usuwanie istniejących przed wklejeniem treści:
 * 'everything' - usuwa wszystko na prawo i w doł od lewej komórki
 * 'down' - usuwa wszystko w dół. Po prawej tylko na szerokość danych
 * 'right' - usuwa wszystko po prawej. W dół tylko do wysokości danych
 * 'nothing' - nic nie usuwa. Wartość domyślna.
 */

/**
 * Paste Options
 * @typedef {Object} PasteOptions
 * @property {cleanupOption} [cleanup]
 * @property {boolean} [removeBlanks] Usuwanie pustych kolumn i wierszy
 * z arkusza (po wklejeniu). Domyślnie 'false'
 */

/**
 * Typeguard checking
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @param {string|number} range
 * @param {array[]} arr
 * @param {PasteOptions} opt
 */

const typeGuard = (sheet, range, arr, opt) => {
	if (!isSheet(sheet))
		throw new TypeError('Only Sheet objects are allowed in "paste"');

	if (typeof range !== 'string' && typeof range !== 'number')
		throw new TypeError('Range should be string or number in "paste"');

	if (!isArray2d(arr)) {
		throw new TypeError('Only 2D arrays are allowed to "paste"');
	}

	if (opt.cleanup) {
		if (
			!['nothing', 'everything', 'down', 'right'].includes(
				opt.cleanup
			)
		)
			throw new TypeError(
				'Wrong keyword passed as "cleanup" to "paste"'
			);
	}
};

/**
 * Return final range based on received Cleanup Option:
 *
 * 'down' - Usuwa tylko dane w doł od komórki startowej
 * w kolumnach w których znajdują się wklejane dane.
 * Przydatna do wklejania danych ciągnących się w dół
 * w arkuszach w których znajdują się inne dane po prawej
 *
 * 'right' - Usuwa tylko dane znajdujące się prawej stronie
 * komórki startowej i tylko w wierszach zajmowanych przez nowe
 * dane. Przydatne do wklejania "szerokich, ale nie wysokich"
 * danych ciągnących się w poziomie (rzadko stosowane)
 *
 * 'everything' - Usuwa wszystko od górnej lewej komórki do końca
 * w prawo i w dół
 *
 * @param {cleanupOption} status
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet Sheet Object
 * @param {*} userRange
 * @param {*} restHor
 * @param {*} restVer
 * @returns
 */

const getRange = (status, sheet, userRange, restHor, restVer) => {
	if (status === 'down') {
		return getRangeRelative(sheet, userRange, restHor);
	}

	if (status === 'right') {
		return getRangeRelative(sheet, userRange, null, restVer);
	}

	/* Domyślna wartość - od górnej lewej komórki do końca
	w prawo i w dół  */

	return getRangeRelative(sheet, userRange);
};

/**
 * Obiekt z dodatkowymi opcjami dla funkcji "paste"
 * @type {PasteOptions} defaults
 */

const defaults = {
	cleanup: 'nothing',
	removeBlanks: false,
};

/**
 * Uproszczona funkcja paste
 * Wkleja przekazaną tablicę danych w określone miejsce przekazanego
 * arkusza.
 * Przyjmując 4 możliwe zapisy zakresu (określające lewy górny róg
 * gdzie mają być wklejone dane):
 * 1) Identyfikator kolumny np.'A' - zakres zaczyna się od ostatniego
 * pustego wiersza kolumny A,
 * 2) Numer wiersza - np. '1' (lub 1) - zakres zaczyna się od ostatniej
 * pustej kolumny wiersza 1,
 * 3) Pełny adres komórki - np. A1 - zakres zaczyna się w A1 bez względu
 * na znajdujące się już w arkuszu dane).
 * 4) Przekazanie całego zakresu (np. A1:B2) działa tak samo jak wyżej.
 * Tylko pierwsza komórka brana jest pod uwagę (BUG - nie czyści wtedy
 * istniejących danych)
 * Funkcja przyjmuje opcjonalny obiekt z dalszymi ustawieniami
 * umożliwiającymi: usunięcie znajdujących się przed wklejeniem danych oraz
 * usunięcie pustych wierszy i kolumn po wklejeniu danych. Domyślny obiekt
 * posiada składnię: {cleanup: 'nothing',	removeBlanks: false,}
 *
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet Sheet obj.
 * @param {string|number} userRange e.g 'A', 1, '1', 'A1', 'A1:B2'
 * @param {array[]} data Values to paste
 * @param {PasteOptions} [opt=defaults] Dalsze parametry
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} Obiekt arkusza
 */

const pasteS = (sheet, userRange, data, opt = defaults) => {
	typeGuard(sheet, userRange, data, opt);
	if (data.length === 0) return sheet;

	const dataWidth = data[0].length;
	const dataHeight = data.length;

	const { range, rangeObj } = getRange(
		opt.cleanup,
		sheet,
		// Na wypadek przekazania pełnego zakresu
		typeof userRange === 'string' && userRange.includes(':')
			? getFirstCellFromString(userRange)
			: userRange,
		dataWidth,
		dataHeight
	);

	if (opt.cleanup !== 'nothing') {
		/* Sprawdzamy czy lewa komórka zakresu zawiera się w istniejącym
		arkuszu - dla komórki wychodzącej poza nie ma potrzeby
		czyścić danych */
		const { col, row } = getColAndRowFromCellAsNum(range);

		if (sheet.getMaxColumns() >= col && sheet.getMaxRows() >= row) {
			rangeObj.clearContent();
		}
	}

	sheet
		.getRange(
			Number(/[0-9]+/.exec(range)[0]),
			letterToColumn(/[A-Z]+/.exec(range)[0]),
			dataHeight,
			dataWidth
		)
		.setValues(data);

	if (opt.removeBlanks) {
		removeEmptyRowCol(sheet);
	}

	return sheet;
};

export { pasteS };

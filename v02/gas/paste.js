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
import { removeFilter } from './removeFilter';
import { sortColumn } from './sortColumn';

const typeGuard = (sheetObj, range, arr, opt) => {
	if (!isSheet(sheetObj))
		throw new TypeError('Only Sheet objecta are alowed in "paste"');

	if (typeof range !== 'string' && typeof range !== 'number')
		throw new TypeError('Range should be string or number in "paste"');

	if (!isArray2d(arr))
		throw new TypeError('Only 2D arrays are alowed to "paste"');

	if (opt.restrictCleanup) {
		if (!['down', 'right', 'preserve'].includes(opt.restrictCleanup))
			throw new TypeError(
				'Wrong keyword passed as "restrictCleanup" to "paste"'
			);
	}
};

const getRange = (status, sheetObj, userRange, restHor, restVer) => {
	/* Usuwa tylko dane w doł od komórki startowej
	w kolumach w których znajdują się wklejane dane.
	Przydatna do wklejania danych ciągnących się w dół
	w arkuszach w których znajują się inne dane po prawej */
	if (status === 'down') {
		return getRangeRelative(sheetObj, userRange, restHor);
	}

	/* Usuwa tylko dane znajdujące się prawej stronie
	komórki startowej i tylko w wierszach zajmowanych przez nowe
	dane. Przydatne do wklejania "szerokich, ale nie wysokich"
	danych ciągnących się w poziomie (rzadko stosowane) */
	if (status === 'right') {
		return getRangeRelative(sheetObj, userRange, null, restVer);
	}

	/* Domyślna wartość - od górnej lewej komórki do końca
	w prawo i w dół  */
	return getRangeRelative(sheetObj, userRange);
};

/**
 * Paste Options
 * @typedef {Object} PasteOptions
 * @property {boolean} [notRemoveFilers] Usuwanie filtrów przed wklejeniem.
 * Domyślnie false
 * @property {number|string} [sort] Sortowanie kolumn przed wklejeniem.
 * Przyjmuje numer (1) lub string ('A'). Domyślnie brak sortowania
 * @property {string} [sortOrder] Kolejność sortowania.
 * Możliwe: 'az', 'za', 'asc', 'des'. Domyślie brak
 * @property {string} restrictCleanup Usuwanie istniejących
 * przed wklejeniem treści:
 * 'null' - usuwa wszystko na prawo i w doł od lewej komórki
 * 'down' - usuwa wszystko w dół. Po prawej tylko na szerokość danych
 * 'right' - usuwa wszystko po prawej. W dół tylko do wysokości danych
 * 'preserve' - nic nie usuwa. Domyślnie 'null'
 * @property {boolean} notRemoveEmptys Usuwanie pustych kolumn i wierszy
 * z arkusza (po wklejeniu). Domyślnie 'false'
 */

/**
 * Obiekt z dodatkowymi opcjami dla funkcji "paste"
 * @type {PasteOptions} defaults
 */

const defaults = {
	notRemoveFilers: false,
	sort: null,
	sortOrder: null,
	restrictCleanup: null,
	notRemoveEmptys: false,
};

/**
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
 *
 * Domyślnie przed wklejeniem danych usuwa treści już istniejące
 * poniżej oraz po prawej lewego górnego rogu obszaru do wklejenia
 * nowych danych. Można to zachowanie zmienić w ustawieniach (obiekt opt)
 *
 * Domyśline przed wklejeniem usuwa istniejące filtry.
 *
 * Domyśline po wklejeniu usuwa puste kolumny (po prawej)
 * i wiersze (poniżej)
 *
 * Funkcja przyjmuje opcjonalny obiekt z dalszymi ustawieniami
 *
 * @param {Object} sheetObj Obiekt arkusza
 * @param {String|Number} userRange Np. 'A', 1, '1', 'A1', 'A1:B2'
 * @param {Array[]} data Dane do wklejenia
 * @param {Object} [opt=defaults] Dalsze parametry
 * @returns {Object} Obiekt arkusza do dalszych manipulacji
 */

const paste = (sheetObj, userRange, data, opt = defaults) => {
	// Sprawdzenie typów
	typeGuard(sheetObj, userRange, data, opt);

	// Jeśli nie ma co wklejać zwraca nie tknięty arkusz
	if (data.length === 0) return sheetObj;

	/* ---- Właściwa funkcja ----------------------------- */

	// Upraszczamy składnię
	const dataWidth = data[0].length;
	const dataHeight = data.length;

	// Pobierz zakres do pracy (obiekt)
	const { range, rangeObj } = getRange(
		opt.restrictCleanup,
		sheetObj,
		// Na wypadek przekazania pełnego zakresu
		typeof userRange === 'string' && userRange.includes(':')
			? getFirstCellFromString(userRange)
			: userRange,
		dataWidth,
		dataHeight
	);

	// Usuwamy filtry
	if (!opt.notRemoveFilers) {
		removeFilter(sheetObj);
	}

	// Sortujemy
	if (opt.sort) {
		sortColumn(sheetObj, opt.sort, opt.sortOrder || 'az');
	}

	// Usuwamy kontent
	if (opt.restrictCleanup !== 'preserve') {
		/* Sprawdzamy czy lewa komórka zakresu zawiera się w istniejącycm
		arkuszu - dla komórki wychodzącej poza nie ma potrzeby
		czyścić danych */
		const { col, row } = getColAndRowFromCellAsNum(range);

		if (
			sheetObj.getMaxColumns() >= col &&
			sheetObj.getMaxRows() >= row
		) {
			rangeObj.clearContent();
		}
	}

	// Wklejka
	sheetObj
		.getRange(
			Number(/[0-9]+/.exec(range)[0]),
			letterToColumn(/[A-Z]+/.exec(range)[0]),
			dataHeight,
			dataWidth
		)
		.setValues(data);

	// Usuwa puste kolumny i wiersze
	if (!opt.notRemoveEmptys) {
		removeEmptyRowCol(sheetObj);
	}

	// Zwrotka arkusza
	return sheetObj;
};

export { paste };

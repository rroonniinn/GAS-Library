/* eslint-disable max-params */
/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable max-params */

import { letterToColumn } from './letterToColumn';
import { sortColumn } from './sortColumn';
import { removeFilter } from './removeFilter';
import { getRangeRelative } from './getRangeRelative';
import { removeEmptyRowCol } from './removeEmptyRowCol';

/**
 * Wkleja przekazaną tablicę danych (2D) w określone miejsce przekazanego
 * arkusza. Jako sheet przyjmuje zarówno string (wtedy pobiera arkusz
 * z bieżącego pliku - bound). Przy przekazaniu sheet jako object
 * pochodzenie pliku już nie ma znaczenia
 * @memberof Lib_Gas
 *
 * @param {string|object} sheet Nazwa arkusza lub obiekt arkusza
 * @param {string} col Lewa kolumna zakresu - string np. 'A'
 * @param {number} row Wiersz lewego górnego zakresu do wklejenia
 * @param {arrow[][]} arr Tablica 2D z danymi
 */

/**
 * Trzy możliwe opcje userRange (przykładowy zakres arkusza A:D20)
 * 'A' - zakres zaczyna się od ostatniego pustego wiersza kolumny A,
 * kończy się na ostatniej kolumnie. Np. A3:D
 * '1' - zakres zaczyna się od ostatniej pustej kolumny wiersza 1,
 * kończy się na ostatnim wierszu. Np. C1:D
 * 'A1' - zakres zaczyna się w A1, kończy na ostatnim wierszu i kolumnie
 * Np. A1:D20
 *
 * @param {*} sheetObj
 * @param {*} userRange
 */

const checkTypes = (arr, str) => {
	if (!Array.isArray(arr))
		throw new Error('Not valid type was paste as "data" into "paste"');
	if (!Array.isArray(arr[0]))
		throw new Error('Only 2D arrays are alowed to "paste"');
	if (typeof str !== 'string' && typeof str !== 'number')
		throw new Error('Range should be string or number in "paste"');
	// Dopisać sprawdzenie typów dla opt
};

const getRange = (status, sheetObj, userRange, restHor, restVer) => {
	if (status === 'no' || status === 'belowAndOnTheRight') {
		/* Domyślna wartość - usuwa wszystko na prawo i w dół
		od komórki startowej */
		return getRangeRelative(sheetObj, userRange);
	}
	if (status === 'below') {
		/* Usuwa tylko dane w doł od komórki startowej
		w kolumach w których znajdują się wklejane dane.
		Przydatna do wklejania danych ciągnących się w dół
		w arkuszach w których znajują się inne dane po prawej */
		return getRangeRelative(sheetObj, userRange, restHor);
	}
	if (status === 'onTheRight') {
		/* Usuwa tylko dane znajdujące się prawej stronie
		komórki startowej i tylko w wierszach zajmowanych przez nowe
		dane. Przydatne do wklejania "szerokich, ale nie wysokich"
		danych ciągnących się w poziomie (rzadko stosowane) */
		return getRangeRelative(sheetObj, userRange, null, restVer);
	}
};

const defaults = {
	clearExistingContent: 'belowAndOnTheRight', // 'below', 'onTheRight', 'no'
	notRemoveFilers: null,
	sortCol: { col: null, order: 'asc' },
	removeEmptyRowsAndCols: true, // Aplikowane po wklejeniu
};

/**
 * Wkleja przekazaną tablicę danych w określone miejsce przekazanego
 * arkusza.
 * Przyjmując 3 możliwe zapisy zakresu (określające lewy górny róg
 * gdzie mają być wklejone dane):
 * 1) Identyfikator kolumny np.'A' - zakres zaczyna się od ostatniego
 * pustego wiersza kolumny A,
 * 2) Numer wiersza - np. '1' (lub 1) - zakres zaczyna się od ostatniej
 * pustej kolumny wiersza 1,
 * 3) Pełny adres komórki - np. A1 - zakres zaczyna się w A1 bez względu
 * na znajdujące się już w arkuszu dane).
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
 * Funkcja przujmuje opcjonalny obiekt z dalszymi ustawieniami
 *
 * @param {Object} sheetObj Obiekt arkusza
 * @param {String|Number} userRange Np. 'A', 1, '1', 'A1'
 * @param {Array[]} data Dane do wklejenia
 * @param {Object} [opt=defaults] Dalsze parametry
 * @returns {Object} Obiekt arkusza do dalszych manipulacji
 */

const paste = (sheetObj, userRange, data, opt = defaults) => {
	// Sprawdzenie typów
	checkTypes(data, userRange);

	// Jeśli nie ma co wklejać zwraca nie tknięty arkusz
	if (data.length === 0) return sheetObj;

	// Upraszczamy skałdnię
	const clearStatus = opt.clearExistingContent;
	const dataWidth = data[0].length;
	const dataHeight = data.length;

	// Pobierz zakres do pracy (obiekt)
	const rangeObj = getRange(
		clearStatus,
		sheetObj,
		userRange,
		dataWidth,
		dataHeight
	);

	// Usuwamy filtry
	if (!opt.notRemoveFilers) {
		removeFilter(sheetObj);
	}

	// Sortujemy
	if (opt.sortCol.col) {
		sortColumn(sheetObj, opt.sortCol.col, opt.sortCol.order);
	}

	// Usuwamy kontent
	if (clearStatus !== 'no') {
		rangeObj.rangeObj.clearContent();
	}

	// Wklejka
	sheetObj
		.getRange(
			Number(/[0-9]+/.exec(rangeObj.range)[0]),
			letterToColumn(/[A-Z]+/.exec(rangeObj.range)[0]),
			dataHeight,
			dataWidth
		)
		.setValues(data);

	// Usuwa puste kolumny i wiersze
	if (opt.removeEmptyRowsAndCols) {
		removeEmptyRowCol(sheetObj);
	}

	// Zwrotka arkusza
	return sheetObj;
};

export { paste };

/* eslint-disable complexity */
/* eslint-disable max-params */
import { disp } from '../../v01/gas/disp';
import { isFormula } from '../../v01/utils/isFormula';
import { isNumber } from '../../v01/utils/isNumber';
import { isString } from '../../v01/utils/isString';

import { getSheet } from './getSheet';
import { isArray2d } from './isArray2d';

/**
 * Możliwe opcje obiektu definującego border.
 * Ustawienia bordera wokół zakresu.
 * Możliwe wartości - true - nowy border, false - brak bordera, null - border bez zmian
 * @typedef {Object} Borders
 * @property {boolean} [t] - top
 * @property {boolean} [l] - left
 * @property {boolean} [b] - bottom
 * @property {boolean} [r] - right
 * @property {boolean} [v] - pionowe linie pomiędzy
 * @property {boolean} [h] - poziome linie pomiędzy
 * @property {string} [color] - kolor css
 * @property {'dotted'|'dashed'|'solid'|'solidM'|'solidT'|'double'} [style] - style (enum)
 */

/**
 * String z zakresem komórek - np. A1, A1:B3, itp
 * @typedef {string} RangeString
 */

/**
 * Obiekt z opcjami masowych zmian w danym zakresie
 * @typedef {Object} MassChangesOptions
 * @property {string} [background] Tło komórki w css
 * @property {string} [fontColor] Kolor czcionki
 * @property {string} [fontFamily] Nazwa czcionki
 * @property {number} [fontSize] Wielkość czcionki w punktach
 * @property {'italic'|'normal'} [fontStyle] Styl czcionki
 * @property {'bold'|'normal'} [fontWeight] Grubość czcionki
 * @property {string} [fontFormat] Format numerów np. '#,##', '0.00%'
 * @property {'left'|'center'|'right'} [alignH] Wyrównanie w poziomie
 * @property {'top'|'middle'|'bottom'} [alignV] Wyrównanie w pionie
 * @property {number} [rowHeight] Wysokość każdego wiersza w ramach zakresu
 * @property {number} [colWidth] Szerokość każdej kolumny w ramach zakresu
 * @property {boolean} [showHyperlink] Czy linki mają być widoczne (underline) i aktywne
 * @property {boolean} [wrap] Czy zawijać treść w komórce
 * @property {GoogleAppsScript.Spreadsheet.WrapStrategy} [wrapType] Jeśli zawijać treść to jak
 * @property {Object} [textStyle] Obiekt z formatowaniem powstały jako efekt SpreadsheetApp.newTextStyle()
 * @property {Borders} [border] Ustawienia bordera wokół zakresu. t - top, l - left itd, v, h - pionowe i poziome linie pomiędzy. true - jest nowy border, false - brak bordera, null - border bez zmian
 * @property {any} [values] Nowe wartości do wklejenia. Mogą być pojedyńcze lub tablice. Mogą być formuły. Tablice muszą mieć ten sam rozmiar co zakres
 */

/**
 * Tablica dwuelementowa łącząca zakres z obiektem zawierającym wszystkie
 * zmiany do zaaplikowania - np. ['A1', {background: 'red'}]
 * @typedef {Object} RangeOptions
 * @type {[RangeString,MassChangesOptions]}
 */

/**
 * Tłumaczy moje określenia na formatowanie na użyte w GAS
 * @type {Object} value
 */

const translation = {
	background: 'setBackground',
	fontColor: 'setFontColor',
	fontFamily: 'setFontFamily',
	fontSize: 'setFontSize',
	fontStyle: 'setFontStyle',
	fontWeight: 'setFontWeight',
	fontFormat: 'setNumberFormat',
	alignH: 'setHorizontalAlignment',
	alignV: 'setVerticalAlignment',
	showHyperlink: 'setShowHyperlink',
	wrap: 'setWrap',
	wrapType: 'setWrapStrategy',
	textStyle: 'setTextStyle',
	border: 'setBorder',
	values: 'values',
	rowHeight: 'rowHeight', // nietypowy, wrzucam do obiektu aby było łatwiej
	colWidth: 'colWidth', // nietypowy, wrzucam do obiektu aby było łatwiej
};

/**
 * Enumy do BorderStyle - tłumaczenie na ludzki :)
 * @type {Object<string, GoogleAppsScript.Spreadsheet.BorderStyle>} borderEnumes
 */

const borderEnumes = {
	dotted: SpreadsheetApp.BorderStyle.DOTTED,
	dashed: SpreadsheetApp.BorderStyle.DASHED,
	solid: SpreadsheetApp.BorderStyle.SOLID,
	solidM: SpreadsheetApp.BorderStyle.SOLID_MEDIUM,
	solidT: SpreadsheetApp.BorderStyle.SOLID_THICK,
	double: SpreadsheetApp.BorderStyle.DOUBLE,
};

/**
 * Rozbija argumenty pozyskane do bordera na tablicę. Bez tego nie była by
 * zachowana odpowiednia kolejność
 * @param {Borders} value
 */

const translateBorder = value => [
	value.t,
	value.l,
	value.b,
	value.r,
	value.v,
	value.h,
	value.color,
	borderEnumes[value.style],
];

/**
 * Weryfikuje jakia wartość została przekazana do funkcji aplikującej
 * formaty i wartości do sheeta. Zwraca odpowiednią metodę. Jeśli przekazana
 * została tablica o innych wymiatach niż zakres, gas wyrzuci błąd.
 * @param {any} val
 */

const whatToApply = val => {
	if (isNumber(val)) {
		return 'setValue';
	}
	if (isString(val)) {
		return isFormula(val) ? 'setFormula' : 'setValue';
	}
	if (isArray2d(val)) {
		return 'setValues';
	}
	throw new TypeError('Custom: Wrong type of data paste into funkction');
};

/**
 * Wkleja odpwiednie formaty i treści do zakresów przekazanego arkusza
 * @param {RangeOptions[]} allChanges Tablica ['A1:B2', {formats}]
 * @param {string|GoogleAppsScript.Spreadsheet.Sheet} sheet Nazwa arkusza lub Arkusz
 * @param {string} idUrl Id lub Url Skoroszytu z arkuszem (jeśli nie jest lokalny)
 */

const modifySheet = (allChanges, sheet, idUrl = null) => {
	const s = getSheet(sheet, idUrl);

	if (s) {
		allChanges.forEach(([rangeStr, changes]) => {
			const range = s.getRange(rangeStr);

			Object.entries(changes).forEach(([entity, value]) => {
				const gas = translation[entity];
				if (
					gas !== 'setBorder' &&
					gas !== 'values' &&
					gas !== 'rowHeight' &&
					gas !== 'colWidth'
				) {
					range[gas](value);
				} else if (gas === 'setBorder') {
					range[gas](...translateBorder(value));
				} else if (gas === 'values') {
					range[whatToApply(value)](value);
				} else if (gas === 'rowHeight') {
					s.setRowHeights(
						range.getRow(),
						range.getNumRows(),
						value
					);
				} else if (gas === 'colWidth') {
					s.setColumnWidths(
						range.getColumn(),
						range.getNumColumns(),
						value
					);
				}
			});
		});
	}
};

export { modifySheet };

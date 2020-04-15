/* eslint-disable max-lines */
/* eslint-disable complexity */
/* eslint-disable max-params */

import { isFormula } from '../../v01/utils/isFormula';
import { isNumber } from '../../v01/utils/isNumber';
import { isString } from '../../v01/utils/isString';

import { getSheet } from './getSheet';
import { isArray2d } from './isArray2d';

/* ************************************** TYPES **************************************************************** */

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
 * @property {'number 0,00'|'number 0,0'|'number 0'|'money 0,00 zł'|'money 0 zł'|'money 0,00 $'|'money 0 $'|'money 0,00 €'|'money 0 €'|'percent 0,00'|'percent 0,0'|'percent 0'|'date yyyy-mm-dd'|'date yy-mm-dd'} [fontFormatNum] Format numerów
 * @property {'left'|'center'|'right'} [alignH] Wyrównanie w poziomie
 * @property {'top'|'middle'|'bottom'} [alignV] Wyrównanie w pionie
 * @property {'all'|'ver'|'hor'|'off'} [merge] Czy komórki mają być zmerchowane i jak
 * @property {number} [rowHeight] Wysokość każdego wiersza w ramach zakresu
 * @property {number} [colWidth] Szerokość każdej kolumny w ramach zakresu
 * @property {boolean} [showHyperlink] Czy linki mają być widoczne (underline) i aktywne
 * @property {boolean} [wrap] Włącza i wyłącza model zachowania w przypadku tekstu dłuższego niż szerokość kolumny. false przywraca standard - overflow
 * @property {'wrap'|'overflow'|'clip'} [wrapType] Model zawijania wierszy - wrap: zawijanie, clip: ucinianie, overflow - domyślny, rozlewanie na sąsienie kolumny
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
 * To na razie nie używane
 * @typedef {'background'|'fontColor'|'fontFamily'|'fontSize'|'fontStyle'|'fontWeight'|'fontFormat'|'alignH'|'alignV'|'showHyperlink'|'wrap'|'wrapType'|'textStyle'|'border'|'values'|'rowHeight'|'colWidth'} StylerOptions
 */

/* ************************************** Właściwy kod **************************************************************** */

/**
 * Tłumaczy moje określenia na formatowanie na użyte w GAS
 * @property {Object<string, string>} value
 */

const translation = {
	background: 'setBackground',
	fontColor: 'setFontColor',
	fontFamily: 'setFontFamily',
	fontSize: 'setFontSize',
	fontStyle: 'setFontStyle',
	fontFormatNum: 'setNumberFormat',
	fontWeight: 'setFontWeight',
	alignH: 'setHorizontalAlignment',
	alignV: 'setVerticalAlignment',
	showHyperlink: 'setShowHyperlink',
	wrap: 'setWrap',
	wrapType: 'setWrapStrategy',
	textStyle: 'setTextStyle',
	border: 'setBorder',
	values: 'values', // nietypowy, wrzucam do obiektu aby było łatwiej
	rowHeight: 'rowHeight', // nietypowy, wrzucam do obiektu aby było łatwiej
	colWidth: 'colWidth', // nietypowy, wrzucam do obiektu aby było łatwiej
	merge: 'merge', // nietypowy, wrzucam do obiektu aby było łatwiej
};

const numberFormats = {
	'number 0,00': '#,##0.00',
	'number 0,0': '#,##0.0',
	'number 0': '#,##',
	'money 0,00 zł': '#,##0.00 [$zł-415]',
	'money 0 zł': '#,## [$zł-415]',
	'money 0,00 $': '#,##0.00 [$$ ]',
	'money 0 $': '#,## [$$ ]',
	'money 0,00 €': '#,##0.00 [$€]',
	'money 0 €': '#,## [$€]',
	'percent 0,00': '0.00%',
	'percent 0,0': '0.0%',
	'percent 0': '0%',
	'date yyyy-mm-dd': 'yyyy-MM-dd',
	'date yy-mm-dd': 'yy-MM-dd',
};

/**
 * Enumy do wrapType - tłumaczenie na ludzki :)
 * @type {Object<string,GoogleAppsScript.Spreadsheet.WrapStrategy>}
 */

const wrapEnumes = {
	wrap: SpreadsheetApp.WrapStrategy.WRAP,
	overflow: SpreadsheetApp.WrapStrategy.OVERFLOW,
	clip: SpreadsheetApp.WrapStrategy.CLIP,
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
 * Przypisanie odpowedniej metody mergującej GAS do wartości używanych
 * w moim kodzie
 */

const applyMerge = {
	all: 'merge',
	ver: 'mergeVertically',
	hor: 'mergeAcross',
	off: 'breakApart',
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
 * Weryfikuje jaka wartość została przekazana do funkcji aplikującej
 * formaty i wartości do sheeta. Zwraca odpowiednią metodę. Jeśli przekazana
 * została tablica o innych wymiatach niż zakres, gas wyrzuci błąd.
 * @param {any} val
 * @return {'setValue'|'setFormula'|'setValues'} Nazwę metody do użycia
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
 * Wykonuje operację (formatowanie lub wklejenie danyc) i zwraca Sheet lub Range, na
 * którym został wywołany (nie wykorzystuję dalej tego, ale dzięki temu,
 * mogę uniknąc if else)
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @param {GoogleAppsScript.Spreadsheet.Range} range
 * @return {([entity, value]) => GoogleAppsScript.Spreadsheet.Sheet|GoogleAppsScript.Spreadsheet.Range}
 */

const applyStyles = (sheet, range) => ([entity, value]) => {
	const gas = translation[entity];
	if (gas === 'rowHeight')
		return sheet.setRowHeights(
			range.getRow(),
			range.getNumRows(),
			value
		);

	if (gas === 'colWidth')
		return sheet.setColumnWidths(
			range.getColumn(),
			range.getNumColumns(),
			value
		);

	if (gas === 'values') return range[whatToApply(value)](value);
	if (gas === 'setBorder') return range[gas](...translateBorder(value));
	if (gas === 'setWrapStrategy') return range[gas](wrapEnumes[value]);
	if (gas === 'setNumberFormat') return range[gas](numberFormats[value]);
	if (gas === 'merge') return range[applyMerge[value]]();

	return range[gas](value);
};

/**
 * Wkleja odpwiednie formaty i treści do zakresów przekazanego arkusza
 * @param {RangeOptions[]} rangesChanges Tablica [['A1:B2', {changes: val}]]
 * @param {string|GoogleAppsScript.Spreadsheet.Sheet} sheet Nazwa arkusza lub Arkusz
 * @param {string} idUrl Id lub Url Skoroszytu z arkuszem (jeśli nie jest lokalny)
 */

const styleSheet = (rangesChanges, sheet, idUrl = null) => {
	const s = getSheet(sheet, idUrl);

	if (s) {
		rangesChanges.forEach(([range, changes]) => {
			Object.entries(changes).forEach(
				applyStyles(s, s.getRange(range))
			);
		});
	}

	return s;
};

export { styleSheet };

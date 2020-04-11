/* eslint-disable max-params */
import { isFormula } from '../../v01/utils/isFormula';
import { isNumber } from '../../v01/utils/isNumber';
import { isString } from '../../v01/utils/isString';

import { getSheet } from './getSheet';
import { isArray2d } from './isArray2d';

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
 * @property {boolean} [showHyperlink] Czy linki mają być widoczne (underline) i aktywne
 * @property {boolean} [wrap] Czy zawijać treść w komórce
 * @property {GoogleAppsScript.Spreadsheet.WrapStrategy} [wrapType] Jeśli zawijać treść to jak
 * @property {Object} [textStyle] Obiekt z formatowaniem powstały jako efekt SpreadsheetApp.newTextStyle()
 * @property {{t: boolean, l: boolean, b: boolean, r: boolean, v: boolean, h: boolean, color: string,
 * style: GoogleAppsScript.Spreadsheet.BorderStyle}} [border] Ustawienia bordera wokół zakresu. t - top, l - left itd, v, h - pionowe i poziome linie pomiędzy. true - jest nowy border, false - brak bordera, null - border bez zmian
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
	values: 'values', // jedyny nietypowy, wrzucam do obiektu aby było łatwiej
};

/**
 * Rozbija argumenty pozyskane do bordera na tablicę
 * @type {Object} value
 */

const translateBorder = value => [
	value.t,
	value.l,
	value.b,
	value.r,
	value.v,
	value.h,
	value.color,
	value.style,
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

	allChanges.forEach(([rangeStr, changes]) => {
		const range = s.getRange(rangeStr);

		Object.entries(changes).forEach(([format, value]) => {
			const gas = translation[format];
			if (gas !== 'setBorder' && gas !== 'values') {
				range[gas](value);
			} else if (gas === 'setBorder') {
				range[gas](...translateBorder(value));
			} else if (gas === 'values') {
				range[whatToApply(value)](value);
			}
		});
	});
};

export { modifySheet };

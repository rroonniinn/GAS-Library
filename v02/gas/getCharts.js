/* eslint-disable max-params */
import { getSheet } from './getSheet';

/**
 * Funkcja przyjmująca jako argument obiekt wykresu
 * @callback filterCallback
 * @param {GoogleAppsScript.Spreadsheet.EmbeddedChart} Chart
 */

/**
 * Zwraca z określonego arkusza tablicę wykresów spełniających warunek callbacku
 *
 * @param {filterCallback} callback Funkcja sprawdzająca warunek
 * @param {GoogleAppsScript.Spreadsheet.Sheet|string} sheet Arkusz lub jego nazwa
 * @param {string} [idUrl=null] Jeśli arkusz znajduje się poza skryptem to ID lub jego URL
 */
const getCharts = (callback, sheet, idUrl = null) =>
	getSheet(sheet, idUrl)
		.getCharts()
		.filter(callback);

export { getCharts };

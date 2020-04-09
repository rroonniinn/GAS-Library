/* eslint-disable max-params */
import { columnToLetter } from './columnToLetter';
import { getCharts } from './getCharts';

/**
 * Callback do znalezienia wykresi znajdującego się w określonym miejscu
 * @param {string} col
 * @param {number} row
 * @returns {(chart: GoogleAppsScript.Spreadsheet.EmbeddedChart) => Boolean}
 */

const chartAtColRow = (col, row) => chart =>
	columnToLetter(chart.getContainerInfo().getAnchorColumn()) === col &&
	chart.getContainerInfo().getAnchorRow() === row;

/**
 * Zwraca wykres znajdujący się w określonej lokacji. Zwraca tylko jeden,
 * nawet jeśli jest znalezionych więcej
 * @param {string} col
 * @param {number} row
 * @param {GoogleAppsScript.Spreadsheet.Sheet|string} sheet Arkusz lub jego nazwa
 * @param {string} [idUrl=null] Jeśli arkusz znajduje się poza skryptem to ID lub jego URL
 */

const getChartAtLocation = (col, row, sheet, idUrl = null) =>
	getCharts(chartAtColRow(col, row), sheet, idUrl)[0];

export { getChartAtLocation };

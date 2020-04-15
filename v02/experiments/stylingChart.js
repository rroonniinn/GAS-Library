/* eslint-disable max-lines-per-function */
import { getChartAtLocation } from '../gas/getChartAtLocation';

/**
 * Formatowanie wykresu
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet Akrusz w którym jest wykres
 * @param {string} col Kolumn w której jest jego lewy górny rów - np 'A'
 * @param {number} row Numer wiersza w którym jest jego lewy górny róg
 * @param {Object} fileData Obiekt w którym są dane dotyczące wyglądu arkusza
 */
const stylingChart = (sheet, col, row, fileData) => {
	const colorA = fileData.accentColor;
	const colorB = fileData.colorDark;
	const colorBg = fileData.colorLight;

	const styling = {
		bg: [
			'backgroundColor',
			{
				fill: colorBg,
				stroke: colorBg,
				strokeWidth: 1,
			},
		],
		fonts: ['fontName', 'Roboto Condensed'],
		hAxis: ['hAxis', { textStyle: { color: 'white' } }],
		series: [
			'series',
			{
				0: {
					targetAxisIndex: 1,
					type: 'line',
					color: colorA,
					curveType: 'function',
					lineWidth: 4,
					pointSize: 7,
					dataLabel: 'value',
					dataLabelPlacement: 'above',
					annotations: {
						textStyle: {
							color: colorA,
							fontSize: 12,
							fontName: 'Roboto Condensed',
						},
						stem: { color: colorA },
					},
					pointShape: 'circle',
				},
				1: {
					targetAxisIndex: 0,
					type: 'bars',
					color: colorB,
					lineWidth: 4,
					pointSize: 7,
					dataLabel: 'value',
					dataLabelPlacement: 'below',
					annotations: {
						textStyle: {
							color: colorB,
							fontSize: 12,
							fontName: 'Roboto Condensed',
						},
						stem: { color: colorB },
					},
				},
			},
		],
		vAxes: [
			'vAxes',
			{
				0: {
					textStyle: { color: colorB, fontSize: 10 },
					gridlines: { color: colorB },
					baselineColor: colorB,
				},
				1: {
					textStyle: { color: colorBg, fontSize: 1 },
					gridlines: { color: colorB },
					baselineColor: colorB,
				},
			},
		],
	};

	const chart = getChartAtLocation(col, row, sheet)
		.modify()
		.asComboChart()
		// @ts-ignore
		.setOption(...styling.bg)
		.setOption(...styling.fonts)
		.setOption(...styling.hAxis)
		.setOption(...styling.series)
		.setOption(...styling.vAxes)
		.build();

	sheet.updateChart(chart);
};

export { stylingChart };

import { columnToLetter } from './columnToLetter';

/**
 * Zwraca pałną dostępną informację o przekazanym wykresie
 * @param {GoogleAppsScript.Spreadsheet.EmbeddedChart} chart Obiekt wykresu
 */
const getChartInfo = chart => ({
	type: chart
		.modify()
		.getChartType()
		.toString(),
	chartId: chart.getChartId(),
	containerInfo: {
		anchorCol: columnToLetter(
			chart.getContainerInfo().getAnchorColumn()
		),
		anchorRow: chart.getContainerInfo().getAnchorRow(),
		offsetX: chart.getContainerInfo().getOffsetX(),
		offsetY: chart.getContainerInfo().getOffsetY(),
	},
	hiddenStrategy: chart.getHiddenDimensionStrategy().toString(),
	mergeStrategy: chart.getMergeStrategy().toString(),
	headers: chart.getNumHeaders(),
	options: {
		width: chart.getOptions().get('width'),
		height: chart.getOptions().get('height'),
		title: chart.getOptions().get('title'),
		legend: chart.getOptions().get('legend'),
	},
	ranges: chart.getRanges().map(range => range.getA1Notation()),
	transpose: chart.getTransposeRowsAndColumns(),
});

export { getChartInfo };

/**
 * Metodą prób i błędów usiłuję rozkminić kalie opcje mogę uzyskać
 * tą metodą. Powyżej zostały te które działają. Poniżej te które nie
 * działają:
 * - chartArea: chart.getOptions().get('chartArea'),
 * - vAxes: chart.getOptions().get('vAxes'),
 * - vAxis: chart.getOptions().get('vAxis'),
 * - color: chart.getOptions().get('color'),
 * - colors: chart.getOptions().get('colors'),
 * - axis: chart.getOptions().get('axis'),
 * - background: chart.getOptions().get('background'),
 * - stroke: chart.getOptions().get('stroke'),
 * background: chart.getOptions().get('background'),
 * backgroundColor: chart.getOptions().get('backgroundColor'),
 */

/**
 * Możne przetestować wszystkie metody stąd: https://developers.google.com/apps-script/chart-configuration-options#area-config-options
 */

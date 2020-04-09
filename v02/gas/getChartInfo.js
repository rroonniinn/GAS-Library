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
		colors: chart.getOptions().get('colors'),
	},
	ranges: chart.getRanges().map(range => range.getA1Notation()),
	transpose: chart.getTransposeRowsAndColumns(),
});

export { getChartInfo };

import { styleSheet as fn } from '../styleSheet';

/**
 * @typedef {import('../styleSpreadsheet').SheetMassChangesOptions} SheetMassChangesOptions
 * @typedef {import('../styleSheet').RangeOptions} RangeOptions
 * @typedef {import('../styleSheet').MassChangesOptions} MassChangesOptions
 */

/**
 * @type {string} Plik z testem
 */

const url =
	'https://docs.google.com/spreadsheets/d/1z2y4mWLYqtaIuv5NOFMBQhCTs_Mex6BdSlblW0NUGYU/edit#gid=0';

/**
 * @type {MassChangesOptions}
 */

const allOptions = {
	background: 'royalBlue',
	fontColor: 'white',
	fontFamily: 'Roboto',
	fontSize: 20,
	fontStyle: 'italic',
	fontWeight: 'bold',
	fontFormatNum: 'percent 0,00',
	alignV: 'middle',
	alignH: 'center',
	rowHeight: 30,
	colWidth: 80,
	showHyperlink: true,
	wrap: true,
	wrapType: 'wrap',
	textStyle: SpreadsheetApp.newTextStyle()
		.setUnderline(true)
		.build(),
	border: {
		b: true,
		l: true,
		r: true,
		t: true,
		v: true,
		h: true,
		color: 'black',
		style: 'double',
	},
	merge: 'hor',
	values: 0.6,
};

const styleSheet = {
	a1: () => fn([['A1:H15', allOptions]], 'all', url),
	b1: () =>
		fn(
			[
				['B2:D4', { background: 'wheat', merge: 'all' }],
				['F2:H4', { background: 'wheat', merge: 'hor' }],
				['J2:L4', { background: 'wheat', merge: 'ver' }],
			],
			'merge',
			url
		),
	b2: () =>
		fn(
			[['A1:M12', { background: 'wheat', merge: 'off' }]],
			'merge',
			url
		),
	c1: () =>
		fn(
			[
				['B3', { background: 'wheat', wrapType: 'wrap' }],
				['D3', { background: 'wheat', wrapType: 'clip' }],
				['F3', { background: 'wheat', wrapType: 'overflow' }],
			],
			'wrap',
			url
		),
	d1: () =>
		fn(
			[
				['B1', { fontFormatNum: 'number 0' }],
				['B2', { fontFormatNum: 'number 0,0' }],
				['B3', { fontFormatNum: 'number 0' }],
				['B4', { fontFormatNum: 'money 0,00 zł' }],
				['B5', { fontFormatNum: 'money 0 zł' }],
				['B6', { fontFormatNum: 'money 0,00 $' }],
				['B7', { fontFormatNum: 'money 0 $' }],
				['B8', { fontFormatNum: 'money 0,00 €' }],
				['B9', { fontFormatNum: 'money 0 €' }],
				['B10', { fontFormatNum: 'percent 0,00' }],
				['B11', { fontFormatNum: 'percent 0,0' }],
				['B12', { fontFormatNum: 'percent 0' }],
				['B13', { fontFormatNum: 'date yyyy-mm-dd' }],
				['B14', { fontFormatNum: 'date yy-mm-dd' }],
			],
			'fontFormatNum',
			url
		),
};

export { styleSheet };

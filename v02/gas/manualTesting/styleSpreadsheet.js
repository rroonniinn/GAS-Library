import { styleSpreadsheet as fn } from '../styleSpreadsheet';

/**
 * @typedef {import('../styleSpreadsheet').SheetMassChangesOptions} SheetMassChangesOptions
 * @typedef {import('../styleSheet').RangeOptions} RangeOptions
 * @typedef {import('../styleSheet').MassChangesOptions} MassChangesOptions
 */

/**
 * Tego nie sprawdzam przez QUnit, bo za dużo roboty
 * z setupem testu.
 * Plik z testem jest tu: https://docs.google.com/spreadsheets/d/138usMqswIw8Ki3PQc5qPmJLxL1MyqJt2dE1jG1C4j68/edit#gid=1232029654
 *

 */

const url =
	'https://docs.google.com/spreadsheets/d/138usMqswIw8Ki3PQc5qPmJLxL1MyqJt2dE1jG1C4j68/edit#gid=1232029654';

const niceYellow = '#ffd966';
/**
 * @type {Object<string,MassChangesOptions>}
 */

const sets = {
	global: {
		values: '',
		alignH: 'center',
		fontColor: 'white',
		fontFamily: 'Roboto Condensed',
		background: '#820333',
		rowHeight: 50,
		colWidth: 50,
		border: {
			b: false,
			l: false,
			r: false,
			t: false,
			v: true,
			h: true,
			color: 'black',
			style: 'solid',
		},
	},
	a1: {
		background: '#F0433A',
	},
	b2: {
		background: '#C9283E',
	},
	c3: {
		background: '#820333',
	},
	d: {
		border: {
			t: true,
			b: true,
			l: true,
			r: true,
			v: false,
			h: false,
			style: 'solidM',
			color: '#C9283E',
		},
	},
	e: {
		border: {
			t: true,
			b: true,
			l: false,
			r: false,
			v: false,
			h: true,
			style: 'dashed',
			color: '#C9283E',
		},
	},
	f: {
		background: '#2E112D',
		border: {
			t: false,
			b: false,
			l: false,
			r: false,
			style: 'dotted',
			color: 'black',
		},
	},
};

/**
 * @type {SheetMassChangesOptions}
 */
const changesSpread = {
	Arkusz1: [
		['A1:L12', sets.global],
		['A1', sets.a1],
	],
	Arkusz2: [
		['A1:L12', sets.global],
		['B2', sets.b2],
	],
	Arkusz3: [
		['A1:L12', sets.global],
		['C3:J10', sets.d],
		['D6:I8', sets.e],
		[
			'D4',
			{
				alignH: 'left',
				alignV: 'middle',
				fontSize: 16,
				values: 'Działa// -> ?',
				fontColor: niceYellow,
			},
		],
	],
};

const styleSpreadsheet = {
	a1: () => fn(url, changesSpread), // Kolumna A posortowana od A - Z (arkusza a)
};

export { styleSpreadsheet };

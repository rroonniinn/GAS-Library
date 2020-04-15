import { styleSpreadsheet as fn } from '../styleSpreadsheet';

/**
 * @typedef {import('../styleSpreadsheet').SheetMassChangesOptions} SheetMassChangesOptions
 * @typedef {import('../styleSheet').RangeOptions} RangeOptions
 * @typedef {import('../styleSheet').MassChangesOptions} MassChangesOptions
 */

/**
 * Plik z testem jest tu: https://docs.google.com/spreadsheets/d/138usMqswIw8Ki3PQc5qPmJLxL1MyqJt2dE1jG1C4j68/edit#gid=1232029654
 */

const url =
	'https://docs.google.com/spreadsheets/d/138usMqswIw8Ki3PQc5qPmJLxL1MyqJt2dE1jG1C4j68/edit#gid=1232029654';

const niceYellow = '#ffd966';
/**
 * @type {Object<string,MassChangesOptions>}
 */

const sets = {
	globalA: {
		values: '',
		alignH: 'center',
		fontColor: 'white',
		fontFamily: 'Roboto Condensed',
		rowHeight: 40,
		colWidth: 60,
		background: 'blue',
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
	globalB: {
		values: '',
		alignH: 'center',
		fontColor: niceYellow,
		fontFamily: 'Roboto Condensed',
		rowHeight: 60,
		colWidth: 40,
		background: 'orange',
		border: {
			b: false,
			l: false,
			r: false,
			t: false,
			v: true,
			h: true,
			color: niceYellow,
			style: 'dotted',
		},
	},
};

/**
 * @type {SheetMassChangesOptions}
 */
const changesSpread = {
	Arkusz1: [
		['A1:L12', sets.globalA],
		['A1', { background: '#F0433A' }],
	],
	Arkusz2: [
		['A1:L12', sets.globalB],
		['B2', { background: niceYellow }],
	],
};

const styleSpreadsheet = {
	a1: () => fn(url, changesSpread),
};

export { styleSpreadsheet };

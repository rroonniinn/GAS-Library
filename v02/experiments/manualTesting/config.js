/**
 * Kolory eksperymentu
 */
const colors = {
	light: '#ea4335',
	dark: '#c32e21',
	accent: '#ffff00',
};

/**
 * Ustawienie całego eksperymentu
 * @type {import('../types').ExpSetup} EXP_SETUP
 */

const EXP_SETUP = {
	title: 'Zapis : Całość',
	method: 'Single Random',
	structure: {
		fixed: 'col',
		fixedSize: 15,
		randomData: false,
	},
	samples: {
		s1: 100,
		s2: 200,
		s3: 500,
		s4: 1000,
		s5: 2000,
		s6: 4000,
		s7: 8000,
		s8: 16000,
	},
	results: {
		loc: {
			prefix: 'A',
			name: 'Local',
			colorLight: colors.light,
			colorDark: colors.dark,
			accentColor: colors.accent,
			sheetsMeaning: {
				a: 'nothing',
				b: 'default',
				c: 'full',
				d: 'native',
				e: '',
				f: '',
			},
		},
		hub: {
			prefix: 'B',
			name: 'Hub',
			colorLight: colors.light,
			colorDark: colors.dark,
			accentColor: colors.accent,
			sheetsMeaning: {
				a: 'nothing',
				b: 'default',
				c: 'full',
				d: 'native',
				e: '',
				f: '',
			},
		},
		ext: {
			prefix: 'C',
			name: 'External',
			colorLight: colors.light,
			colorDark: colors.dark,
			accentColor: colors.accent,
			sheetsMeaning: {
				a: 'nothing',
				b: 'default',
				c: 'full',
				d: 'native',
				e: '',
				f: '',
			},
		},
		cache: {
			prefix: 'D',
			name: 'Cache',
			colorLight: colors.light,
			colorDark: colors.dark,
			accentColor: colors.accent,
			sheetsMeaning: {
				a: '1 min',
				b: '15 min',
				c: '30 min',
				d: '1 h',
				e: '',
				f: '',
			},
		},
	},
	misc: {
		resultsTemplate:
			'https://docs.google.com/spreadsheets/d/139mlb1yO8e_T8Bs25yX5kTiHaCvSNRuQf8RRyH2WpTg/edit#gid=1941260253',
		printToSubname: 'Wyniki',
		dataFolder: '_Pliki',
		externalsSheetName: 'Dane',
		externalsPrefix: 'file',
		hubName: 'externalHub',
		dashboardName: 'Dashboard',
		dashboardMainSheet: 'Dashboard',
		dashboardDataSheet: 'h_dropData',
		dashboardTemplate:
			'https://docs.google.com/spreadsheets/d/1uPhrwk4YD0-7ZXDVdKKUZ5ACjk-WCfbhBBqIAe4SiUI/edit#gid=880283590',
		dashboardColor: colors.light,
	},
};

export { EXP_SETUP };

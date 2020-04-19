/* eslint-disable max-lines-per-function */

/**
 * @typedef {import('./types').PrintResults} PrintResults
 * @typedef {import('../gas/styleSpreadsheet').SheetMassChangesOptions} SheetMassChangesOptions
 * @typedef {import('../gas/styleSpreadsheet').RangeOptions} RangeOptions
 */

/**
 * Zwraca zmiany estetyczne do wprowadzenia w templacie
 * w arkuszach do których nie trafiają dane z eksperymentów
 * (Wyniki i helpers)
 * @param {PrintResults} fileData Dane plików z wynikami
 * @param {string} title Tytuł eksperymentu
 * @returns {SheetMassChangesOptions}
 */

const getUtilsStyles = (fileData, title) => ({
	Wyniki: [
		['A1:E4', { background: fileData.colorDark }],
		['A5:E', { background: fileData.colorLight }],
		[
			'AH1:AH33',
			{
				border: {
					r: true,
					style: 'solidM',
					color: fileData.colorLight,
				},
			},
		],
		[
			'H7:M7',
			{
				values: [
					[
						'=ArrayFormula(IFERROR(VLOOKUP($G$7:$G$14;A!$AU$7:$BA$14;7;0);))',
						'=ArrayFormula(IFERROR(VLOOKUP($G$7:$G$14;B!$AU$7:$BA$14;7;0);))',
						'=ArrayFormula(IFERROR(VLOOKUP($G$7:$G$14;C!$AU$7:$BA$14;7;0);))',
						'=ArrayFormula(IFERROR(VLOOKUP($G$7:$G$14;D!$AU$7:$BA$14;7;0);))',
						'=ArrayFormula(IFERROR(VLOOKUP($G$7:$G$14;E!$AU$7:$BA$14;7;0);))',
						'=ArrayFormula(IFERROR(VLOOKUP($G$7:$G$14;F!$AU$7:$BA$14;7;0);))',
					],
				],
			},
		],
		[
			'H22:M22',
			{
				values: [
					[
						'=ArrayFormula(IFERROR(VLOOKUP($G$22:$G$29;A!$AU$7:$BE$14;11;0);))',
						'=ArrayFormula(IFERROR(VLOOKUP($G$22:$G$29;B!$AU$7:$BE$14;11;0);))',
						'=ArrayFormula(IFERROR(VLOOKUP($G$22:$G$29;C!$AU$7:$BE$14;11;0);))',
						'=ArrayFormula(IFERROR(VLOOKUP($G$22:$G$29;D!$AU$7:$BE$14;11;0);))',
						'=ArrayFormula(IFERROR(VLOOKUP($G$22:$G$29;E!$AU$7:$BE$14;11;0);))',
						'=ArrayFormula(IFERROR(VLOOKUP($G$22:$G$29;F!$AU$7:$BE$14;11;0);))',
					],
				],
			},
		],
	],
	helper: [
		['B1', { values: title }],
		['B2', { values: fileData.name }],
		[
			'E4:E9',
			{
				values: Object.values(fileData.sheetsMeaning).map(val => [
					val,
				]),
			},
		],
	],
});

/**
 * Zwraca zmiany estetyczne do wprowadzenia w templacie
 * w arkuszach z wynikami eskperymentów
 * @param {PrintResults} fileData Obiket pochodzący z configu z danymi dla danego arkusza
 * @returns {RangeOptions[]}
 */

const getResultsStyles = fileData => [
	['A1:BK2', { background: fileData.colorLight }],
];

export { getUtilsStyles, getResultsStyles };

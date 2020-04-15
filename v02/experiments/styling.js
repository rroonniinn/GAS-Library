/**
 * @typedef {import('../gas/styleSpreadsheet').SheetMassChangesOptions} SheetMassChangesOptions
 * @typedef {import('../gas/styleSheet').MassChangesOptions} MassChangesOptions
 */

/**
 * Zwraca zmiany estetyczne do wprowadzenia w templacie
 * w arkuszach do których nie trafiają dane z eksperymentów
 * (Wyniki i helpers)
 * @param {Object} fileData Obiket pochodzący z configu z danymi dla danego arkusza
 * @param {string} title Tytuł eksperymentu
 * @returns {SheetMassChangesOptions}
 */

const getStylinForOthers = (fileData, title) => ({
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
 * Zwraca zmiany estetyczne do wprowadzenia w templacie w arkuszach z
 * wynikami eskperymentów
 * @param {Object} fileData Obiket pochodzący z configu z danymi dla danego arkusza
 * @returns {[string,MassChangesOptions][]}
 */

const gerStylingForResults = fileData => [
	['A1:BK2', { background: fileData.colorLight }],
];

export { getStylinForOthers, gerStylingForResults };

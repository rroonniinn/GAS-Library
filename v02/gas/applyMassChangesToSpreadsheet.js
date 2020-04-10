import { applyMassChangesToSheet } from './applyMassChangesToSheet';

/**
 * @typedef {import('./applyMassChangesToSheet').RangeOptions} RangeOptions
 */

/**
 * Format danych obiektu z opcjami masowych zmian w Spreadsheecie
 * @typedef {Object} SheetMassChangesOptions
 * @type {Object<string, RangeOptions[]>} Kluczem jest nazwa konkretnego arkusza.
 */

/**
 * Wkleja odpwiednie formaty i treści do zakresów w odpowiednich arkuszach
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} spreadsheet
 * @param {SheetMassChangesOptions} spreadsheetChanges  ['Nazwa arkusza', [[range, {formats}]]]
 */

const applyMassChangesToSpreadsheet = (
	spreadsheet,
	spreadsheetChanges
) => {
	Object.entries(spreadsheetChanges).forEach(([sheetName, changes]) => {
		const sheet = spreadsheet.getSheetByName(sheetName);
		applyMassChangesToSheet(changes, sheet);
	});
};

export { applyMassChangesToSpreadsheet };

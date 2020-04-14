import { getSpreadsheet } from './getSpreadsheet';
import { styleSheet } from './styleSheet';

/**
 * @typedef {import('./styleSheet').RangeOptions} RangeOptions
 */

/**
 * Format danych obiektu z opcjami masowych zmian w Spreadsheecie
 * @typedef {Object} SheetMassChangesOptions
 * @type {Object<string, RangeOptions[]>} Kluczem jest nazwa konkretnego arkusza.
 */

/**
 * Wkleja odpwiednie formaty i treści do zakresów w arkuszach zdefiowanych
 * w przekazanych jako argument SheetMassChangesOptions
 * @param {string|GoogleAppsScript.Spreadsheet.Spreadsheet} val Obiekt Skoroszytu lub ID lub Url Spreadsheetu
 * @param {SheetMassChangesOptions} allChanges  ['Nazwa arkusza', [[range, {formats}]]]
 */

const styleSpreadsheet = (val, allChanges) => {
	const ss = getSpreadsheet(val);

	Object.entries(allChanges).forEach(([sStr, changes]) =>
		styleSheet(changes, ss.getSheetByName(sStr))
	);
	return ss;
};

export { styleSpreadsheet };

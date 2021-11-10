import { getCurrentSheet } from './getCurrentSheet';

/**
 * @typedef {Object} Ret
 * @property {GoogleAppsScript.Spreadsheet.Sheet} currentSheet Obiekt arkusza w którym jest zaznaczona komórka
 * @property {GoogleAppsScript.Spreadsheet.Range} currentCell Range zaznaczonej komórki
 */

/**
 * Zwraca dane zaznaczonej w interfejsie komórki (current cell):
 * - jej zakres (jako Range)
 * - arkusz w którym się znajduje (jako Sheet)
 * @returns {Ret}
 */

export const getCurrentSheetAndCell = () => {
	const currentSheet = getCurrentSheet();
	const currentCell = currentSheet.getCurrentCell();

	return {
		currentSheet,
		currentCell,
	};
};

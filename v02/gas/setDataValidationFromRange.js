/* eslint-disable max-params */
/**
 * Ustawia data validation na listę wartości znajdujących się
 * w arkuszu (tym samym lub innym)
 * @param {GoogleAppsScript.Spreadsheet.Sheet} rulesSheet Obiekt arkusza w którym znajdują się reguły
 * @param {string} rulesRange Zakres w którym znajdują się reguły (jako A1 Notation)
 * @param {GoogleAppsScript.Spreadsheet.Range[]} rangesToApply Range do którego należy zaaplikować data validation
 * @param {boolean} [allowInvalid] Czy pozwolić na nieprawidłowe dane (pojawi się trójkąt) czy nie.
 */
const setDataValidationFromRange = (
	rulesSheet,
	rulesRange,
	rangesToApply,
	allowInvalid = true
) => {
	const rangeForValidation = rulesSheet.getRange(rulesRange);

	const rule = SpreadsheetApp.newDataValidation()
		.requireValueInRange(rangeForValidation)
		.setAllowInvalid(allowInvalid)
		.build();

	rangesToApply.forEach(range => range.setDataValidation(rule));
};

export { setDataValidationFromRange };

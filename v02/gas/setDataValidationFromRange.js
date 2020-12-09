/**
 * Ustawia data validation na listę wartości znajdujących się
 * w arkuszu (tym samym lub innym)
 * @param {GoogleAppsScript.Spreadsheet.Sheet} rulesSheet Obiekt arkusza w którym znajdują się reguły
 * @param {string} rulesRange Zakres w którym znajdują się reguły (jako A1 Notation)
 * @param {GoogleAppsScript.Spreadsheet.Range} rangeToApply Range do którego należy zaaplikować data validation
 */
const setDataValidationFromRange = (
	rulesSheet,
	rulesRange,
	rangeToApply
) => {
	const rangeForValidation = rulesSheet.getRange(rulesRange);

	const rule = SpreadsheetApp.newDataValidation()
		.requireValueInRange(rangeForValidation)
		.build();

	rangeToApply.setDataValidation(rule);
};

export { setDataValidationFromRange };

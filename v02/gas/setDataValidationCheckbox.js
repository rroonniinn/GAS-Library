/**
 * Ustawia data validation na checkbox
 * @param {GoogleAppsScript.Spreadsheet.Range} rangeToApply Range do którego należy zaaplikować data validation
 */

const setDataValidationCheckbox = rangeToApply => {
	const rule = SpreadsheetApp.newDataValidation()
		.requireCheckbox()
		.build();

	rangeToApply.setDataValidation(rule);
};

export { setDataValidationCheckbox };

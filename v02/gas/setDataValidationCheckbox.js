/**
 * Ustawia data validation na checkbox
 * @param {GoogleAppsScript.Spreadsheet.Range[]} rangesToApply Range do którego należy zaaplikować data validation
 */

const setDataValidationCheckbox = rangesToApply => {
	const rule = SpreadsheetApp.newDataValidation()
		.requireCheckbox()
		.build();

		rangesToApply.forEach(range => range.setDataValidation(rule))

};

export { setDataValidationCheckbox };

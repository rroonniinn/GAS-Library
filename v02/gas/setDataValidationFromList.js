/**
 * Ustawia data validation na listę wartości znajdujących się
 * w arkuszu (tym samym lub innym)
 * @param {array} valueList Tablica z dozwolonymi wartościami
 * @param {GoogleAppsScript.Spreadsheet.Range[]} rangesToApply Range do którego należy zaaplikować data validation
 * @param {boolean} [allowInvalid] Czy pozwolić na nieprawidłowe dane (pojawi się trójkąt) czy nie.
 */

const setDataValidationFromList = (
	valueList,
	rangesToApply,
	allowInvalid = true
) => {
	const rule = SpreadsheetApp.newDataValidation()
		.requireValueInList(valueList)
		.setAllowInvalid(allowInvalid)
		.build();

	rangesToApply.forEach(range => range.setDataValidation(rule));
};

export { setDataValidationFromList };

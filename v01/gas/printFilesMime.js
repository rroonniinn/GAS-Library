/**
 * Drukuje we wskazanym arkuszu listę plików wraz z informacją o ich typie.
 * Dane wkleja poczynając od komórki <tt>A1</tt>.
 *
 * @memberof Lib_Gas
 *
 * @param {array} files Tablica plików (np. uzyskana z <tt>getFiles()</tt>)
 * @param {string} targetSheet Nazwa arkusza do której ma wdrukować treść
 * @returns {void} Tylko side effect
 */
const printFilesMime = (files, targetSheet) => {
	const header = ['Name', 'MIME'];
	const newArr = files.map(file => [file.getName(), file.getMimeType()]);
	const arr = [header, ...newArr];
	const sheet = SpreadsheetApp.getActive().getSheetByName(targetSheet);
	sheet.clear();
	sheet.getRange(1, 1, arr.length, arr[0].length).setValues(arr);
};
export { printFilesMime };

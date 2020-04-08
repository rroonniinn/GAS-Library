/**
 * Zwraca id folderu w którym znajduje się przekazany Skoroszyt.
 * Uwaga, zwraca id tylko pierwszego znalezionego folderu rodzica
 * (może być wiele)
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} spreadsheet
 */

const getContainingFolder = spreadsheet => {
	const folders = [];
	const iterator = DriveApp.getFileById(
		spreadsheet.getId()
	).getParents();

	while (iterator.hasNext()) {
		folders.push(iterator.next());
	}

	return folders[0];
};

export { getContainingFolder };

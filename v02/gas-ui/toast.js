/**
 * Wyświetla toast-a :)
 *
 * @param {String} msg Wiadomość
 * @param {String} [tittle='Alert'] Opcjonalny tytuł
 */

const toast = (msg, tittle = 'Alert') => {
	const activeFile = SpreadsheetApp.getActive();
	if (activeFile) activeFile.toast(msg, tittle);
	else throw new Error('No active Spreadsheet for toast');
};
export { toast };

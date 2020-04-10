/**
 * Sprawdza czy przekazana wartośc jest obiektem
 * Spreadsheet. Weryfikuje czy dostępna jest
 * na nim metoda .createFolder(name)
 *
 * @param {any} val Sprawdzana wartość
 */

const isSpreadsheet = val => {
	if (!val) return false;
	if (typeof val !== 'object') return false;
	return typeof val.toast === 'function';
};

export { isSpreadsheet };

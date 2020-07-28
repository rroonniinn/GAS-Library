/**
 * Sprawdza czy przekazana wartośc jest obiektem
 * skoroszytu (Spreadsheet). Weryfikuje czy dostępna jest
 * na nim metoda .showSheet
 *
 * @param {any} val Sprawdzana wartość
 */

const isSpradsheet = val => {
	if (!val) return false;
	if (typeof val !== 'object') return false;
	return !!val.toast;
};

export { isSpradsheet };

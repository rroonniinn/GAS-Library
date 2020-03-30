/**
 * Sprawdza czy przekazana wartośc jest obiektem
 * arkusza (Sheet). Weryfikuje czy dostępna jest
 * na nim metoda .activate()
 *
 * @param {any} val Sprawdzana wartość
 */

const isSheet = val => {
	if (!val) return false;
	if (typeof val !== 'object') return false;
	return !!val.showSheet;
};

export { isSheet };

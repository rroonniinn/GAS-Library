/**
 * Sprawdza czy przekazana wartośc jest obiektem
 * EmbeddedChart. Weryfikuje czy dostępna jest
 * na nim metoda .getChartId
 *
 * @param {any} val Sprawdzana wartość
 */

const isFolder = val => {
	if (!val) return false;
	if (typeof val !== 'object') return false;
	return !!val.getChartId;
};

export { isFolder };

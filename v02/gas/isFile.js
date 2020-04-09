/**
 * Sprawdza czy przekazana wartośc jest obiektem
 * File {GoogleAppsScript.Drive.File}.
 * Weryfikuje czy dostępna jest
 * na nim metoda .getMimeType()
 *
 * @param {any} val Sprawdzana wartość
 */

const isFile = val => {
	if (!val) return false;
	if (typeof val !== 'object') return false;
	return !!val.getMimeType;
};

export { isFile };

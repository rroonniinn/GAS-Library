/**
 * Sprawdza czy przekazana wartośc jest obiektem
 * Folderu (Folder). Weryfikuje czy dostępna jest
 * na nim metoda .createFolder(name)
 *
 * @param {any} val Sprawdzana wartość
 */

const isFolder = val => {
	if (!val) return false;
	if (typeof val !== 'object') return false;
	return !!val.createFolder;
};

export { isFolder };

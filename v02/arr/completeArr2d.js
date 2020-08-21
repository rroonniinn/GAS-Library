import { getMaxRowLen } from './getMaxRowLen';

/**
 * Rozbudowuje otrzymaną tablice 2d o różnych długościach wierszy
 * dodatkowymi komórkami aby uzyskać równą tablice 2d gotową
 * do wklejenia do Sheetsów lub zbudowania poprawnego csv
 * @param {array[]} arr Tablica 2d
 * @param {string} [filler=''] Opcjonalna wartość która zostanie wstawiona do nowych komórek.
 * Domyślnie komórki zawierając pusty string
 * @returns {array[]} Unormowana tablica 2d
 */

const completeArr2d = (arr, filler = '') => {
	const longest = getMaxRowLen(arr);

	return arr.map(row => {
		const len = row.length;
		if (len < longest) {
			const dif = longest - len;
			return row.concat(Array.from({ length: dif }, () => filler));
		}
		return row;
	});
};

export { completeArr2d };

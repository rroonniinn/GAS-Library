/**
 * Funkcja stosowana na tablicach z pustymi komórkami `<empty cell>`.
 * Na takich komórkach nie mogę stosować mapy. Zatem ta funkcja
 * zamienia takowe komórki na "normalne", zawierające pusty string.
 * Przyjmuje tablice 1d (zatem dla 2d należy uruchomić je w mapie)
 * @param {array} array
 * @returns {array}
 */

const replaceEmptyCells = array => {
	const newArr = [];
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		newArr.push(element || '');
	}
	return newArr;
};

export { replaceEmptyCells };

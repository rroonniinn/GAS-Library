/* eslint-disable max-params */

/**
 * Zwraca z przekazanego obiketu wartość 'równoległego' do 'givenKey' klucza (soughtKey)
 * o określonej wartości. Ma zastosowanie do obiektów przechowywanych wszystkie wartości dla kluczy jako tablice o tych samych
 * długościach, w których na tych samych indexach znajdują się róże wartości tego samego elementu
 *
 * @param {object} obj Obiekt
 * @param {string} givenKey Klucz dla którego podajemy wartość
 * @param {any} givenVal Wartość dla powyższego klucza
 * @param {string} soughtKey Klucz dla którego wartość jest szukana
 * @returns {any} Poszukiwana wartość lub null jeśli klucz nie istnieje
 */
const getParallel = (obj, givenKey, givenVal, soughtKey) => {
	const index = obj[givenKey].indexOf(givenVal);
	return index >= 0 ? obj[soughtKey][index] : null;
};

export { getParallel };

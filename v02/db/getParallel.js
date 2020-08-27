/* eslint-disable max-params */
import { getValue } from './getValue';
import { getValueIdx } from './getValueIdx';

/**
 * Zwraca z przekazanej DB wartość 'równoległego' do 'givenKey' klucza (soughtKey)
 * o określonej wartości.
 *
 * @param {Object<string,array>} db
 * @param {string} givenKey Klucz dla którego podajemy wartość
 * @param {*} givenVal Wartość dla powyższego klucza
 * @param {string} soughtKey Klucz dla którego wartość jest szukana
 * @returns {*} Poszukiwana wartość lub undefined jeśli klucz nie istnieje
 */

const getParallel = (db, givenKey, givenVal, soughtKey) => {
	const idx = getValueIdx(db, givenKey, givenVal);
	return getValue(db, soughtKey, idx);
};

export { getParallel };

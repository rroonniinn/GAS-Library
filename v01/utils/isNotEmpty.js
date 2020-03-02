import { isEmpty } from './isEmpty';

/**
 * Sprawdza czy otrzymana wartość nie jest pusta. Zatem:
 * [] = false, [[]] = false, [[[]]] = false, {} = false, [''] = false,
 * { a: '' } = false, { a: [] } = false, { a: [[]] } = false,
 *
 * [[[1]]] = true, { a: [[1]] } = true, [0] = true, { a: 0 } = true, 0 = true
 *
 * Nie działa tylko poprawnie dla zagnieżdzonych obiektów
 * [{}] - true / a powinno być false
 *
 * @param {Any} val Dowolna wartość
 * @returns {Boolean}
 */

export const isNotEmpty = val => !isEmpty(val);

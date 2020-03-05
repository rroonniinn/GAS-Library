/**
 * Sprawdza czy przekazana wartość jest poprawnym identyfikatorem kolumny.
 * Jako taki przyjmuje tylko integer lub string w formacie 'AA'
 *
 * @param {Number|String} col
 * @returns {Boolean}
 */

const isColumn = col =>
	(typeof col === 'number' && col > 0) ||
	(typeof col === 'string' && /^[A-Z]+((?![1-9]|).)*$/.test(col));

export { isColumn };

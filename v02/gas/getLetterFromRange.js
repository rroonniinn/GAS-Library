/**
 * Zwraca pierwszą literę (lub litery) kolumny z przekazanego zakres
 * Np. A1:A -> A, AZ10:BZ -> AZ lub R4 -> R
 * @param {string} columnStr String typu 'A1:A'
 * @returns {string} Litera / y pierwszej kolumny
 */

export const getLetterFromRange = columnStr =>
	/[A-Z]+/.exec(columnStr) && /[A-Z]+/.exec(columnStr)[0];

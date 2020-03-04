import { isEmpty } from './isEmpty';

const normalize = el =>
	typeof el === 'string' ? el.replace(/[\t\r\n\s]+/g, '') : el;

/**
 * Zwraca numer ostatniej kolumny z treścią we wskazanym wierszu.
 * Pomiędzy kolumnami z treścią mogą być kolumny puste. Nie wpływa
 * to na ostateczny wynik. Dla pustego wiersza zwraca 0.
 *
 * QUnit zrobiony. Arkusz z przypadkami:
 * https://docs.google.com/spreadsheets/d/1zxVvTtQAfOKT1jbExBEvh0ZetN5TfPv-TEgy6vHpGs0/edit#gid=349586621
 *
 * @param {Object} sheetObj Obiekt arkusza
 * @param {String} colStr
 * @returns {Number} Numer ostatniego wiersza z treścią
 */

const getLastNotEmptyColInRow = (sheetObj, rowNum) => {
	const indexes = sheetObj
		.getRange(`${rowNum}:${rowNum}`)
		.getValues()
		.slice(0, 1)
		.flat(1)
		.map(normalize)
		.map((el, i) => (!isEmpty(el) ? i + 1 : 0));

	// const max = Math.max(...indexes);
	// return max === 0 ? 0 : max + 1;

	return Math.max(...indexes);
};

export { getLastNotEmptyColInRow };

/**
 * Todo:
 * - obsługa błędów dla nieprawidłowych argumentów
 */

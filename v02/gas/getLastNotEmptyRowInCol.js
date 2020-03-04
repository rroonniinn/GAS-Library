import { isEmpty } from './isEmpty';

const normalize = ([el]) =>
	typeof el === 'string' ? el.replace(/[\t\r\n\s]+/g, '') : el;

/**
 * Zwraca numer ostatniego wiersza z treścią we wskazanej kolumnie.
 * Pomiędzy wierszami z treścią mogą być wiersze puste. Nie wpływa
 * to na ostateczny wynik. Dla pustej kolumny zwraca 0.
 *
 * QUnit zrobiony. Arkusz z przypadkami:
 * https://docs.google.com/spreadsheets/d/1e7G8Yo8Np30bnyXzQm8NNyTZtBIZfK2eMjtd06f1GxM/edit#gid=0
 *
 * @param {Object} sheetObj Obiekt arkusza
 * @param {String} colStr
 * @returns {Number} Numer ostatniego wiersza z treścią
 */

const getLastNotEmptyRowInCol = (sheetObj, colStr) => {
	const indexes = sheetObj
		.getRange(`${colStr}:${colStr}`)
		.getValues()
		.map(normalize)
		.map((el, i) => (!isEmpty(el) ? i + 1 : 0));

	return Math.max(...indexes);
};

export { getLastNotEmptyRowInCol };

/**
 * Todo:
 * - możliwość przekazania równieć numeru kolumny
 * - obsługa błędów dla nieprawidłowych argumentów
 */

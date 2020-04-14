/* eslint-disable max-params */
import { isArray } from './isArray';
import { counter } from '../../v01/utils/counter';

/**
 * Helper
 * W zależności od podanych parametrów wkleja lub nie liczbę
 * porządkową w menusach.
 * @param {boolean} count Wklejać czy nie wklejać
 * @param {string} val Wartość elementu w menu
 * @param {import('../../v01/utils/counter').Counter} locCounter
 */

const print = (count, val, locCounter) =>
	count ? `${locCounter.up()}. ${val}` : val;

/**
 * Generuje menu z tablicy elementów. Wstawia podmenu (jeden poziom) oraz
 * separatory. Sposób użycia poniżej (pod funkcją)
 * @param {array|string[]} elements Tablica elementów, które mają się znaleźć w menu
 * @param {string} name Nazwa menu
 * @param {boolean} [c=false]
 * @return {void} Tylko side effect
 */

const setMenu = (elements, name, c = false) => {
	const ui = SpreadsheetApp.getUi();

	const rootMenu = SpreadsheetApp.getUi().createMenu(name);
	const mainCount = counter(1);

	elements.forEach(row => {
		const [first, second] = row;

		if (!isArray(row)) {
			rootMenu.addSeparator();
		} else if (!isArray(second)) {
			rootMenu.addItem(print(c, first, mainCount), second);
		} else {
			const sub = ui.createMenu(print(c, first, mainCount));
			const subCount = counter(1);

			row.slice(1).forEach(el => {
				const [sub1, sub2] = el;

				if (!isArray(el)) {
					sub.addSeparator();
				} else if (!isArray(sub2)) {
					sub.addItem(print(c, sub1, subCount), sub2);
				}
			});
			rootMenu.addSubMenu(sub);
		}
	});

	rootMenu.addToUi();
};

export { setMenu };

// Przykładowy obiekt menu:
// eslint-disable-next-line no-unused-vars
const exaple = [
	['Podmenu 1', ['Funkcja 1', 'menu.clearContent']], // Podmenu z jednym elementem
	'---------------', // Separator (dowolny string)
	[
		'Podmenu 2',
		['Funkcja 1', 'menu.sortColumn.a1'],
		['Funkcja 2', 'menu.sortColumn.a2'],
		'---------------',
		['Funkcja 3', 'menu.sortColumn.a2'],
	],
	'---------------', // Separator (dowolny string)
	['Test', 'tests'], // Element bez submenu
	'---------------', // Separator (dowolny string)
	['Update menu', 'insertMenu'], // Element bez submenu
];

import { getById } from './getById';

/**
 * Dodaje eventListener-y ustawiony na przekazane elementy
 * z tablicy. W tablicy jest zaznaczone do jakiego elementu dodać
 * event (id tego elementu), jaki jest rodzaj eventu (np. 'click'),
 * oraz callback
 * @example
 * // Przykładowy 'bond'
 * [
 *		['idA', 'click', showMenu],
 *		['idB', 'click', hideMenu],
 *	]
 *@param {array[]} bond Tablica z elementami i funkcjami
 */

const addEventListeners = bond => {
	bond.forEach(([elementId, action, fn]) => {
		getById(elementId).addEventListener(action, fn);
	});
};

export { addEventListeners };

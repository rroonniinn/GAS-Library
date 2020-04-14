/* eslint-disable no-plusplus */

/**
 * @typedef {Object} Counter
 * @property {() => number} up Podwyższa licznik o jeden
 * @property {() => number} down Obniża licznik o jeden
 * @property {() => number} get Zwraca wartość licznika
 */

/**
 * Bezpieczny counter posiadający trzy metody up(), down(), get()
 * odpowiednio zwiększające, zmniejszające oraz zwracające jego wartość
 * Jako opcjonalny parametr przymuje starową wartość licznika. Jeśli nie wypełniona ustawia 0
 * Użycie: const newCounter = counter()
 *
 * @param {number} [initVal=0] Starowa wartość. Domyślnie 0
 * @returns {Counter}
 */
const counter = (initVal = 0) => {
	let count = initVal;
	return {
		up() {
			return count++;
		},
		down() {
			return count--;
		},
		get() {
			return count;
		},
	};
};

export { counter };

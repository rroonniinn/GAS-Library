/* eslint-disable no-plusplus */

/**
 * Bezpieczny counter posiadający trzy metody up(), down(), get()
 * odpowiednio zwiększające, zmniejszające oraz zwracające jego wartość
 * Jako opcjonalny parametr przymuje starową wartość licznika. Jeśli nie wypełniona ustawia 0
 * Użycie: const newCounter = counter()
 *
 * @param {number} [initVal=0] Starowa wartość
 */
const counter = (initVal = 0) => {
	let count = initVal;
	return {
		up() {
			count++;
		},
		down() {
			count--;
		},
		get() {
			return count;
		},
	};
};

export { counter };

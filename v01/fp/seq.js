/**
 * Kombinator seq jest wykorzystywany do sekwencyjnego odpalenia kilku
 * funkcji po sobie z tymi samymi danymi (nie rezultatem jednej funkcji
 * przekazanym do drugiej). Przyjmuje dwie lub więcej funkcji jako
 * parametry i zwraca nową funkcję, która odpala przekazane funkcje
 * w sekwencji (przekazując do wszystkich tę samą wartość).
 * Kombinator seq sam nie zwraca żadnej wartości, zatem jeśli zamierzamy
 * wprowadzić go w środek kompozycji,
 * to musimy go połączyć z tapem
 *
 * @param {Function[]} args Funkcje mające się wykonać sekwencyjnie na danym
 * zestawie danych
 * @returns {(val: any) => void}
 */

const seq = (...args) => val => {
	args.forEach(fn => {
		fn(val);
	});
};

export { seq };

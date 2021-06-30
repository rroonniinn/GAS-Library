/**
 * Skrócenie standardowej funkcji querySelectorAll.
 * Dodatkowo zwraca w pełni poprawną tablicę z node-ami.
 * @param {string} query Query do zastosowania podczas poszukiwań
 * @returns {Element[]} Tablica z elementami HTML
 */

export const getByQueryAll = query => [
	...document.querySelectorAll(query),
];

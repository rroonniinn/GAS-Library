/**
 * Zwraca pseudolosową liczbę (integer) z przedziału min-max włącznie
 *
 * @param {number} min Liczba minimalna (włącznie)
 * @param {number} max Liczba maksymalna (włącznie)
 */

const randomInteger = (min, max) =>
	Math.floor(Math.random() * (max - min + 1) + min);

export { randomInteger };

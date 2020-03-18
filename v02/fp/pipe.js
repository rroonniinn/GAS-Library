/**
 * Własna implementacja pipe oparta na materiale z
 * // https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d
 *
 * @param {function}  fns Dowolna liczna funkcji
 * @returns {(x:any) => any} Zwraca funkcję oczekującą wartości inicjalnej
 */

const pipe = (/** @type {array} */ ...fns) => x =>
	fns.reduce((v, f) => f(v), x);

export { pipe };

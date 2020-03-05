/**
 * Własna implementacja pipe oparta na materiale z
 * // https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d
 *
 * @param {any} fns Dowolna liczna funkcji
 * @returns {any} Ostateczny wynik działania całego zestawu funkcji
 */

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

export { pipe };

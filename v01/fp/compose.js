/* eslint-disable no-plusplus */
/**
 * Własna implementacja compose
 * Pochodzi stąd: https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d
 *
 * @param {any} fns Dowolna liczna funkcji
 * @returns {any} Ostateczny wynik działania całego zestawu funkcji
 */

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

export { compose };

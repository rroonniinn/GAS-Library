/**
 * @callback PIPE
 * @param {any} [x] Wartość startowa
 */

/**
 * Własna implementacja pipe oparta na materiale z
 * https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d
 *
 * @param {...Function} fns Dowolna liczna funkcji
 * @returns {PIPE} Zwraca funkcję oczekującą wartości inicjalnej
 */

export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

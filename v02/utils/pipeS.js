/**
 * @callback PIPE
 * @param {any} [x] Wartość startowa
 */

/**
 * Implementacja pipe biorąca pod uwagę, czy ma być kontynuowana na podstawie
 * wartości v.continueChain. Współpracuje tylko z wartościami będącymi
 * rezultatami customReturn (./customReturn). Umożliwia używanie pipe bez
 * angażowania funkcji cont (./cont)
 * @typedef {import('./customReturn').UltimateReturn} UltimateReturn
 * @param {...Function} fns Dowolna liczna funkcji
 * @returns {PIPE} Zwraca funkcję oczekującą wartości inicjalnej
 */

const pipeS = (...fns) => v => fns.reduce((v, f) => v.continueChain ? f(v) : v, v);

export { pipeS }

/* FUNKCJA NIE TESTOWANA - nie wiadomo czy działa poprawnie */

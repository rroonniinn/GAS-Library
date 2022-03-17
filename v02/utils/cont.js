/**
 * Specyficzna funkcja używana w FP. Sprawdza czy wartość otrzymana
 * z poprzedniej funkcji jest truthy. Jeśli tak, to wykonuje funkcję
 * przekazaną. Jeśli nie, to przekazuje otrzymaną wartość. Działa
 * tylko z wartościami będącymi rezultatami customReturn (./customReturn)
 * @typedef {import('./customReturn').UltimateReturn} UltimateReturn
 * @param {Function} func Funkcja mająca się wykonać jeśli wartość
 * przekazana ma wartość true w continueChain
 * @returns {(val: UltimateReturn) => Function}
 */

export const cont = func => val => (val.continueChain ? func(val) : val);

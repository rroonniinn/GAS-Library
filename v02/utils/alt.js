/**
 * @typedef {import('./customReturn').UltimateReturn} UltimateReturn
 */

/**
 * Specyficzna funkcja używana w FP. Sprawdza czy wartość otrzymana
 * z poprzedniej funkcji jest truthy. Jeśli tak, to wykonuje funkcję
 * przekazaną. Jeśli nie, to przekazuje otrzymaną wartość. Działa
 * tylko z wartościami będącymi rezultatami customReturn
 * @returns {(val: UltimateReturn) => Function}
 */

export const alt = func => val => (val.continueChain ? func(val) : val);

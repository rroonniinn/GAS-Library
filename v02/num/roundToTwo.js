/**
 * Zaokrągla liczbę do dwóch miejsc po przecinku
 * Taken from: https://www.delftstack.com/howto/javascript/javascript-round-to-2-decimal-places/
 * @param {number} num
 * @returns {number}
 */

// @ts-ignore
export const roundToTwo = num => +`${Math.round(`${num}e+2`)}e-2`;

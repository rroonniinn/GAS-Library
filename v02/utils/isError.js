/**
 * Naiwna funkcja sprawdzająca czy wartość jest obiektem błędu.
 * Działa nieprawidłowo dla obiektów które posiadają właściwości
 * analogiczne do Error. Zasadniczo jednak jest wystarczająca dla mnie.
 * @param {*} val Sprawdzana wartość
 * @returns {boolean} Info czy jest Errorem czy nie
 */

export const isError = val => !!(val && val.stack && val.message);

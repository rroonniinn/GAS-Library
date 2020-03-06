/**
 * Sprawdza czy przekazana wartośc jest obiektem
 * arkusza (Sheet). Weryfikuje czy dostępna jest
 * na nim metoda .activate()
 *
 * @param {Any} val Sprawdzana wartość
 */

export const isSheet = val => !!val.activate;

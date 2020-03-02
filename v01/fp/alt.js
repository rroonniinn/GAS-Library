/**
 * Kombinator alt dostarcza prostą logikę warunkową zapewniając
 * określone zachowanie zależne od otrzymanego wyniku true / false.
 * Bierze dwie funkcje jako argumenty i zwraca wynik pierwszej
 * jeśli jej wartość jest zdefiniowana (nie false, null ani undefined),
 * jeśli jest inaczej zwraca wynik drugiej funkcji.
 * Odpowiednik short-circuit evaluation (||)
 *
 * @param {Function} func1 Funkcja, która się wykona jeśli jej wynik będzie truthy
 * @param {Function} func2 Funkcja, która się wykona jeśli wynik func1 jest falsy
 * @returns {any} Wynik jednej z dwóch funkcji składowych
 */

const alt = (func1, func2) => val => func1(val) || func2(val);

export { alt };

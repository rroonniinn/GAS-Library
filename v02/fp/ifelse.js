/**
 * Funkcja działająca na zasadzie if / else.
 * Przyjmuje 3 callbacki. Pierwszy jest wykonywany na przekazaną na dalszym
 * etapie wartość. Jeśli jej wynik jest truthy to wykonuje drugą przekazaną
 * funkcję (na wartości). Jeśli jest falsely to wykonywana jest trzecia funkcja.
 * @param {Function} p Testuje wartość logiczną
 * @param {Function} f1 Wykonuje się jeśli true
 * @param {Function} f2 Wykonuje się jeśli false
 * @returns {(val: any) => Function}
 */
export const ifelse = (p, f1, f2) => v => (p(v) ? f1(v) : f2(v));

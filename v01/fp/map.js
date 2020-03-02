/**
 * Zcurrowana, standardowa funkcja map przerobiona
 * do zastowowań FP w kompozycjach
 *
 * @param {Function} fn Funkcja do zastosowania na każdym
 * elemencie tablicy przekazanej na kolejnym etapie (komopzycji)
 */
const map = fn => arr => arr.map(fn);
export { map };

/**
 * Zcurrowana, standardowa funkcja forEach przerobiona
 * do zastowowań FP w kompozycjach
 *
 * @param {Function} fn Funkcja do zastosowania na każdym
 * elemencie tablicy przekazanej na kolejnym etapie (komopzycji)
 */
const forEach = fn => arr => arr.forEach(fn);
export { forEach };

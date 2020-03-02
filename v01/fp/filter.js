/**
 * Zcurrowana, standardowa funkcja filter przerobiona do zastowowań FP w kompozycjach
 *
 * @param {Function} fn Funkcja do zastosowania na każdym elemencie tablicy przekazanej na kolejnym etapie (komopzycji)
 */
const filter = fn => arr => arr.filter(fn);
export { filter };

/**
 * Sort do zastosowań w kompozycjach FP
 *
 * @param {Function} callback do wykonania podczas porównyania elementów
 */
const sort = callback => arr => arr.sort(callback);
export { sort };

/**
 * Returns an array of indexes of given value for given key in db.
 * If you need only first occurrence, use getValueIdx.
 * If value not found returns empty array
 * @param {Object<string, array>} db DataBase
 * @param {string} key Key where value belongs
 * @param {*} val Sought value
 * @returns {number[]}
 */

const getValueIdxes = (db, key, val) =>
	db[key].map((v, i) => (v === val ? i : null)).filter(v => v !== null);

export { getValueIdxes };

/**
 * Returns index of given value for given key in db. It returns only the
 * first occurrence. For multiple occurrences use 'getValueIdxes'.
 * If value not found returns -1
 * @param {Object<string, array>} db DataBase
 * @param {string} key Key where value belongs
 * @param {*} val Sought value
 * @returns {number}
 */

const getValueIdx = (db, key, val) => db[key].indexOf(val);

export { getValueIdx };

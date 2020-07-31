/**
 * Returns value of given index for given key in db.
 * If not found returns undefined
 * @param {Object<string, array>} db DataBase
 * @param {string} key Key where value belongs
 * @param {number} idx Index value
 * @returns {*|undefined}
 */
const getValue = (db, key, idx) => db[key][idx];

export { getValue };

/**
 * Change value on given index for given key.
 * Returns new db object without modifying an oryginal.
 * If key is missing in db, nothing is changed.
 * If index exceed db arr size nothing is changed.
 * @param {Object<string, array>} db DataBase
 * @param {string} key Key where value belongs
 * @param {number} idx Index value
 * @returns {Object<string, array>} New DataBase
 */
const setValue = (db, key, idx, val) => {
	const newDb = JSON.parse(JSON.stringify(db));
	if (!newDb[key]) return newDb;
	if (newDb[key].length <= idx) return newDb;
	newDb[key][idx] = val;
	return newDb;
};

export { setValue };

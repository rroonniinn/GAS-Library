import { remove } from '../arr/remove';

/**
 * Removes record from db based on its index
 * Returns new db object without modifying an oryginal.
 * If index exceed db arr size nothing is changed.
 * @param {Object<string, array>} db DataBase
 * @param {number} idx Index value
 * @returns {Object<string, array>} New DataBase
 */

const removeRecord = (db, idx) => {
	const newDb = JSON.parse(JSON.stringify(db));

	Object.keys(newDb).forEach(
		key => (newDb[key] = remove(newDb[key], idx))
	);

	return newDb;
};

export { removeRecord };

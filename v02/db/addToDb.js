import { deepCopy } from '../obj/deepCopy';

/**
 * Adding new elements to db without modifying existing (passed) db
 * @param {Object<string, any>} db
 * @param {Object<string, any>[]} newElements An Array of db elements
 * @returns {Object<string, any[]>}
 */

const addToDb = (db, newElements) => {
	const combinedDb = deepCopy(db);
	newElements.forEach(newPi => {
		Object.keys(newPi).forEach(key => {
			combinedDb[key].push(newPi[key]);
		});
	});
	return combinedDb;
};

export { addToDb };

/**
 * TODO: Sprawdzenie czy nowe elementy mają wszystkie klucze
 * istniejące w bazie
 */

import { remove } from '../arr/remove';

const removeRecordFromDb = (index, db) => {
	Object.keys(db).forEach(key => (db[key] = remove(db[key], index)));
};

export { removeRecordFromDb };

/**
 * Zamienia obiekt o strukturze db na tablicę 2d w porządku zgodnym z
 * przekazaną tablicą kluczy (ich kolejnością)
 *
 * @param {array} dbKeysOrder
 * @param {Object<string, array>} db DataBase
 * @returns {array[]}
 */
const dbIntoArr = (dbKeysOrder, db) => {
	const arr = [];
	db.i.forEach((val, index) => {
		const row = [];
		dbKeysOrder.forEach(key => {
			row.push(db[String(key)][index]);
		});
		arr.push(row);
	});

	return [dbKeysOrder].concat(arr);
};

export { dbIntoArr };

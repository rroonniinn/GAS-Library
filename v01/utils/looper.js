/**
 * Funkcja rekursywna odpalająca przekazany callback określoną
 * liczę razy. Przydatna do testów wydajności
 *
 * @param {Number} count Liczba od 1 do 1000
 * @param {Function} callback
 * @returns
 */
const looper = (count, callback) => {
	if (count <= 0) throw new Error('Wrong count number');
	if (count > 1000) throw new Error('Too much recursion');
	if (count === 1) return callback();

	callback();
	return looper(count - 1, callback);
};

export { looper };

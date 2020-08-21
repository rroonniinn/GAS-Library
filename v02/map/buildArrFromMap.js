/**
 * Buduje pionową tablicę 2D z obiektu Map.
 * Dla wartości które nie są tablicami nazwa klucza
 * trafia do pierwszej kolumny, zaś wartość do drugiej.
 * Dla wartości będących tablicą - nazwa klucza jak wyżej, ale wartość
 * jest wklejana "pod spodem". Jeśli wartość wynosi 'null' wtedy wklejany
 * jest tylko klucz, nie tworzona jest komórka dla wartości.
 * @param {Map} mapObj
 * @returns {array[]}
 */

const buildArrFromMap = mapObj => {
	const res = [];
	mapObj.forEach((val, key) => {
		if (!Array.isArray(val)) {
			res.push([key, val]);
		} else {
			res.push([key]);
			val.forEach(row => res.push(row));
		}
	});

	return res.map(row => row.filter(cell => cell));
};

export { buildArrFromMap };

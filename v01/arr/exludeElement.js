/**
 * Usuwa wskazany element (każde wysąpienie) z tablicy
 *
 * @param {Any} el Element do usunięcia
 * @param {Array} arr Tablica
 * @returns {Array}
 */

const excludeElement = (el, arr) => {
	const i = arr.indexOf(el);
	if (i >= 0) {
		const newArr = arr.slice(0, i).concat(arr.slice(i + 1));
		return excludeElement(el, newArr);
	}
	return arr;
};

export { excludeElement };

/**
 * Zamiana poziomej tablicy na pionową (2D)
 * @param {array} horArr
 * @returns {array[]}
 */
const transpose = horArr =>
	horArr.reduce((acc, cell) => {
		acc.push([cell]);
		return acc;
	}, []);

export { transpose };

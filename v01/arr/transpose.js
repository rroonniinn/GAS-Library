// zamiana poziomej tablicy na pionową (2D)
const transpose = horArr =>
	horArr.reduce(function(acc, cell) {
		acc.push([cell]);
		return acc;
	}, []);

export { transpose };

import { isDate } from '../utils/isDate';

/**
 * Tworzy głęboką kopię tablicy 2D nie rozwalając przy tym dat.
 * Wymaga nieco pracy - np. walidacji
 * @param {array[]} arr
 * @returns {array[]}
 */

const deepCopyArr2d = arr => {
	const dateMap = arr.map(row => row.map(() => 0));

	arr.forEach((row, y) => {
		row.forEach((cell, x) => {
			if (isDate(cell)) dateMap[y][x] = 1;
			// else dateMap[y][x] = 0;
		});
	});

	const copy = JSON.parse(JSON.stringify(arr));

	dateMap.forEach((row, y) => {
		row.forEach((cell, x) => {
			if (cell === 1) copy[y][x] = new Date(copy[y][x]);
		});
	});

	return copy;
};

export { deepCopyArr2d };

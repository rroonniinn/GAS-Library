/**
 * Zmiana tablicy 2d pionowej na poziomą
 * @param {array[]} arr Tablica pionowa
 * @returns {array[]} arr Tablica pozioma
 */

const transposeFromVer = arr =>
	arr.reduce((res, row, rowIdx) => {
		row.forEach((cell, cellIdx) => {
			// eslint-disable-next-line no-unused-expressions
			res[cellIdx]
				? (res[cellIdx][rowIdx] = cell)
				: res.push([cell]);
		});

		return res;
	}, []);
export { transposeFromVer };

/**
 * Lączy tablice horyzontalnie pobierając jako argument
 * tablicę zawierającą tablice do połączenia. Zakładamy,
 * że mają taką sama długość. UWAGA: nie testowane!!
 *
 * @param {array[][]} arr
 */
const concatArrsHorizontally = arr =>
	arr.reduce((res, col) => {
		col.forEach((cell, x) => {
			res[x].push(...cell);
		});

		return res;
	});
export { concatArrsHorizontally };

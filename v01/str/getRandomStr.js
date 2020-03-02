/**
 * Generuje pseudolosowy ciąg znaków
 * Wzięte stąd - https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 * @param {Number} length Długość ciągu (od 1 do 10)
 */

const getRandomStr = length =>
	Math.random()
		.toString(36)
		.substr(2, length);

export { getRandomStr };

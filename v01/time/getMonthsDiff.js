/**
 * Zwraca różnicę miesięcy pomiędzy datami. Nie zajmuje się
 * fragmentami miesięcy. Czyli zakłada, że różnica dotyczy
 * tylko pełnych miesięcy. d1 musi być wcześniejsze niż d2
 * Wzięte: https://stackoverflow.com/questions/2536379/difference-in-months-between-two-dates-in-javascript
 * @param {Date} d1
 * @param {Date} d2
 * @returns {number}
 */

const getMonthsDiff = (d1, d2) => {
	let months;
	months = (d2.getFullYear() - d1.getFullYear()) * 12;
	months -= d1.getMonth();
	months += d2.getMonth();
	return months <= 0 ? 0 : months;
};

export { getMonthsDiff };

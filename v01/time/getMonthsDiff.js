/**
 * Zwraca różnicę miesięcy pomiędzy datami. Nie zajmuje się
 * fragmentami miesięcy. Czyli zakłada, że różnica dotyczy
 * tylko pełnych miesięcy. Zasadniczo zakładamy, że d1 jest wcześniejsze
 * niż d2. Jeśli argument `allowNegative`
 * jest pominięty to w przypadku gdy d1 jest późniejsze niż d2
 * funkcja zwróci zero (zamiast wartości ujemnej)
 * Wzięte: https://stackoverflow.com/questions/2536379/difference-in-months-between-two-dates-in-javascript
 * @param {Date} d1 Data wcześniejsza
 * @param {Date} d2 Data późniejsza
 * @param {boolean} allowNegative Info czy akceptowana jest różnica mniejsza niż zero (jeśli d1 jest późniejsze)
 * @returns {number}
 */

const getMonthsDiff = (d1, d2, allowNegative = false) => {
	let months;
	months = (d2.getFullYear() - d1.getFullYear()) * 12;
	months -= d1.getMonth();
	months += d2.getMonth();

	if (allowNegative) {
		return months;
	}
	return months <= 0 ? 0 : months;
};

export { getMonthsDiff };

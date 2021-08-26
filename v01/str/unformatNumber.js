/**
 * Zamienia liczbę sformatowaną jako string (1 000,43) na normalnego
 * floata (1000.43). Liczba jest sformatowana funkcją num/formatNumber()
 * @param {string} formattedNum
 * @returns {number}
 */

const unformatNumber = formattedNum => {
	const properNum = Number(
		formattedNum.replace(',', '.').replace(/ /g, '')
	);

	return Number.isNaN(properNum) ? 0 : properNum; // 1.
};

export { unformatNumber };

/**
 * 1.) Jeśli zostanie wpisane coś nieprawidłowego to wartością będzie 0
 */

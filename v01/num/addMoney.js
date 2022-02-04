/**
 * Poprawnie sumuje dowolne liczby posiadające reprezentujące pieniądze.
 * Czyli posiadające do dwóch miejsc po przecinku. Rozwiązuje problem dodawania
 * wartości dziesiętnych prze komputery opisany tu:
 * https://stackoverflow.com/questions/3439040/why-does-adding-two-decimals-in-javascript-produce-a-wrong-result
 * @param {number[]} moneyArr
 * @returns {number}
 */

export const addMoney = moneyArr =>
	moneyArr.reduce(
		(res, num) =>
			(Math.round(Number(res.toFixed(2)) * 100) +
				Math.round(Number(num.toFixed(2)) * 100)) /
			100,
		0
	);

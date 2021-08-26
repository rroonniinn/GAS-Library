/**
 * Zwraca numer jako string z formatowaniem oddzielającym tysiące spacją - np. 100 000.
 * Aby ponownie sformatować taki string do postaci floata, użyj: str/unformatNumber()
 *
 * @param {number} num Wartość do sformatowania
 * @param {number} fractures Opcjonalna liczba miejsc po przecinku. Domyślnie 2
 * @returns {string}
 */
export const formatNumber = (num, fractures = 2) =>
	num
		.toFixed(fractures)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		.replace('.', ',');

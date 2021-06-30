/**
 * Zwraca numer jako string z formatowaniem oddzielającym tysiące spacją - np. 100 000
 *
 * @param {number} num Wartość do sformatowania
 * @param {number} fractures Opcjonalna liczba miejsc po przecinku. Domyślnie 2
 */
export const formatNumber = (num, fractures = 2) =>
	num
		.toFixed(fractures)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		.replace('.', ',');

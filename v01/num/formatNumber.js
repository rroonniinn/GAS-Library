/**
 * Zwraca numer jako string z formatowaniem oddzielającym tysiące spacją - np. 100 000
 *
 * @param {Number} num Wartość do sformatowania
 */
export const formatNumber = num =>
	num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

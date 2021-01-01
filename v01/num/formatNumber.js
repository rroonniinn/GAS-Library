/**
 * Zwraca numer jako string z formatowaniem odzielającym tysiące spacją - np. 100 000
 *
 * @param {Number} num Wartość do zformatowania
 */
export const formatNumber = num => num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

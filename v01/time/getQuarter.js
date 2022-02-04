/**
 * Zwraca pierwszy dzień kwartału do którego należy przekazana data
 * @param {Date} date
 * @returns {Date}
 */

export const getQuarter = date => {
	const year = date.getFullYear();
	const monthNum = date.getMonth() + 1;

	if (monthNum >= 10) return new Date(year, 9, 1);
	if (monthNum >= 7) return new Date(year, 6, 1);
	if (monthNum >= 4) return new Date(year, 3, 1);
	return new Date(year, 0, 1);
};

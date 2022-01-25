/**
 * Zamienia pierwsze 12 cyfr rzymskich na arabskie. Jeśli inny string zostanie
 * przekazany to zwraca 0
 * @param {string} str
 * @returns {number}
 */

export const romanToArab = str => {
	const trans = {
		I: 1,
		II: 2,
		III: 3,
		IV: 4,
		V: 5,
		VI: 6,
		VII: 7,
		VIII: 8,
		IX: 9,
		X: 10,
		XI: 11,
		XII: 12,
	};

	return trans[str] || 0;
};

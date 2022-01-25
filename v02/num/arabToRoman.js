/**
 * Zamienia pierwsze 12 cyfr arabskich na rzymskie
 * @param {number} num Numer od 1 do 12
 * @returns {string}
 */

export const arabToRoman = num => {
	if (num > 12 && num < 1) {
		return 'Wrong number. Accepted only: 1-12 ';
	}
	const trans = {
		1: 'I',
		2: 'II',
		3: 'III',
		4: 'IV',
		5: 'V',
		6: 'VI',
		7: 'VII',
		8: 'VIII',
		9: 'IX',
		10: 'X',
		11: 'XI',
		12: 'XII',
	};

	return trans[num];
};

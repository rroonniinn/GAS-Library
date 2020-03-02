/**
 * Zwraca string ze zmienioną kapitalizacją wg. wzoru:
 * No opt:
 * aaaa -> Aaaa,
 * AAAA -> Aaaa,
 * AAAA AAAA -> Aaaa aaaa,
 *
 * opt - ma wpływ tylko na więcej niż jeden wyraz:
 * AAAA AAAA -> Aaaa Aaaa
 *
 * @memberof Lib_Str
 *
 * @param {string} str Dowolny ciąg znaków
 * @param {number} [opt=0] Opcjonalny, dowolny znak. Jeśli zostanie zastosowany każdy wyraz będzie zaczynał się dużą literą
 * @returns {string} Zmieniony string
 */
const proper = (str, opt = 0) => {
	const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

	// Obsługa błędu
	if (typeof str !== 'string') return '';

	// Zamiana całości na lowercase
	const lower = str.toLowerCase();
	if (opt === 0) {
		// Standard: pierwsza litera stringu duża
		return capitalize(lower);
	}
	// Weryfikacja czy zdanie czy pojedyńczy wyraz
	if (lower.indexOf(' ') < 0) {
		return capitalize(lower);
	}
	const arr = lower.split(' ');
	const capitalizedArr = arr.map(word => capitalize(word));
	return capitalizedArr.join(' ');
};

export { proper };

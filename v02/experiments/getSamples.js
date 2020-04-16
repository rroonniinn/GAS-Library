/**
 * @typedef {import('./types').ExpSetup} ExpSetup
 */

/**
 * Tablica rozmiarów arkuszy które mają się znależć w plikach.
 * Samplami nazywamy zestawy danych na których wykonywany jest eksperyment.
 * @param {ExpSetup} expSetup Plik config eksperymentu
 * @return {{code: string, size: number}[]} betterSamples
 */
const getSamples = expSetup =>
	Object.entries(expSetup.samples).map(([code, size]) => ({
		code,
		size,
	}));

export { getSamples };

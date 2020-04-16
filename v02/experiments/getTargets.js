/* eslint-disable max-lines-per-function */
import { getProp } from '../../v01/gas/properties';

/**
 * Obiekt z ID zewnętrznych plików z danymi do eksperymentów Ext.
 * Kluczami są s1, s2 itp. Ponieważ Apps Script sprawdza wszystko przed
 * odpaleniem, w sytuacji gdy jeszcze nie ma struktury propsy są puste,
 * aby nie wywalało błędu inicjuje je zatem pustym obiektem
 * @type {Object<string, string>} EXTERNAL_URLS
 */

const externals = getProp('script', 'EXTERNALS') || {};

/**
 * Tablica docelowych arkuszy (tylko zawierających dane)
 * @param {import('./types').ExpSetup} expSetup Obiekt z ustawieniami eksperymentu
 * @return {[string, import('./types').ExpSheet][]} targets Tablica docelowych wielkości arkuszy
 */

const getTargets = expSetup => {
	const { samples } = expSetup;
	/**
	 * Arkusze testowe - na nich operują eksperymenty, więc nazywamy je celami
	 * @type {Object<string, import('./types').ExpSheet>} targets Dane arkuszy testowych
	 */

	const targets = {
		target1: {
			status: !!samples.s1,
			printName: `Arr 1: ${samples.s1}`,
			size: samples.s1,
			sheetLocal: String(samples.s1),
			sheetHub: String(samples.s1),
			externalId: externals.s1,
		},
		target2: {
			status: !!samples.s2,
			printName: `Arr 2: ${samples.s2}`,
			size: samples.s2,
			sheetLocal: String(samples.s2),
			sheetHub: String(samples.s2),
			externalId: externals.s2,
		},
		target3: {
			status: !!samples.s3,
			printName: `Arr 3: ${samples.s3}`,
			size: samples.s3,
			sheetLocal: String(samples.s3),
			sheetHub: String(samples.s3),
			externalId: externals.s3,
		},
		target4: {
			status: !!samples.s4,
			printName: `Arr 4: ${samples.s4}`,
			size: samples.s4,
			sheetLocal: String(samples.s4),
			sheetHub: String(samples.s4),
			externalId: externals.s4,
		},
		target5: {
			status: !!samples.s5,
			printName: `Arr 5: ${samples.s5}`,
			size: samples.s5,
			sheetLocal: String(samples.s5),
			sheetHub: String(samples.s5),
			externalId: externals.s5,
		},
		target6: {
			status: !!samples.s6,
			printName: `Arr 6: ${samples.s6}`,
			size: samples.s6,
			sheetLocal: String(samples.s6),
			sheetHub: String(samples.s6),
			externalId: externals.s6,
		},
		target7: {
			status: !!samples.s7,
			printName: `Arr 7: ${samples.s7}`,
			size: samples.s7,
			sheetLocal: String(samples.s7),
			sheetHub: String(samples.s7),
			externalId: externals.s7,
		},
		target8: {
			status: !!samples.s8,
			printName: `Arr 8: ${samples.s8}`,
			size: samples.s8,
			sheetLocal: String(samples.s8),
			sheetHub: String(samples.s8),
			externalId: externals.s8,
		},
	};

	// Zwraca tylko te, króre są aktywne, czyli
	// mają wypełnione odpowiednie sloty w configu

	return Object.entries(targets).filter(([, { status }]) => status);
};

export { getTargets };

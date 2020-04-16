/* eslint-disable max-params */
import { getSheet } from '../gas/getSheet';
import { getProp } from '../../v01/gas/properties';

/**
 * @type {string} ID pliku HUBa, którym znajdują się arkusze dla
 * eksperymentu typu "hub"
 */

const HUB = getProp('script', 'HUB');

/**
 * Zwraca odpowieni arkusz do modyfikacji na podstawie parametru 'geo'
 * określającego czy ma być to external, local czy hub
 *
 * @param {'ext'|'loc'|'hub'} geo Określenie 'ext', 'loc', 'hub'
 * @param {import('./types').ExpSheet} target Numer celu arkusza np. target1
 * @param {import('./types').ExpSetup} expSetup Obiekt z ustawieniami eksperymentu
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} Obiket arkusza
 */

const getProperSheet = (geo, target, expSetup) => {
	const { externalsSheetName } = expSetup.misc;

	if (geo === 'loc') return getSheet(target.sheetLocal);
	if (geo === 'hub') return getSheet(target.sheetHub, HUB);
	if (geo === 'ext')
		return getSheet(externalsSheetName, target.externalId);
};

export { getProperSheet };

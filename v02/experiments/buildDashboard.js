/* eslint-disable complexity */
import { copyFile } from '../gas/copyFile';
import { styleSpreadsheet } from '../gas/styleSpreadsheet';

/**
 * Tworzy i formatuje dashboard spinający wszystkie wyniki
 * @param {import('./types').ExpSetup} expSetup Obiekt z ustawieniami eksperymentu
 * @param {GoogleAppsScript.Drive.Folder} folder - Folder, w którym znajduje mają się znaleźć pliki
 * @returns  {(ids: Object<string, string>) => void}
 */

const buildDashboard = (expSetup, folder) => ids => {
	const { title, misc } = expSetup;
	const {
		dashboardName,
		dashboardTemplate,
		dashboardColor,
		dashboardMainSheet,
		dashboardDataSheet,
	} = misc;

	/* Nazwa pliku */
	const name = `${title} : ${dashboardName}`;

	/* Nowy plik */
	const newFileId = copyFile(dashboardTemplate, name, folder).getId();

	const makeUrl = id => `https://docs.google.com/spreadsheets/d/${id}`;

	/* Pobranie urli plików */
	const urls = Object.values(ids).map(makeUrl);

	/* Zmiany estetyczne */

	/**
	 * @type {import('../gas/styleSpreadsheet').SheetMassChangesOptions}
	 */

	const changes = {
		[dashboardMainSheet]: [
			['A4:AQ24', { background: dashboardColor }],
			['A63:AQ82', { background: dashboardColor }],
		],
		[dashboardDataSheet]: [
			['B2', { values: title }],
			['B5', { values: urls[0] || '' }],
			['J5', { values: urls[1] || '' }],
			['R5', { values: urls[2] || '' }],
			['Z5', { values: urls[3] || '' }],
		],
	};
	styleSpreadsheet(newFileId, changes);
};
export { buildDashboard };

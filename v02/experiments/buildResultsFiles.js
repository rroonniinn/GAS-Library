/* eslint-disable max-params */

import { copyFile } from '../gas/copyFile';
import { getSheet } from '../gas/getSheet';
import { styleSheet } from '../gas/styleSheet';
import { styleSpreadsheet } from '../gas/styleSpreadsheet';
import { addToProps } from '../../v01/gas/properties';
import { getStylinForOthers, gerStylingForResults } from './styling';
import { stylingChart } from './stylingChart';

/**
 * @typedef {import('./types').ExpSetup} ExpSetup
 */

/**
 * Tworzy pliki z wynikami eksperymentów (w przekazanym folderze) oraz
 * umieszcza w propsach skryptu id utworzonych plików
 * @param {ExpSetup} expSetup Obiekt z ustawieniami eksperymentu
 * @param {GoogleAppsScript.Drive.Folder} folder Folder w którym zostaną umieszczone pliku
 * @param {{}} urls Pusty obiekt do którego funkcja wrzuci Id plików wynikowych
 * @returns {([string, PrintResults]) => void}
 */

const buildResultFile = (expSetup, folder, urls) => ([geo, fileData]) => {
	const { title, misc } = expSetup;
	const { templatPrintTo, printToSubname } = misc;

	/* Nazwa pliku */
	const name = `${title} : ${printToSubname} : ${fileData.prefix}. ${fileData.name}`;

	/* Nowy plik */
	const newFileId = copyFile(templatPrintTo, name, folder).getId();

	/* Zapisanie jego ID w przekazanym by reference obiekcie url */
	urls[geo] = newFileId;

	/* Zmiany estetyczne */
	styleSpreadsheet(newFileId, getStylinForOthers(fileData, title))
		.getSheets()
		.filter(sheet => /[A-Z]$/.test(sheet.getName()))
		.forEach(sheet =>
			styleSheet(gerStylingForResults(fileData), sheet)
		);

	/* Formatowanie wykresu */
	stylingChart(getSheet('Wyniki', newFileId), 'A', 13, fileData);
};

/**
 * Tworzy i formatuje arkusze służące do wklejania wyników eksperymentów
 * @param {ExpSetup} expSetup Plik config eksperymentu
 * @param {GoogleAppsScript.Drive.Folder} folder - Folder, w którym znajduje mają się znaleźć pliki
 */

const buildResultsFiles = (expSetup, folder) => {
	const { printTo } = expSetup;

	// Do poniższego obiektu trafiają url powstałych plików
	const urls = {};

	// Dla każdego 'geo' tworzony jest nowy plik z wynikami
	Object.entries(printTo).forEach(
		buildResultFile(expSetup, folder, urls)
	);

	// Uzyskane urle ładowane są do propsów
	addToProps('script', 'PRINT_TO_PROPS', urls);
};

export { buildResultsFiles };

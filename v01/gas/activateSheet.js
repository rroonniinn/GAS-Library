/**
 * Aktywuje arkusza o przekazanej nazwie.
 * Tym samy przełącza na niego interfejs
 * @param {string} sheetName
 */

const activateSheet = sheetName => {
	SpreadsheetApp.getActive()
		.getSheetByName(sheetName)
		.activate();
};

/* TODO: Możliwość przekazania Sheeta dorobić */

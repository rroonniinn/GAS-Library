/**
 * Możliwia najszybsza funkcja usuwająca wiersze - uwzględnia zamrożone
 * wiersze. Nie odczytuje wysokości arkusza. Obecnie `rowsToDel` nie może
 * przekroczyć faktycznej liczby dostępnych wierszy.
 * Można by obsłużyć jeszcze sytuację w której podano za dużą wartość
 * `rowsToDel` - wtedy trzeba wstawić jeszcze jeden blok try / catch.
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet Arkusz w którym należy usunąć wiersze
 * @param {number} actBelowRow Nr wiersza poniżej której rozpoczyna się usuwanie wierszy
 * @param {number} rowsToDel Liczba wierszy do usunięcia
 */

const deleteRowSafe = (sheet, actBelowRow, rowsToDel) => {
	try {
		sheet.deleteRows(actBelowRow + 1, rowsToDel);
		// 1. Jeśli zablokowane wiersze nie pozwalają usunąć
	} catch (error) {
		// Jeśli wierszy do usunięcia jest więcej niż 0
		if (rowsToDel - 1 !== 0) {
			sheet.deleteRows(actBelowRow + 1, rowsToDel - 1);
		}
		// Czyszczenie zawartości pozostawionego jednego wiersza
		sheet.getRange('A2:2').clearContent();
	}
};

export { deleteRowSafe };

/**
 * TODO: Obecnie `rowsToDel` nie może
 * przekroczyć faktycznej liczby dostępnych wierszy.
 * Można by obsłużyć jeszcze sytuację w której podano za dużą wartość
 * `rowsToDel` - wtedy trzeba wstawić jeszcze jeden blok try / catch.
 */

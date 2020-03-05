import { getRangeRelative } from './getRangeRelative';

/**
 * Usuwa treść zachowując formatowanie w przekazanym
 * obiekcie arkusza w przekazanym zakrese. Zakres może przyjmować
 * następującą postać: dla przykładowego
 * arkusza o wymiarach A1:J10 (10 x 10):
 * 'A' - zakres zaczyna się od ostatniego pustego wiersza kolumny A,
 * kończy się na ostatniej kolumnie. Np. A3:J
 * '1' - zakres zaczyna się od ostatniej pustej kolumny wiersza 1,
 * kończy się na ostatnim wierszu. Np. C1:J
 * 'A1' - zakres zaczyna się w A1, kończy na ostatnim wierszu
 * i kolumnie Np. A1:J10 (bez względu na znajdujące się już w arkuszu dane)
 * 'A3:B5' zwraca nie zmieniony zakres
 *
 * Jeśli przekazany zakres wychodzi poza arkusz, są dodawane dodatkowe
 * wiersze i/lub kolumny
 *
 * * PRZETESTOWANA (test zbudowany)
 *
 * @param {Object} sheetObj
 * @param {String|Number} range
 * @return {Object} sheetObj
 */

const clearContent = (sheetObj, range) => {
	getRangeRelative(sheetObj, range).rangeObj.clearContent();
	return sheetObj;
};

export { clearContent };

import { tail } from '../v01/arr/tail';
import { getSheetFp as getSheet } from '../v01/gas/getSheet';
import { getValues } from '../v01/gas/getValues';

import { pipe } from './fp/pipe';

pipe(
	() => console.log,
	v => v
);

pipe(getValues, tail, () => console.log, tail, tail);

// --import { tail } from '../arr/tail';

/**
 * Pobiera wszystkie dane ze wskazanego arkusza usuwając nagłowek.
 * Jeśli parametr fileId nie jest podany wtedy szuka arkusza pliku
 * w którym został uruchomiony (bound). Jeśli paramet występuje,
 * wtedy otwiera plik o wskazanym id w w nim szuka arkusza
 *
 * @param {String} sheetName Nazwa arkusza z danymi
 * @param {String} fileId Id pliku (opcjonalny)
 * @returns {Array[]}
 */

const getTableDataNoHeader = (sheetName, fileId) =>
	pipe(getSheet(sheetName, fileId), getValues, tail)();

export { getTableDataNoHeader };

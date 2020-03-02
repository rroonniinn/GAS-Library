/* eslint-disable max-params */
import { getSheet } from './getSheet';
/**
 * Usuwa treść (zostawiając formatowanie) we wskazanym arkuszu i we
 * wskazanym zakresie. Zwraca obiekt arkusza
 *
 * @param {String} sheet Nazwa arkusza
 * @param {String} range Zakres danych do usunięcia
 * @param {String} fileId Opcjonalnie id pliku. Jeśli nie podane,
 * aplikuje się lokalnie (bound script).
 */
const clearContent = (sheet, range, fileId = null) =>
	getSheet(sheet, fileId)
		.getRange(range)
		.clearContent()
		.getSheet();

export { clearContent };

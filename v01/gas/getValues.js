/**
 * Pobiera zawartość wkazanego zakresu w przekazanym arkuszu
 *
 * @memberof Lib_Gas
 *
 * @param {object} sheetObj Obiekt arkusza
 * @param {string} [range] Zakres np. <tt>A2:B2'</tt>, <tt>'A4'</tt>.
 * Jeśli brak, to zostanie pobrana cała, wypełniona
 * zawartość danych (getDataRange)
 * @returns {Array[]} Tablica 2D z pobranymi wartościami
 */

const getValues = (sheetObj, range) => {
	if (range) return sheetObj.getRange(range).getValues();
	return sheetObj.getDataRange().getValues();
};
/**
 * Zcurowana wersja przyjmująca na pierwszym kroku zakres
 * a na drugim obiekt arkusza
 *
 * @param {string} [range] Zakres np. <tt>A2:B2'</tt>, <tt>'A4'</tt>.
 * Jeśli brak, to zostanie pobrana cała, wypełniona
 * zawartość danych (getDataRange)
 */
const getValuesFp = range => sheetObj => getValues(sheetObj, range);

export { getValues, getValuesFp };

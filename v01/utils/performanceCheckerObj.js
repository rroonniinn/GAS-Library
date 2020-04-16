/* eslint-disable max-params */

/**
 * Sprawsza czas wykonywania się przekazanej funkcji.
 * Loguje czas. Zwraca efekt działania funkcji (czyli działa trochę
 * jak tap). Przyjmuje obiekt logResult (Array) do którego po referencji
 * dodaje nowy wpis z wynikiem - czasem działania funkcji oraz opisami
 * (pozostałe argumenty)
 *
 * @param {array} logResults Tablica do której doklejane są wyniki perf.
 * @param {Function} callback Funkcja do wykonania
 * @param {String} descA Krótki opis
 * @param {String} descB Dłuższy opis
 * @param {number|string} [descC=0] Opcjonalnie kod wiadomości 0-3.

 */
const performanceCheckerObj = (
	logResults,
	callback,
	descA,
	descB,
	descC = 0 // status (1-2-3)
) => {
	const startTime = new Date().getTime();
	const res = callback();
	const time = (new Date().getTime() - startTime) / 1000;
	logResults.push([new Date(), descA, time, descB, descC]);
	return res;
};

export { performanceCheckerObj };

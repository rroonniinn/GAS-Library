import { logger } from '../../libApp/interface/logger/logger';

/**
 * Sprawsza czas wykonywania się przekazanej funkcji.
 * Po wykonaniu od razu loguje czas w interfejsie.
 * Zwraca efekt działania funkcji (czyli działa trochę
 * jak tap).
 *
 * @param {Function} callback Funkcja do wykonania
 * @param {String} descShort Krótki opis
 * @param {String} descLong Dłuższy opis
 * @param {Number} [stat=0] Opcjonalnie kod wiadomości 0-3.
 * @returns
 */
const performanceCheckerLogger = (
	callback,
	descShort,
	descLong,
	stat = 0
) => {
	const startTime = new Date();
	const res = callback();
	const time = (new Date() - startTime) / 1000;
	logger(descShort, time, descLong, stat);
	return res;
};

export { performanceCheckerLogger };

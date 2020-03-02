/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */

const looper = (count, callback) => {
	while (count > 0) {
		callback();
		count--;
	}
};

/**
 * Sprawsza czas wykonywania się przekazanej funkcji.
 * Zwraca obiekt: {all: xxx, avg: xxx} gdzie podaje czas w sekundach
 * dla wszyskich odpaleń funkcji oraz średni dla wszystkich
 *
 * @param {Function} callback Funkcja sprawdzana
 * @param {Number} repetion Opcjonalna liczba wykonań funkcji. Domyślnie 1
 * @returns {Object}
 */

const performanceChecker = (callback, repetion = 1) => {
	const startTime = new Date();
	looper(repetion, callback);
	const time = new Date() - startTime;
	return {
		all: time / 1000,
		avg: time / repetion / 1000,
	};
};

export { performanceChecker };

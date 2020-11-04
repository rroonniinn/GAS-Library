/* eslint-disable max-params */
/* eslint-disable no-undef */
// @ts-nocheck

/**
 * Funkcja wykonująca się asynchronicznie po stronie środowiska GAS.
 * Przyjmuje jako argumenty: nazwę funkcji która ma się
 * wywołać po stronie GAS, tablicy z argumentami dla tej funkcji oraz
 * dwa callbacki: successFn do której trafi jako argument wynik wcześniej
 * wskazanej funkcji GAS (po jej realizacji przez GAS) oraz failureFn,
 * do której przekazany zostanie obiekt błędu (jeśli takowy wystąpi).
 * Całość znajduje się w klauzuli try-catch tylko po to aby debugując
 * interfejs w środowisku przeglądarki nie pojawiał się błąd informujący,
 * że google.script.run nie jest zdefiniowany.
 *
 * @param {string} gasFnName Nazwa funkcji, która ma się wykonać w GAS
 * @param {array} args Tablica argumentów dla powyższej funkcji
 * @param {function} successFn Funkcja do wykonania po stronie frontu do której zostanie przekazany wynik funkcji GAS
 * @param {function} failureFn Funkcja do wykonania w przypadku błędu. Zostanie do niej przekazany obiekt błędu
 */

const googleScriptRun = (gasFnName, args, successFn, failureFn) => {
	try {
		google.script.run
			.withFailureHandler(failureFn)
			.withSuccessHandler(successFn)
			[gasFnName].apply(null, args);
	} catch (error) {
		console.log(`Function should be execute in GAS environment. This function got those argument: ${args}`);
	}
};

export { googleScriptRun };

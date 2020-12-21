import { getExecutionContext } from './getExecutionContext';

/* eslint-disable prefer-promise-reject-errors */
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
 * Dodatkowo dane są zamieniane na JSON. Google.Script.Run ma nieładną cechę
 * cichego wysypywania się jeśli w danych znajdują się m.in. obiekty daty
 *
 * @param {string} gasFnName Nazwa funkcji, która ma się wykonać w GAS
 * @param {array} args Tablica argumentów dla powyższej funkcji
 * @param {function} successFn Funkcja do wykonania po stronie frontu do której zostanie przekazany wynik funkcji GAS
 * @param {function} failureFn Funkcja do wykonania w przypadku błędu. Zostanie do niej przekazany obiekt błędu
 */

const googleScriptRun = (gasFnName, args, successFn, failureFn) => {
	const stringfied = args.map(ar => JSON.stringify(ar));

	try {
		// @ts-ignore
		google.script.run
			.withFailureHandler(failureFn)
			.withSuccessHandler(successFn)
			[gasFnName].apply(null, stringfied);
	} catch (error) {
		console.log(
			`Function should be execute in GAS environment. This function got those argument: ${args}`
		);
	}
};

// Podejście jako promise:
const googleScriptRunPromise = (gasFnName, args, localOutput = null) => {
	if (getExecutionContext() === 'gas') {
		// GAS
		return new Promise((resolve, reject) => {
			const stringfied = args.map(ar => JSON.stringify(ar));

			// @ts-ignore
			google.script.run
				.withFailureHandler(err => reject(err))
				.withSuccessHandler(output => resolve(JSON.parse(output)))
				[gasFnName].apply(null, stringfied);
		});
	}

	// LOCAL
	return new Promise((resolve, reject) => {
		if (localOutput) {
			resolve(localOutput);
		}
		reject(
			`Function should be execute in GAS environment. This function got those argument: ${args}`
		);
	});
};

export { googleScriptRun, googleScriptRunPromise };

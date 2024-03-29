/* eslint-disable max-lines-per-function */
// @ts-nocheck
/* global google */

import { safeJsonParse } from '../json/safeJsonParse';
import { isStandardGasReturn } from '../utils/isStandardGasReturn';

import { getExecutionContext } from './getExecutionContext';

/**
 * Oczekiwany rezultat rozwiązanego Promise-a otrzymanego z GAS jako rezultat `google.script.run`
 * @typedef {Object} GoogleScriptRunSuccess
 * @property {boolean} success Info czy operacja zakończyła się sukcesem
 * (nie wyświetlenie błędu z GAS tylko ewentualne poinformowanie użytkownika
 * o dwóch możliwych stanach - sukces i porażka)
 * @property {*} data Sparsowane (z JSONa), odesłane z serwera dane w dowolnej postaci
 * @property {string} log String logów / właściwie to powinna być wiadomość....
 */

/**
 * Funkcja wykonująca się asynchronicznie po stronie środowiska GAS.
 * Zwraca resolved Promise, zatem może być wykorzystywana z użyciem async / await
 * Przyjmuje jako argumenty: nazwę funkcji która ma się
 * wywołać po stronie GAS, tablicy z argumentami dla tej funkcji oraz danych
 * do testów po stronie frontu (lokalny output) symulujący output z GAS. Nie
 * przekazanie tego argumentu i odpalenie lokalnie skutkuje obsłużonym wyjątkiem.
 *
 * Dodatkowo argumenty są zamieniane na JSON. Google.Script.Run ma nieładną cechę
 * cichego wysypywania się jeśli w danych znajdują się m.in. obiekty daty.
 * Zatem argumenty są zamieniane na JSONa podczas wysyłania do GAS, a następnie
 * jeśli z GAS przychodzi coś co wygląda na JSONa to są parsowane do
 * typowej postaci.
 *
 * Dodatkowo funkcja sprawdza czy to co przyszło z GAS ma formę standardowej
 * odpowiedzi typu {success: boolean, data: *, log: string}
 *
 * @param {string} gasFnName Nazwa funkcji, która ma się wykonać w GAS
 * @param {array} args Tablica argumentów dla powyższej funkcji
 * @param {*} localOut Lokalne dane symulujące output z GAS
 * @returns {Promise<GoogleScriptRunSuccess>} Promise, który zwraca obiekt o strukturze `GoogleScriptRunSuccess`
 */

const gasScriptRunPromise = (gasFnName, args, localOut = null) => {
	// 1.
	if (getExecutionContext() === 'gas') {
		return new Promise((resolve, reject) => {
			const argsStringfied = args.map(ar => JSON.stringify(ar));

			google.script.run
				.withFailureHandler(err => reject(err))
				.withSuccessHandler(output => {
					// 2.
					if (!isStandardGasReturn(output)) {
						return reject(
							new Error('-- Niestandardowy return z GAS! --')
						);
					}

					return resolve({
						success: output.success,
						data: safeJsonParse(output.data), // 3.
						log: output.log,
					});
				})
				[gasFnName].apply(null, argsStringfied);
		})
			.then(output => output) // 4.
			.catch(err => ({
				// 5.
				success: false,
				data: {},
				log: err.message,
			}));
	}

	// 6.
	return new Promise((resolve, reject) => {
		// 7.
		if (localOut) {
			resolve({
				success: localOut.success,
				data: safeJsonParse(localOut.data),
				log: localOut.log,
			});
		}

		// 8.
		reject(new Error('-- Brak zdefiniowanego localOutput --'));
	})
		.then(output => output) // 4.
		.catch(err => ({
			// 5.
			success: false,
			data: {},
			log: err.message,
		}));
};

export { gasScriptRunPromise };

/**
 * 1.) Uruchomienie w środowisku GAS
 * 2.) Weryfikacja czy return z GAS ma standardową formę obiektu, jeśli nie, reject custom-owym errorem
 * 3.) Jeśli format prawidłowy - odparsowanie JSONA (jeśli jako data nie będzie JSON-em nie wysypie błędu)
 * 4.) Od razu zwracam rezultat
 * 5.) Jeśli GAS zwróci błąd, to opakowuję wiadomość błędu w standardowy obiekt i zwracam go.
 * 6.) Odpalane podczas testów LOCAL
 * 7.) Jeśli localOutput przekazany
 * 8.) Jeśli brak localOutput
 */

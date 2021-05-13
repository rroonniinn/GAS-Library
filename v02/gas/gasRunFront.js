/* eslint-disable max-lines-per-function */
// @ts-nocheck
/* global google */

import { safeJsonParse } from '../json/safeJsonParse';

import { getExecutionContext } from './getExecutionContext';

/**
 * Zunifikowany obiekt zwracana z funkcji server-side do frontu
 * @typedef {Object} ReturnToFrontClean
 * @property {boolean} success Info czy operacja zakończyła się sukcesem
 * @property {*} out Dane 'odpakowane' z JSONA
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
 * Funkcja pracuje w tandemie z `gasRunServer()`
 *
 * @param {array} input Tablica argumentów, w której pierwszy jest nazwą funkcji do odpalenia w GAS, reszta zaś to argumenty dla niej.
 * @param {*} localOut Lokalne dane symulujące output z GAS (do testów na froncie)
 * @returns {Promise<ReturnToFrontClean>} Promise, który zwraca obiekt o strukturze `GoogleScriptRunSuccess`
 */

const gasRunFront = (input, localOut = null) => {
	// 1.
	if (getExecutionContext() === 'gas') {
		return new Promise((resolve, reject) => {
			// 2.
			const argsStringfied = input.map(ar => JSON.stringify(ar));

			google.script.run
				.withFailureHandler(err => reject(err))
				.withSuccessHandler(output =>
					resolve({
						success: true,
						out: safeJsonParse(output), // 3.
					})
				)
				.gasRunServer.apply(null, argsStringfied);
		})
			.then(output => output) // 4.
			.catch(err => ({
				// 5.
				success: false,
				out: err,
			}));
	}

	// 6.
	return new Promise((resolve, reject) => {
		// 7.
		if (localOut) {
			resolve({
				success: true,
				out: safeJsonParse(localOut),
			});
		}

		// 8.
		reject(new Error('Brak zdefiniowanego localOutput!'));
	})
		.then(output => output) // 4.
		.catch(err => ({
			// 5.
			success: false,
			out: err,
		}));
};

export { gasRunFront };

/**
 * 1.) Uruchomienie w środowisku GAS
 * 2.) Zamiana argumentów na tablicę JSONów
 * 3.) Odparsowanie odpowiedzi z serwera (jeśli `out` nie będzie JSON-em nie wysypie błędu)
 * 4.) Od razu zwracam rezultat
 * 5.) Jeśli GAS zwróci błąd, to opakowuję wiadomość błędu w standardowy obiekt i zwracam go.
 * 6.) Odpalane podczas testów LOCAL
 * 7.) Jeśli localOutput przekazany
 * 8.) Jeśli brak localOutput
 */

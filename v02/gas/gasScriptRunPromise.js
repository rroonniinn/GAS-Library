/* eslint-disable max-lines-per-function */
import { safeJsonParse } from '../json/safeJsonParse';
import { isStandardGasReturn } from '../utils/isStandardGasReturn';

import { getExecutionContext } from './getExecutionContext';

/**
 * Funkcja wykonująca się asynchronicznie po stronie środowiska GAS.
 * Zwraca Promisy, zatem może być wykorzystywana z użyciem async / await
 * Przyjmuje jako argumenty: nazwę funkcji która ma się
 * wywołać po stronie GAS, tablicy z argumentami dla tej funkcji oraz,
 * do testów po stronie frontu, lokalny output symulujący output z GAS. Nie
 * przekazanie tego argumentu i odpalenie lokalnie skutkuje obsłużonym wyjątkiem
 *
 * Dodatkowo dane są zamieniane na JSON. Google.Script.Run ma nieładną cechę
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
 */

const gasScriptRunPromise = (gasFnName, args, localOut = null) => {
	if (getExecutionContext() === 'gas') {
		// Odpalane w środowisku GAS
		return new Promise((resolve, reject) => {
			const argsStringfied = args.map(ar => JSON.stringify(ar));

			// @ts-ignore
			// eslint-disable-next-line no-undef
			google.script.run
				.withFailureHandler(err => reject(err))
				.withSuccessHandler(output => {
					/* Weryfikacja co wróciło z GAS */

					/* Coś nie w standardzie */
					if (!isStandardGasReturn(output)) {
						return resolve(output);
					}

					/* Standardowa odpowiedź - odparsowanie JSONA */
					return resolve({
						success: output.success,
						data: safeJsonParse(output.data),
						log: output.log,
					});
				})
				[gasFnName].apply(null, argsStringfied);
		});
	}

	// Odpalane podczas testów LOCAL
	return new Promise((resolve, reject) => {
		try {
			/* Weryfikacja co wróciło z GAS */
			/* Coś nie w standardzie */
			if (localOut && !isStandardGasReturn(localOut)) {
				resolve(localOut);
			}

			/* Standardowa odpowiedź - odparsowanie JSONA */
			if (localOut) {
				resolve({
					success: localOut.success,
					data: safeJsonParse(localOut.data),
					log: localOut.log,
				});
			}

			/* Nie zdefiniowany localOutput */
			resolve({
				success: false,
				data: {},
				log: `FRONT ERROR: GAS Function run in LOCAL env. Got those argument: ${args}`,
			});
		} catch (error) {
			// Jakikolwiek błąd po stronie frontu
			reject(error);
		}
	});
};

export { gasScriptRunPromise };

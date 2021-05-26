/**
 * @typedef {string} JSON Obiekt JSON
 */

/**
 * Zunifikowany obiekt zwracana z funkcji server-side do frontu
 * @typedef {Object} ReturnToFront
 * @property {boolean} success Info czy operacja zakończyła się sukcesem
 * @property {JSON} out Dane jako json
 */

/**
 * @callback GasRunServer
 * @param {...JSON[]} args Argumenty
 * @returns {JSON} Zwrócona wartość funkcji w formie JSON-a
 */

/**
 * Funkcja jest wrapper-em służącym jako pośrednik pomiędzy frontem
 * a serwerem. W pierwszym uruchomieniu przyjmuje obiekt z funkcjami
 * do których ma mieć dostęp client (front). W kolejnym uruchomieniu zaś
 * przyjmuje tablicę argumentów otrzymaną z frontu (tablica JSON-ów).
 * Pierwszym argumentem jest nazwa funkcji do uruchomienia.
 * Funkcja jest scurowana, aby można ją było łatwo użyć w kodzie poza
 * biblioteką. Dzięki temu cała implementacja jest schowana, a kod
 * indywidualny w projekcie ma wygląd jak w przykładzie.
 * UWAGA: funkcja wystawiona publicznie MUSI się nazywać
 * `gasRunServer`! Funkcja pracuje w tandemie z `gasRunFront()`.
 * @example
 * // Sposób implementacji w indywidualnym projekcie:
 * import { gasRunServer as gasRunServerLib } from '../../../../../00. My Library Local/v02/gas/gasRunServer';
 *
 * import { readDbTable } from '../db2/readDbTable';
 * import { setDbTableToCache } from '../db2/setDbTableToCache';
 *
 * const publicFunctions = {
 * 	 readDbTable,
 * 	 setDbTableToCache,
 * };
 *
 * export const gasRunServer = (...args) =>
 * 	 // @ts-ignore
 * 	 gasRunServerLib(publicFunctions)(...args);
 *
 *
 * @param {Object<string, function>} fnx Obiekt z funkcjami z których może skorzystać front
 * @returns {GasRunServer} Zunifikowany obiekt zwracany na front
 */

const gasRunServer = fnx => (...args) => {
	const argsClean = args.map(ar => JSON.parse(ar));
	const [fn, ...cleanArgs] = argsClean;

	console.log(
		`Run async function: ${fn}`
		// `Run async function: ${fn} with args: ${cleanArgs.join(', ')}`
	);

	const output = fnx[fn](...cleanArgs);

	// console.log(`OutpUt from async function ${fn}:`, output);

	const out = JSON.stringify(output);

	return out;
};

export { gasRunServer };

/**
 * 1.) Aby obsłużyć ewentualny błąd w ramach funkcji (np. przekazanie
 * 		nazwy funkcji nie zdefiniowanej w obiekcie 'fnx') całość objęta jest
 * 		klauzulą try / catch. W przypadku błędu zwracany jest obiekt z flagą
 * 		success na false i treścią błędu jako out.
 */

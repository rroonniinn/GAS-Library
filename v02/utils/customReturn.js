/* eslint-disable max-params */
/**
 * Custom object for return values and logs
 * @typedef {Object} UltimateReturn
 * @property {boolean|0|1} continueChain Czy wykonywać dalsze funkcje w chainie (pipe).
 * @property {boolean|0|1} success Finalne dane do przekazania do frontu
 * @property {Object<string, any>} tmp Tymczasowe elementy do przenoszenia danych pomiędzy funkcjami
 * @property {[number, string][]} log Finalne dane do przekazania do frontu
 */

/**
 * Generuje obiekt zwracany przez funkcje zawierający szereg informacji
 * przekazywanych w toku działania programu. Jeśli chcemy nadpisać jakąś wartość
 * znajdującą się w ret.tmp to wystarczy użyć tego samego klucza z nową wartością
 * Idealnie działa z funkcją alt (./alt),
 * która funkcjonuje jako truthy/falsy checker zajmując się tym aby kolejne
 * funkcje nie wykonywały się jeśli RET będzie zawierał success: false.
 * @param {boolean|0|1} continueChain Czy wykonywać dalsze funkcje w chainie (pipe).
 * Współpracuje z funkcją fp (./cont)
 * @param {boolean|0|1} success Info czy operacja zakończyła się sukcesem.
 * Służy do obsłużenia błędów po drodze oraz informacji dla interfejsu
 * w jakim kolorze wyświetlić komunikat
 * @param {Object<string, any>} tmp Obiekt zawierający dane, które chcemy
 * przekazać dalej. Jeśli nie chcemy dodawać nowych danych,
 * wystarczy przekazać pusty obiekt
 * @param {string|Error} msgErr Wpis do logów dotyczący danej operacji lub Obiekt Error
 * @param {UltimateReturn} [ret] Wcześniej uzyskany UltimateReturn pozyskane z poprzedzającej funkcji
 * @returns {UltimateReturn}
 */

const RET = (continueChain, success, tmp, msgErr, ret = null) => {
	const logType = msgErr instanceof Error ? 'error' : 'log';

	const currentLog =
		logType === 'error'
			? // @ts-ignore
			  `${msgErr.name}. ${msgErr.message}. ${msgErr.stack}`
			: /** @type {string} */ (msgErr);

	return {
		continueChain,
		success,
		tmp: ret ? Object.assign(ret.tmp, tmp) : tmp,
		log: ret
			? ret.log.concat([[Date.now(), currentLog]])
			: [[Date.now(), currentLog]],
	};
};

export { RET };

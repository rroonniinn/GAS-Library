/* eslint-disable max-params */
/**
 * Custom object for return values and logs
 * @typedef {Object} UltimateReturn
 * @property {Object<string, any>} tmp Tymczasowe elementy do przenoszenia danych pomiędzy funkcjami
 * @property {boolean} success Finalne dane do przekazania do frontu
 * @property {[number, string][]} log Finalne dane do przekazania do frontu
 */

/**
 * Generuje obiekt zwracany przez funkcje zawierający szereg informacji
 * przekazywanych w toku działania programu. Idealnie działa z funkcją cont (./cont), która
 * funkcjonuje jako truthy/falsy checker zajmując się tym aby kolejne funkcje nie wykonywały się
 * jeśli RET będzie zawierał success: false.
 * @param {boolean} success Info czy operacja zakończyła się sukcesem. Na tej podstawie funkcje dalsze mogą się wykonywać lub nie
 * @param {Object<string, any>} tmp Obiekt zawierający dane, które chcemy przekazać dalej
 * @param {string|Error} msgErr Wpis do logów dotyczący danej operacji lub Obiekt Error
 * @param {UltimateReturn} [ret] Wcześniej uzyskany UltimateReturn pozyskane z poprzedzającej funkcji
 * @returns {UltimateReturn}
 */

const RET = (success, tmp, msgErr, ret = null) => {
	const logType = msgErr instanceof Error ? 'error' : 'log';

	const currentLog =
		logType === 'error'
			? // @ts-ignore
			  `${msgErr.name}. ${msgErr.message}. ${msgErr.stack}`
			: /** @type {string} */ (msgErr);

	return {
		success,
		tmp: ret ? Object.assign(ret.tmp, tmp) : tmp,
		log: ret
			? ret.log.concat([[new Date().getTime(), currentLog]])
			: [[new Date().getTime(), currentLog]],
	};
};

export { RET };

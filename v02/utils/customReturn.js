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
 * przekazywanych w toku działania programu
 * @param {boolean} success Info czy operacja zakończyła się sukcesem. Na tej podstawie funkcje dalsze mogą się wykonywać lub nie
 * @param {Object<string, any>} tmp Obiekt zawierający dane, które chcemy przekazać dalej
 * @param {string|Error} logMsg Wpis do logów dotyczący danej operacji lub Obiekt Error
 * @param {array} logs Dotychczasowe logi pozyskane z poprzedzającej funkcji
 * @param- {Error} [error=null] Obiekt błędu systemowego (jeśli wystąpi)
 * @returns {UltimateReturn}
 */

const customReturn = (success, tmp, logMsg, logs = null) => {
	const logType = logMsg instanceof Error ? 'error' : 'log';

	const log =
		logType === 'error'
			? // @ts-ignore
			  `${logMsg.name}. ${logMsg.message}. ${logMsg.stack}`
			: logMsg;

	return {
		tmp,
		success,
		log: logs
			? logs.concat([[new Date().getTime(), log]])
			: [[new Date().getTime(), log]],
	};
};

export { customReturn };

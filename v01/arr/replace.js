/* eslint-disable max-params */
/* eslint-disable no-unused-vars */

/**
 * Zwraca nową tablicę w której wymieniony jest element z podanego indeksu
 * na przekazaną wartość. Jeśli index jest mniejszy od zera
 * lub przekraczający maksymalny index tablicy,
 * funkcja zwraca oryginalną tablicę
 *
 * @example
 * replace([1, 2, 3], 0, 'A') // -> ['A', 2, 3]
 *
 * @param {array} arr
 * @param {number} index
 * @param {*} element
 * @returns {array}
 */

const replace = (arr, index, element) => {
	if (index >= 0 && index < arr.length) {
		return [...arr.slice(0, index), element, ...arr.slice(index + 1)];
	}

	return arr;
};

/**
 * @callback ReplaceC Callback dla replaceC
 * @param {array} src Tablica w której kopia ma mieć zmienioną wartość
 * @returns {array} Zwrócona kopia tablicy z podmienioną wartością
 */

/**
 * Zcurowana wersja funkcji replace - zwraca kopię tablicy
 * z podmienionym elementem
 *
 * @example
 * replaceC(0, 'A')([1, 2, 3]) // -> ['A', 2, 3]
 *
 * @instance
 * @memberof module:SetForecastToDb
 * @function setSplits > setMonthSplits > applyMonthSplits > share > replaceC
 * @param {number} idx Indeks na którym ma nastąpić zmiana wartości
 * @param {*} val Nowa wartość na wskazanym miejscu
 * @returns {ReplaceC} Callback przyjmujący tablicę oryginalną, zwracający kopię z podmianą
 */

const replaceC = (idx, val) => src => replace(src, idx, val);

export { replace, replaceC };

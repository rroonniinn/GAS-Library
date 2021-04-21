/* eslint-disable max-params */

/**
 * Dodaje do obiektu w przekazanym kluczu nową obiekt niezależnie
 * od tego czy klucz już został zainicjowany czy nie.
 *
 * @example
 * // Klucz nie zainicjowany
 * safeAppendNextObj({}, 'abc', 'newKey', 100); // ->
 * {
 * 	abc: {
 * 		newKey: 100,
 * 	},
 * }
 *
 * // Klucz już z wartością (inny obiekt)
 * safeAppendNextObj({ abc: { exiKey: 10 } }, 'abc', 'newKey', 100); // ->
 * {
 * 	abc: {
 * 		exiKey: 10,
 * 		newKey: 100,
 * 	},
 * }
 *
 * @param {Object} parentObj Obiekt do którego chcemy dodać inny obiekt
 * @param {string|number} key Klucz który może nie być jeszcze dostępny
 * @param {string|number} childKey Klucz w obiekcie dziecka (do dodania)
 * @param {*} childVal Wartość jaka ma być dodana do dziecka
 * @returns {Object}
 */

const safeAppendNextObj = (parentObj, key, childKey, childVal) => {
	// 1.
	if (parentObj[key]) {
		parentObj[key][childKey] = childVal;
		return parentObj;
	}

	// 2.
	parentObj[key] = {
		[childKey]: childVal,
	};

	return parentObj;
};

export { safeAppendNextObj };

/**
 * 1.) Klucz jest już zainicjowany (jest już w nim jakaś wartość)
 * 2.) Klucz do zainicjowania
 */

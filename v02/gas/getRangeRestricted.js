/* eslint-disable max-params */
import { pipe } from '../fp/pipe';

import { columnToLetter } from './columnToLetter';
import { letterToColumn } from './letterToColumn';

const extendedColLetter = (startLetter, extendToRight) => {
	const endNum = letterToColumn(startLetter) + extendToRight;
	return columnToLetter(endNum);
};

/**
 * Bierze zakres w formacie 'A1:E20'. Zwraca zakres ograniczony do liczby
 * komórek w poziomie i pionie. Zwraca nowy zakres np. 'A1:B5'
 *
 * @param {String} range Zakres w formacie 'A1:B2'
 * @param {Number} restHor Liczba komórek w poziomie
 * która ma zostać w zakresie
 * @param {Number} restVer Liczba komórek w pionie
 * która ma zostać w zakresie
 * @returns {String} Zakres po modyfikacjach
 */

const getRangeRestricted = (range, restHor = null, restVer = null) =>
	pipe(
		() => /(([A-Z]+)([0-9]+?)):(([A-Z]+)?([0-9]+)?)/.exec(range),
		([, , sChar, sNum, , eChar, eNum]) => ({
			startLet: sChar,
			startNum: Number(sNum),
			endLet: eChar,
			endNum: Number(eNum),
		}),
		({ startLet, startNum, endLet, endNum }) => ({
			startLet,
			startNum,
			endLet,
			endNum,
			finalEndLet: restHor
				? extendedColLetter(startLet, restHor - 1)
				: endLet,
			finalEndNum: restVer ? startNum + restVer - 1 : endNum,
		}),
		({ startLet, startNum, finalEndLet, finalEndNum }) =>
			/* Jeśli range występuje w formacie A1:9 lub A1:C
			dostajemy 'undefined' jak eChar lub eNum - dlatego
			zamieniamy na pusty, ignorowany string '' */
			`${startLet}${startNum}:${finalEndLet || ''}${finalEndNum ||
				''}`
	)();

export { getRangeRestricted };

/* eslint-disable max-params */
import { pipe } from '../fp/pipe';
import { prop } from '../fp/prop';
import { initVal } from '../fp/initVal';

/**
 * Zwraca nowy obiekt w których dla każdego klucza usunięto wartości znajdujące się na tych samych
 * pozycjach co wskazane wartości dla przekazanego klucza. Przeznaczona do używania tylko na obiektach
 * posiadających wszystkie wartości jako tablice o tej samej długości (np. propsy kont)
 *
 * @param {Object[]} obj Obiekt bazowy o strukturze {key1: [], key2: []} gdzie key1.length === key2.length
 * @param {String} keyIncludedVal Klucz w którym znajudją się wartości które dla wszystkich indexów są do usuniecia
 * @param {Any} valToRemove Wartośc do usunięcia (wszystkie wartości z tych indeksów zostaną usnięte dla wszystkich kluczy)
 * @returns {Object[]}
 */

const getObjWithoutValsOnIndexes = (obj, keyIncludedVal, valToRemove) => {
	const valueIntoIndex = soughtEl => (el, i) => {
		if (el === soughtEl) return i;
		return 'removeMePlease';
	};

	const getIndexes = soughtEl => arr =>
		arr
			.map(valueIntoIndex(soughtEl))
			.filter(el => el !== 'removeMePlease');

	const indexes = pipe(
		initVal(obj),
		prop(keyIncludedVal),
		getIndexes(valToRemove)
	);

	const removeFromIndexes = (arr, indexesArr) =>
		arr
			.map((el, i) => {
				if (indexesArr.includes(i)) return 'removeMePlease';
				return el;
			})
			.filter(el => el !== 'removeMePlease');

	const clean = (sourceObj, indexesToRemove) => (targetObj, key) => {
		targetObj[key] = removeFromIndexes(
			sourceObj[key],
			indexesToRemove
		);
		return targetObj;
	};

	const bulidNewObj = (sourceObj, indexesToRemove) =>
		Object.keys(sourceObj).reduce(
			clean(sourceObj, indexesToRemove),
			{}
		);

	return bulidNewObj(obj, indexes());
};

export { getObjWithoutValsOnIndexes };

/**
 * Zwraca tablicę o wskazanej długości, w której każda komórka jest
 * wypełniona wskazaną wartością. Jeśłi wartość nie podana, wtedy
 * wypełnieniem jest `null`. Jeśli wartość `len` nie podana - wtedy
 * zwraca pustą tablicę. Można swobodnie przekazać jako `val` inną
 * tablicęd.
 *
 * @example
 * createArrOfLen(0); // -> []
 * createArrOfLen(); // -> []
 * createArrOfLen(2); // -> [null, null]
 * createArrOfLen(2, 'abc'); // -> ['abc', 'abc']
 * createArrOfLen(2, [1, 2, 3]);
 * // ->
 * [
 * 	[1, 2, 3],
 * 	[1, 2, 3],
 * ];
 *
 * @param {number} len Liczba komórek w nowej tablicy
 * @param {*} [val=null] Dowolna wartość jaka ma się znaleźć w każdej komórce
 * @returns {array}
 */

export const createArrOfLen = (len, val = null) =>
	Array.from({ length: len }).map(() => val);

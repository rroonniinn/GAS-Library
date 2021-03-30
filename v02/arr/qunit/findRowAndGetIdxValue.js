// @ts-nocheck
/* global QUnit, deepEqual */

import { findRowAndGetIdxValue as fn } from '../findRowAndGetIdxValue';

/* ****************** INPUT ************* */

const arr = [
	[1, 'A'],
	[2, 'B'],
	[3, 'C'],
];

/* ****************** TESTY ************* */

const title = {
	t01: 'findRowAndGetIdxValue | test01 | Testy możliwości',
};

// Domyślne
const test01 = () =>
	QUnit.test(title.t01, () => {
		const msg = {
			t01: 'Typowe wyszukanie - ok',
			t02: 'Pusta tablica - ok',
			t03: 'Nie znaleziony wiersz (brak wartości) - ok',
			t04: 'Nie znaleziony wiersz (brak kolumny) - ok',
			t05: 'Wiersz znaleziony, ale brak pożądanej kolumny - ok',
		};

		const de = deepEqual;

		de(fn(arr, 0, 3, 1), 'C', msg.t01);
		de(fn([], 0, 3, 1), undefined, msg.t02);
		de(fn(arr, 0, 4, 1), undefined, msg.t03);
		de(fn(arr, 3, 3, 1), undefined, msg.t04);
		de(fn(arr, 0, 3, 10), undefined, msg.t05);
	});

const findRowAndGetIdxValue = () => {
	test01();
};

export { findRowAndGetIdxValue };

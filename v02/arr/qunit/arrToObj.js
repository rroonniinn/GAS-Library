// @ts-nocheck
/* global QUnit, strictEqual, deepEqual */

import { arrToObj as fn } from '../arrToObj';

/* ****************** INPUT ************* */

const arr2d = [
	['A', 'A', 'C'],
	['A', 'B', 'D'],
	['A', 'B', 'E'],
];

/* ****************** RESULTS ************* */

const resT01 = {
	A: [
		['A', 'A', 'C'],
		['A', 'B', 'D'],
		['A', 'B', 'E'],
	],
};

const resT02 = {
	A: [
		['A', 'C'],
		['B', 'D'],
		['B', 'E'],
	],
};

const resT03 = {
	A: [['A', 'A', 'C']],
	B: [
		['A', 'B', 'D'],
		['A', 'B', 'E'],
	],
};

const resT04 = {
	C: [['A', 'A', 'C']],
	D: [['A', 'B', 'D']],
	E: [['A', 'B', 'E']],
};

const resT05 = {
	A: [['A', 'C']],
	B: [
		['A', 'D'],
		['A', 'E'],
	],
};

const resT06 = {
	C: [['A', 'A']],
	D: [['A', 'B']],
	E: [['A', 'B']],
};

/* ****************** TESTY ************* */

const title = {
	t01: 'arrToObj | test01 | Testy możliwości',
	t02: 'arrToObj | test02 | Nieprawidłowe dane wejściowe',
};

// Domyślne
const test01 = () =>
	QUnit.test(title.t01, () => {
		const msg = {
			t01: 'Ustawienia domyślne - ok',
			t02: 'Usunięcie kolumny - ok',
			t03: 'Inna kolumna jako indeks - bez usunięcia kolumny - ok',
			t04: 'Inna kolumna jako indeks - bez usunięcia kolumny - ok',
			t05: 'Inna kolumna jako indeks - z usunięciem kolumny - ok',
			t06: 'Inna kolumna jako indeks - z usunięciem kolumny - ok',
		};

		const de = deepEqual;

		de(fn(arr2d), resT01, msg.t01);
		de(fn(arr2d, true), resT02, msg.t02);
		de(fn(arr2d, false, 1), resT03, msg.t03);
		de(fn(arr2d, false, 2), resT04, msg.t04);
		de(fn(arr2d, true, 1), resT05, msg.t05);
		de(fn(arr2d, true, 2), resT06, msg.t06);
	});

// Nieprawidłowe dane wejściowe
const test02 = () =>
	QUnit.test(title.t02, () => {
		const msg = {
			t01: 'Tablica 1d',
			t02: 'Pusta tablica',
			t03: 'Nieprawidłowy removeIdx',
			t04: 'Nieprawidłowy indeks - nie liczba całk.',
			t05: 'Nieprawidłowy indeks - ujemny.',
			t06: 'Nieprawidłowy indeks - poza tablicą.',
		};

		const de = deepEqual;

		de(fn(['A', 'A', 'C'], false, 0), {}, msg.t01);
		de(fn([], false, 0), {}, msg.t02);
		de(fn(arr2d, 'a', 0), {}, msg.t03);
		de(fn(arr2d, false, 0.5), {}, msg.t04);
		de(fn(arr2d, false, -1), {}, msg.t05);
		de(fn(arr2d, false, 3), {}, msg.t06);
	});

const arrToObj = () => {
	test01();
	test02();
};

export { arrToObj };

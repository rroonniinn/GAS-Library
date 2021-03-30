// @ts-nocheck
/* global QUnit, deepEqual */

import { findRow as fn } from '../findRow';

/* ****************** INPUT ************* */

const arr1d = [1, 'A'];

const arr2d = [
	[1, 'A'],
	[2, 'B'],
	[3, 'C'],
];

const cb01 = row => row[0] >= 2;
const cb02 = row => row[0] >= 4;

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

		de(fn(cb01)(arr1d), [], msg.t01);
		de(fn(cb02)(arr1d), [], msg.t01);
		de(fn(cb01)(arr2d), [2, 'B'], msg.t01);
		de(fn(cb02)(arr2d), [], msg.t01);
	});

const findRow = () => {
	test01();
};

export { findRow };

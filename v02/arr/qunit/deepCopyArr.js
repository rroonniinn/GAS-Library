// @ts-nocheck
/* global QUnit, strictEqual */
import { pipe } from '../../fp/pipe';
import { areDatesEqual as eq } from '../../../v01/time/areDatesEqual';

import { deepCopyArr as fn } from '../deepCopyArr';

const jsonify = arr => pipe(() => arr, JSON.stringify, JSON.parse)();

/* ****************** INPUTS ************* */
const date01 = new Date();
const date02 = new Date(2021, 0, 1);
const date03 = new Date(2021, 1, 1);
const date04 = new Date(2021, 10, 25);

const in01 = [date01, date02]; // Tablica 1d samych dat
const in02 = [1, date01, '3', date02]; // Tablica 1d dat i wartości numerycznych

const in03 = [
	[date01, date02],
	[date03, date04],
]; // Tablica 2d dat

const in04 = [
	[1, date01, '3', date02],
	[date03, 4, date04, '5'],
]; // Tablica 2d dat i wartości numerycznych

/* ****************** TESTY ************* */
const title = {
	t01: 'deepCopyArr | test01 | Tablica 1d - same daty',
	t02: 'deepCopyArr | test02 | Tablica 1d - daty + num + str',
	t03: 'deepCopyArr | test03 | Tablica 2d - same daty',
	t04: 'deepCopyArr | test04 | Tablica 2d - daty + num + str',
};
const test01 = () =>
	QUnit.test(title.t01, () => {
		const msg = {
			t01: 'Pierwsza data się zgadza',
			t02: 'Druga data się zgadza',
		};

		const se = strictEqual;
		const out = fn(in01);

		se(eq(out[0], date01), true, msg.t01);
		se(eq(out[1], date02), true, msg.t01);
	});

const test02 = () =>
	QUnit.test(title.t02, () => {
		const msg = {
			t01: 'Pierwsza wartość się zgadza',
			t02: 'Pierwsza data się zgadza',
			t03: 'Druga wartość się zgadza',
			t04: 'Druga data się zgadza',
		};
		const se = strictEqual;
		const out = fn(in02);

		se(out[0], 1, msg.t01);
		se(eq(out[1], date01), true, msg.t02);
		se(out[2], '3', msg.t03);
		se(eq(out[3], date02), true, msg.t04);
	});

const test03 = () =>
	QUnit.test(title.t03, () => {
		const msg = {
			t01: 'Pierwszy wiersz - pierwsza data się zgadza',
			t02: 'Pierwszy wiersz - druga data się zgadza',
			t03: 'Drugi wiersz - pierwsza data się zgadza',
			t04: 'Drugi wiersz - druga data się zgadza',
		};

		const se = strictEqual;
		const out = fn(in03);

		se(eq(out[0][0], date01), true, msg.t01);
		se(eq(out[0][1], date02), true, msg.t02);
		se(eq(out[1][0], date03), true, msg.t03);
		se(eq(out[1][1], date04), true, msg.t04);
	});

const test04 = () =>
	QUnit.test(title.t04, () => {
		const msg = {
			t01: 'Pierwszy wiersz - pierwsza wartość się zgadza',
			t02: 'Pierwszy wiersz - pierwsza data się zgadza',
			t03: 'Pierwszy wiersz - druga wartość się zgadza',
			t04: 'Pierwszy wiersz - druga data się zgadza',
			t05: 'Drugi wiersz - pierwsza data się zgadza',
			t06: 'Drugi wiersz - pierwsza wartość się zgadza',
			t07: 'Drugi wiersz - druga data się zgadza',
			t08: 'Drugi wiersz - druga wartość się zgadza',
		};

		const se = strictEqual;
		const out = fn(in04);

		se(out[0][0], 1, msg.t01);
		se(eq(out[0][1], date01), true, msg.t02);
		se(out[0][2], '3', msg.t03);
		se(eq(out[0][3], date02), true, msg.t04);
		se(eq(out[1][0], date03), true, msg.t05);
		se(out[1][1], 4, msg.t06);
		se(eq(out[1][2], date04), true, msg.t07);
		se(out[1][3], '5', msg.t08);
	});

const deepCopyArr = () => {
	test01();
	test02();
	test03();
	test04();
};

export { deepCopyArr };

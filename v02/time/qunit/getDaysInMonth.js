// @ts-nocheck
/* global QUnit, strictEqual, deepEqual */

import { getDaysInMonth as fn } from '../getDaysInMonth';

const title = {
	t01: 'getDaysInMonth | test01 | yearDate jako data',
	t02: 'getDaysInMonth | test01 | year i month jako liczby',
};

// Domyślne
const test01 = () =>
	QUnit.test(title.t01, () => {
		const se = strictEqual;

		se(fn(new Date(2021, 0, 1)), 31);
		se(fn(new Date(2021, 1, 1)), 28);
		se(fn(new Date(2021, 2, 1)), 31);
		se(fn(new Date(2021, 3, 1)), 30);
		se(fn(new Date(2021, 0, 15)), 31);
		se(fn(new Date(2021, 1, 15)), 28);
		se(fn(new Date(2021, 2, 15)), 31);
		se(fn(new Date(2021, 3, 15)), 30);
	});

const test02 = () =>
	QUnit.test(title.t02, () => {
		const se = strictEqual;

		se(fn(2021, 1), 31);
		se(fn(2021, 2), 28);
		se(fn(2021, 3), 31);
		se(fn(2021, 4), 30);
	});

const getDaysInMonth = () => {
	test01();
	test02();
};

export { getDaysInMonth };

// @ts-nocheck
/* global QUnit, deepEqual */

import { getDateAfter as fn } from '../getDateAfter';

const title = {
	t01: 'getDateAfter | test01 | date jako data - test możliwości',
	t02: 'getDateAfter | test01 | date jako string - test możliwości',
};

const test01 = () =>
	QUnit.test(title.t01, () => {
		const de = deepEqual;

		de(fn(new Date(2021, 0, 1), 0), new Date(2021, 0, 1));
		de(fn(new Date(2021, 0, 1), 1), new Date(2021, 0, 2));
		de(fn(new Date(2021, 0, 1), -1), new Date(2020, 11, 31));
		de(fn(new Date(2021, 0, 1), 35), new Date(2021, 1, 5));
	});

const test02 = () =>
	QUnit.test(title.t02, () => {
		const de = deepEqual;
		de(fn('2021-12-01', 1), new Date(2021, 11, 2));
		de(fn('2021.12.01', 1), new Date(2021, 11, 2));
	});

const getDateAfter = () => {
	test01();
	test02();
};

export { getDateAfter };

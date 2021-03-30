// @ts-nocheck
/* global QUnit, deepEqual */

import { getLastDay as fn } from '../getLastDay';

const title = {
	t01: 'getLastDay | test01 | Testy możliwości',
};

const test01 = () =>
	QUnit.test(title.t01, () => {
		const de = deepEqual;

		de(fn(new Date(2021, 0, 1)), new Date(2021, 0, 31));
		de(fn(new Date(2021, 0, 15)), new Date(2021, 0, 31));
		de(fn(new Date(2021, 0, 31)), new Date(2021, 0, 31));
		de(fn(new Date(2021, 1, 1)), new Date(2021, 1, 28));
		de(fn(new Date(2021, 1, 15)), new Date(2021, 1, 28));
		de(fn(new Date(2021, 1, 28)), new Date(2021, 1, 28));
	});

const getLastDay = () => {
	test01();
};

export { getLastDay };

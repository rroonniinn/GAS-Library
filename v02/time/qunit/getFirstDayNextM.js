// @ts-nocheck
/* global QUnit, deepEqual */

import { getFirstDayNextM as fn } from '../getFirstDayNextM';

const title = {
	t01: 'getFirstDayNextM | test01 | Test możliwości',
};

const test01 = () =>
	QUnit.test(title.t01, () => {
		const de = deepEqual;

		de(fn(new Date(2021, 0, 1)), new Date(2021, 1, 1));
		de(fn(new Date(2021, 0, 15), 1), new Date(2021, 1, 1));
		de(fn(new Date(2021, 0, 15), 0), new Date(2021, 0, 1));
		de(fn(new Date(2021, 0, 1), 3), new Date(2021, 3, 1));
		de(fn(new Date(2021, 0, 1), -1), new Date(2020, 11, 1));
	});

const getFirstDayNextM = () => {
	test01();
};

export { getFirstDayNextM };

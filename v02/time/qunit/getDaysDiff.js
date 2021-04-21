// @ts-nocheck
/* global QUnit, deepEqual */

import { getDaysDiff as fn } from '../getDaysDiff';

const title = {
	t01: 'getDaysDiff | test01 | date jako data - test możliwości',
	t02: 'getDaysDiff | test02 | date jako string - test możliwości',
	t03: 'getDaysDiff | test03 | date jako miks - test możliwości',
	t04:
		'getDaysDiff | test03 | date jako miks (relatywne) - test możliwości',
};

const test01 = () =>
	QUnit.test(title.t01, () => {
		const de = deepEqual;
		const dateS = new Date(2021, 0, 1);

		de(fn(dateS, new Date(2021, 0, 1)), 0);
		de(fn(dateS, new Date(2021, 0, 2)), 1);
		de(fn(dateS, new Date(2021, 0, 5)), 4);
		de(fn(dateS, new Date(2020, 11, 31)), 1);
		de(fn(dateS, new Date(2020, 11, 1)), 31);
	});

const test02 = () =>
	QUnit.test(title.t02, () => {
		const de = deepEqual;
		const dateS = '2021-01-01';

		de(fn(dateS, '2021-01-01'), 0);
		de(fn(dateS, '2021-01-02'), 1);
		de(fn(dateS, '2021-01-05'), 4);
		de(fn(dateS, '2020-12-31'), 1);
		de(fn(dateS, '2020-12-01'), 31);
	});

const test03 = () =>
	QUnit.test(title.t03, () => {
		const de = deepEqual;
		const dateS = new Date(2021, 0, 1);

		de(fn(dateS, '2021-01-01'), 0);
		de(fn(dateS, '2021-01-02'), 1);
		de(fn(dateS, '2021-01-05'), 4);
		de(fn(dateS, '2020-12-31'), 1);
		de(fn(dateS, '2020-12-01'), 31);
	});

const test04 = () =>
	QUnit.test(title.t04, () => {
		const de = deepEqual;
		const dateS = new Date(2021, 0, 1);

		de(fn('2021-01-01', dateS, true), 0);
		de(fn('2021-01-02', dateS, true), -1);
		de(fn('2021-01-05', dateS, true), -4);
		de(fn('2020-12-31', dateS, true), 1);
		de(fn('2020-12-01', dateS, true), 31);
	});

const getDaysDiff = () => {
	test01();
	test02();
	test03();
	test04();
};

export { getDaysDiff };

// @ts-nocheck
/* global QUnit, deepEqual */

import { safeAppendNextObj as fn } from '../safeAppendNextObj';

const title = {
	t01: 'safeAppendNextObj | test01 | date jako data - test możliwości',
	t02: 'safeAppendNextObj | test01 | date jako string - test możliwości',
};

const msg = {
	t01: 'Brak klucza w rodzicu',
	t02: 'Obecny klucz w rodzicu',
};

const resA = {
	abc: {
		newKey: 100,
	},
};

const resB = {
	abc: {
		exiKey: 10,
		newKey: 100,
	},
};

const test01 = () =>
	QUnit.test(title.t01, () => {
		const de = deepEqual;
		de(fn({}, 'abc', 'newKey', 100), resA, msg.t01);
		de(
			fn({ abc: { exiKey: 10 } }, 'abc', 'newKey', 100),
			resB,
			msg.t02
		);
	});

const safeAppendNextObj = () => {
	test01();
};

export { safeAppendNextObj };

// @ts-nocheck
/* global QUnit, deepEqual */

import { getDaysConsecutive as fn } from '../getDaysConsecutive';
import { getDateAfter } from '../../../v01/time/getDateAfter';

const title = 'getDaysConsecutive | test01 | Test działania';

const msg = {
	t01: 'Długość zwróconej tablicy',
	t02: 'Pierwsza wartość',
	t03: 'Ostatnia wartość wartość',
};

const test01 = () =>
	QUnit.test(title, () => {
		const de = deepEqual;

		const d1 = new Date(2021, 0, 25);
		const d2 = getDateAfter(d1, 10 - 1);

		const out1 = fn(d1, 1);
		const out2 = fn(d1, 3);
		const out3 = fn(d1, 10);

		de(out1.length, 1, msg.t01);
		de(out1[0], d1, msg.t02);

		de(out2.length, 3, msg.t01);
		de(out2[0], d1, msg.t02);

		de(out3.length, 10, msg.t01);
		de(out3[0], d1, msg.t02);
		de(out3[out3.length - 1], d2, msg.t03);
	});

const getDaysConsecutive = () => {
	test01();
};

export { getDaysConsecutive };

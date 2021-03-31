// @ts-nocheck
/* global QUnit, deepEqual */

import { getDaysFromMonth as fn } from '../getDaysFromMonth';

const title = 'getDaysFromMonth | test01 | Test działania';

const msg = {
	t01: 'Długość zwróconej tablicy',
	t02: 'Pierwsza wartość',
};

const test01 = () =>
	QUnit.test(title, () => {
		const de = deepEqual;

		const d1 = new Date(2021, 0, 1);
		de(fn(d1).length, 31, msg.t01);
		de(fn(d1)[0], d1, msg.t02);

		const d2 = new Date(2021, 0, 15);
		de(fn(d2).length, 17, msg.t01);
		de(fn(d2)[0], d2, msg.t02);

		const d3 = new Date(2021, 0, 31);
		de(fn(d3).length, 1, msg.t01);
		de(fn(d3)[0], d3, msg.t02);
	});

const getDaysFromMonth = () => {
	test01();
};

export { getDaysFromMonth };

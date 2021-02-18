// @ts-nocheck
/* global QUnit, strictEqual */

import { isEmpty as fn } from '../isEmpty';

const title = 'isEmpty | arrays | Testy na tablicach';

const msg = {
	t01: '[] - tak',
	t02: '[[]] - tak',
};

const input = {
	a01: [],
	a02: [[]],
};

const arrays = () =>
	QUnit.test(title, () => {
		strictEqual(fn(input.a01), true, msg.t01);
		strictEqual(fn(input.a02), true, msg.t02);
	});

const isEmpty = () => ({
	arrays,
});

export { arrays };

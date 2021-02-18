// @ts-nocheck
/* global QUnit, strictEqual */

import { isEmpty as fn } from '../../isEmpty';

const title = 'isEmpty | arrays | Testy na tablicach';

const msg = {
	t01: '[] - true',
	t02: '[[]] - true',
	t03: '[[[]]] - true',
	t04: '[""] - true',
};

const input = {
	t01: [],
	t02: [[]],
	t03: [[[]]],
	t04: [''],
};

const arrays = () =>
	QUnit.test(title, () => {
		strictEqual(fn(input.t01), true, msg.t01);
		strictEqual(fn(input.t02), true, msg.t02);
		strictEqual(fn(input.t03), true, msg.t04);
		strictEqual(fn(input.t04), true, msg.t05);
	});

export { arrays };

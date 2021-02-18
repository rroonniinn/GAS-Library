// @ts-nocheck
/* global QUnit, strictEqual */

import { isEmpty as fn } from '../../isEmpty';

const title = 'isEmpty | arrays | Testy na tablicach';

const msg = {
	t01: '[] - true',
	t02: '[[]] - true',
	t03: '[[[]]] - true',
	t04: '[""] - true',
	t05: '[{}] - false',
	t06: '[1, []] - false',
	t07: '[[], [], 1] - false',
};

const input = {
	t01: [],
	t02: [[]],
	t03: [[[]]],
	t04: [''],
	t05: [{}],
	t06: [1, []],
	t07: [[], [], 1],
};

const arrays = () =>
	QUnit.test(title, () => {
		strictEqual(fn(input.t01), true, msg.t01);
		strictEqual(fn(input.t02), true, msg.t02);
		strictEqual(fn(input.t03), true, msg.t03);
		strictEqual(fn(input.t04), true, msg.t04);
		strictEqual(fn(input.t05), false, msg.t05);
		strictEqual(fn(input.t06), false, msg.t06);
		strictEqual(fn(input.t07), false, msg.t07);
	});

export { arrays };

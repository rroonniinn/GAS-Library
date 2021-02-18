// @ts-nocheck
/* global QUnit, strictEqual */

import { isEmpty as fn } from '../../isEmpty';

const title = 'isEmpty | primitives | Testy na podstawowych typach';

const msg = {
	t01: 'undefined - true',
	t02: 'null - true',
	t03: 'NaN - false',
	t04: '0 - false',
	t05: '1 - false',
	t06: '"a" - false',
	t07: '"-" - false',
};

const input = {
	t01: undefined,
	t02: null,
	t03: NaN,
	t04: 0,
	t05: 1,
	t06: 'a',
	t07: '-',
};

const primitives = () =>
	QUnit.test(title, () => {
		strictEqual(fn(input.t01), true, msg.t01);
		strictEqual(fn(input.t02), true, msg.t02);
		strictEqual(fn(input.t03), false, msg.t03);
		strictEqual(fn(input.t04), false, msg.t04);
		strictEqual(fn(input.t05), false, msg.t05);
		strictEqual(fn(input.t06), false, msg.t06);
		strictEqual(fn(input.t07), false, msg.t07);
	});

export { primitives };

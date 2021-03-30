// @ts-nocheck
/* global QUnit, strictEqual */

import { isEmpty as fn } from '../../isEmpty';

const title = 'isEmpty | primitives | Testy na podstawowych typach';

const msg = {
	t01: 'undefined - true',
	t02: 'null - true',
	t03: 'NaN - true',
	t04: '"" - true',
	t05: '0 - false',
	t06: '1 - false',
	t07: '"a" - false',
	t08: '"-" - false',
};

const input = {
	t01: undefined,
	t02: null,
	t03: NaN,
	t04: '',
	t05: 0,
	t06: 1,
	t07: 'a',
	t08: '-',
};

const primitives = () =>
	QUnit.test(title, () => {
		strictEqual(fn(input.t01), true, msg.t01);
		strictEqual(fn(input.t02), true, msg.t02);
		strictEqual(fn(input.t03), true, msg.t03);
		strictEqual(fn(input.t04), true, msg.t04);
		strictEqual(fn(input.t05), false, msg.t05);
		strictEqual(fn(input.t06), false, msg.t06);
		strictEqual(fn(input.t07), false, msg.t07);
		strictEqual(fn(input.t08), false, msg.t08);
	});

export { primitives };

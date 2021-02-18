// @ts-nocheck
/* global QUnit, strictEqual */

import { isEmpty as fn } from '../../isEmpty';

const title = 'isEmpty | objects | Testy na obiektach';

const msg = {
	t01: '{} - true',
	t02: '{ a: "" } - true',
	t03: '{ a: [] } - true',
	t04: '{ a: [[]] } - true',
	t05: '{ a: 0 } - false',
	t06: '{ a: "", b: 1 } - false',
};

const input = {
	t01: {},
	t02: { a: '' },
	t03: { a: [] },
	t04: { a: [[]] },
	t05: { a: 0 },
	t06: { a: '', b: 1 },
};

const objects = () =>
	QUnit.test(title, () => {
		strictEqual(fn(input.t01), true, msg.t01);
		strictEqual(fn(input.t02), true, msg.t02);
		strictEqual(fn(input.t03), true, msg.t03);
		strictEqual(fn(input.t04), true, msg.t04);
		strictEqual(fn(input.t05), false, msg.t05);
		strictEqual(fn(input.t06), false, msg.t06);
	});

export { objects };

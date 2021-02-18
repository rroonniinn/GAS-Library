// @ts-nocheck
/* global QUnit, strictEqual */

import { isEmpty as fn } from '../../isEmpty';

const title = 'isEmpty | objects | Testy na obiektach';

const msg = {
	t01: '{} - true',
	t02: '[[]] - true',
	t03: '[[[]]] - true',
	t04: '[""] - true',
};

const input = {
	t01: {},
	t02: { a: '' },
	t03: { a: [] },
	t04: { a: [[]] },
};

const objects = () =>
	QUnit.test(title, () => {
		strictEqual(fn(input.t01), true, msg.t01);
		strictEqual(fn(input.t02), true, msg.t02);
		strictEqual(fn(input.t03), true, msg.t03);
		strictEqual(fn(input.t04), true, msg.t04);
	});

export { objects };

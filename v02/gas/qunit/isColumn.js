/* global QUnit, equal */

import { isColumn as fn } from '../isColumn';

const isColumn = () => {
	const aRes = true;
	const aMsg = `powinno być ${aRes}`;
	const a1 = 1;
	const a2 = 1304;
	const a3 = 'AA';
	const a4 = 'ABC';
	const bRes = false;
	const bMsg = `powinno być ${bRes}`;
	const b1 = 0;
	const b2 = -1;
	const b3 = 'AA2';
	const b4 = 'A2:B';
	const b5 = 'Ń';
	const b6 = 'a';
	const b7 = 'ab';
	const b8 = 'Ab';

	QUnit.test('Checking "getRangeType" function ', () => {
		equal(fn(a1), aRes, `${a1} - ${aMsg}`);
		equal(fn(a2), aRes, `${a2} - ${aMsg}`);
		equal(fn(a3), aRes, `${a3} - ${aMsg}`);
		equal(fn(a4), aRes, `${a4} - ${aMsg}`);
		equal(fn(b1), bRes, `${b1} - ${bMsg}`);
		equal(fn(b2), bRes, `${b2} - ${bMsg}`);
		equal(fn(b3), bRes, `${b3} - ${bMsg}`);
		equal(fn(b4), bRes, `${b4} - ${bMsg}`);
		equal(fn(b5), bRes, `${b5} - ${bMsg}`);
		equal(fn(b6), bRes, `${b6} - ${bMsg}`);
		equal(fn(b7), bRes, `${b7} - ${bMsg}`);
		equal(fn(b8), bRes, `${b8} - ${bMsg}`);
	});
};

export { isColumn };

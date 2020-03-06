/* global QUnit, equal, throws */

import { getFirstCellFromString as fn } from '../getFirstCellFromString';

const getFirstCellFromString = () => {
	const a1 = 'A1:B2';
	const a2 = 'A1:B';
	const a3 = 'A1:2';
	const b1 = 'AB1:B2';
	const b2 = 'AB1:B';
	const b3 = 'AB1:2';

	const aRes = 'A1';
	const aMsg = `powinno być ${aRes}`;

	const bRes = 'AB1';
	const bMsg = `powinno być ${bRes}`;

	// Error
	const e1 = 'A:B2';

	QUnit.test('Checking "getFirstCellFromString" function ', () => {
		equal(fn(a1), aRes, `${a1} - ${aMsg}`);
		equal(fn(a2), aRes, `${a2} - ${aMsg}`);
		equal(fn(a3), aRes, `${a3} - ${aMsg}`);
		equal(fn(b1), bRes, `${b1} - ${bMsg}`);
		equal(fn(b2), bRes, `${b2} - ${bMsg}`);
		equal(fn(b3), bRes, `${b3} - ${bMsg}`);
		// Error
		throws(
			function() {
				fn(e1);
			},
			TypeError,
			'Not valid string to "getFirstCellFromString". Expected something like "A3:B4"'
		);
	});
};

export { getFirstCellFromString };

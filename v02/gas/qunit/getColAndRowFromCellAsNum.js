/* global QUnit, equal, throws */

import { getColAndRowFromCellAsNum as fn } from '../getColAndRowFromCellAsNum';

const getColAndRowFromCellAsNum = () => {
	const a1 = 'A1:B2';
	const a2 = 'A1:B';
	const a3 = 'A1:2';

	const resA1Col = 1;
	const resA1Row = 1;

	const b1 = 'C2:B2';
	const b2 = 'C2:B';
	const b3 = 'C2:2';

	const resB1Col = 3;
	const resB1Row = 2;

	const c1 = 'AB3:B2';
	const c2 = 'AB3:B';
	const c3 = 'AB3:2';

	const resC1Col = 28;
	const resC1Row = 3;

	// Error
	const e1 = 'A:B2';

	QUnit.test('Checking "getColAndRowFromCellAsNum" function ', () => {
		equal(fn(a1).col, resA1Col, `${a1} - (col) ma być ${resA1Col}`);
		equal(fn(a1).row, resA1Row, `${a1} - (row) ma być ${resA1Row}`);
		equal(fn(a2).col, resA1Col, `${a2} - (col) ma być ${resA1Col}`);
		equal(fn(a2).row, resA1Row, `${a2} - (row) ma być ${resA1Row}`);
		equal(fn(a3).col, resA1Col, `${a3} - (col) ma być ${resA1Col}`);
		equal(fn(a3).row, resA1Row, `${a3} - (row) ma być ${resA1Row}`);

		equal(fn(b1).col, resB1Col, `${b1} - (col) ma być ${resB1Col}`);
		equal(fn(b1).row, resB1Row, `${b1} - (row) ma być ${resB1Row}`);
		equal(fn(b2).col, resB1Col, `${b2} - (col) ma być ${resB1Col}`);
		equal(fn(b2).row, resB1Row, `${b2} - (row) ma być ${resB1Row}`);
		equal(fn(b3).col, resB1Col, `${b3} - (col) ma być ${resB1Col}`);
		equal(fn(b3).row, resB1Row, `${b3} - (row) ma być ${resB1Row}`);

		equal(fn(c1).col, resC1Col, `${c1} - (col) ma być ${resC1Col}`);
		equal(fn(c1).row, resC1Row, `${c1} - (row) ma być ${resC1Row}`);
		equal(fn(c2).col, resC1Col, `${c2} - (col) ma być ${resC1Col}`);
		equal(fn(c2).row, resC1Row, `${c2} - (row) ma być ${resC1Row}`);
		equal(fn(c3).col, resC1Col, `${c3} - (col) ma być ${resC1Col}`);
		equal(fn(c3).row, resC1Row, `${c3} - (row) ma być ${resC1Row}`);

		// Error
		throws(
			function() {
				fn(e1);
			},
			TypeError,
			'Not valid string to "getColAndRowFromCellAsNum". Expected something like "A3:B4"'
		);
	});
};

export { getColAndRowFromCellAsNum };

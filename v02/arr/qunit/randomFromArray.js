/* eslint-disable max-lines-per-function */
// @ts-nocheck
/* global QUnit, equal, notEqual, throws */

import { randomFromArray as fn } from '../randomFromArray';

const randomFromArray = () => {
	// No params
	const a1 = [1, 2, 3, 4, 5, 6, 7, 8];
	const a2 = [undefined, '2', {}, '4', () => console.log, 0, null];

	// Error
	const e1 = 'A:B2';

	QUnit.test('Checking "randomFromArray" function ', () => {
		equal(
			fn(a1).length,
			a1.length,
			`${a1} / !! Długość tablic ma być taka sama !!`
		);
		notEqual(
			fn(a1),
			a1,
			`${a1} / Wynikowa tablica jest inna niż oryginał`
		);
		equal(
			fn(a2).length,
			a2.length,
			`${a2} / Długość tablic ma być taka sama`
		);
		notEqual(
			fn(a2),
			a2,
			`${a2} / Wynikowa tablica jest inna niż oryginał`
		);

		// equal(fn(a1).row, resA1Row, `${a1} - (row) ma być ${resA1Row}`);
		// equal(fn(a2).col, resA1Col, `${a2} - (col) ma być ${resA1Col}`);
		// equal(fn(a2).row, resA1Row, `${a2} - (row) ma być ${resA1Row}`);
		// equal(fn(a3).col, resA1Col, `${a3} - (col) ma być ${resA1Col}`);
		// equal(fn(a3).row, resA1Row, `${a3} - (row) ma być ${resA1Row}`);

		// equal(fn(b1).col, resB1Col, `${b1} - (col) ma być ${resB1Col}`);
		// equal(fn(b1).row, resB1Row, `${b1} - (row) ma być ${resB1Row}`);
		// equal(fn(b2).col, resB1Col, `${b2} - (col) ma być ${resB1Col}`);
		// equal(fn(b2).row, resB1Row, `${b2} - (row) ma być ${resB1Row}`);
		// equal(fn(b3).col, resB1Col, `${b3} - (col) ma być ${resB1Col}`);
		// equal(fn(b3).row, resB1Row, `${b3} - (row) ma być ${resB1Row}`);

		// equal(fn(c1).col, resC1Col, `${c1} - (col) ma być ${resC1Col}`);
		// equal(fn(c1).row, resC1Row, `${c1} - (row) ma być ${resC1Row}`);
		// equal(fn(c2).col, resC1Col, `${c2} - (col) ma być ${resC1Col}`);
		// equal(fn(c2).row, resC1Row, `${c2} - (row) ma być ${resC1Row}`);
		// equal(fn(c3).col, resC1Col, `${c3} - (col) ma być ${resC1Col}`);
		// equal(fn(c3).row, resC1Row, `${c3} - (row) ma być ${resC1Row}`);

		// Error
		// throws(
		// 	function() {
		// 		fn(e1);
		// 	},
		// 	TypeError,
		// 	'Not valid string to "randomFromArray". Expected something like "A3:B4"'
		// );
	});
};

export { randomFromArray };

/* eslint-disable max-lines-per-function */
/* global QUnit, equal */

import { getRangeRelative as fn } from '../getRangeRelative';
import { getIdFromUrl } from '../getIdFromUrl';
import { getSheet } from '../getSheet';

const url =
	'https://docs.google.com/spreadsheets/d/1gGp30kt6oOj7Z8WZKAyBPQNYUVPD8FE7QoEgLerAZyQ/edit#gid=0';
const sNameA = 'qunit A';
const sNameB = 'qunit B';

const id = getIdFromUrl(url);
const sa = getSheet(sNameA, id);
const sb = getSheet(sNameB, id);

const getRangeRelative = () => {
	const a1 = 'A';
	const a1Res = 'A1:J';
	const a2 = 'B';
	const a2Res = 'B1:J';
	const a3 = 'J';
	const a3Res = 'J1:J';

	const a4 = 1;
	const a4Res = 'A1:10'; // to samo co A1:J, daje również
	const a5 = 2;
	const a5Res = 'A2:10';
	const a6 = 10;
	const a6Res = 'A10:10';
	const a7 = '1';
	const a7Res = 'A1:10';
	const a8 = '2';
	const a8Res = 'A2:10';
	const a9 = '10';
	const a9Res = 'A10:10';

	const a10 = 'A1';
	const a10Res = 'A1:J';
	const a11 = 'B1';
	const a11Res = 'B1:J';
	const a12 = 'C4';
	const a12Res = 'C4:J';

	const a13 = 'J10';
	const a13Res = 'J10:J';
	const a14 = 'E10';
	const a14Res = 'E10:J';

	const b1 = 'A';
	const b1Res = 'A2:J';
	const b2 = 'B';
	const b2Res = 'B3:J';
	const b3 = 'I';
	const b3Res = 'I10:J';
	const b4 = 'J';
	const b4Res = 'J11:J';
	const b5 = 'C';
	const b5Res = 'C1:J';

	const b6 = 1;
	const b6Res = 'B1:10';
	const b7 = 2;
	const b7Res = 'C2:10';
	const b8 = 3;
	const b8Res = 'A3:10';
	const b9 = 9;
	const b9Res = 'J9:10';
	const b10 = 10;
	const b10Res = 'K10:10';

	const b11 = 'B1';
	const b11Res = 'B1:J';
	const b12 = 'C4';
	const b12Res = 'C4:J';
	const b13 = 'A1';
	const b13Res = 'A1:J';

	const b14 = 'E10';
	const b14Res = 'E10:J';
	const b15 = 'J10';
	const b15Res = 'J10:J';

	QUnit.test('Checking "getRangeRelative" function ', () => {
		equal(fn(sa, a1).range, a1Res, `${a1} - powinno być ${a1Res}`); // 1
		equal(fn(sa, a2).range, a2Res, `${a2} - powinno być ${a2Res}`); // 2
		equal(fn(sa, a3).range, a3Res, `${a3} - powinno być ${a3Res}`); // 3
		equal(fn(sa, a4).range, a4Res, `${a4} - powinno być ${a4Res}`); // 4
		equal(fn(sa, a5).range, a5Res, `${a5} - powinno być ${a5Res}`); // 5
		equal(fn(sa, a6).range, a6Res, `${a6} - powinno być ${a6Res}`); // 6
		equal(fn(sa, a7).range, a7Res, `${a7} - powinno być ${a7Res}`); // 7
		equal(fn(sa, a8).range, a8Res, `${a8} - powinno być ${a8Res}`); // 8
		equal(fn(sa, a9).range, a9Res, `${a9} - powinno być ${a9Res}`); // 9
		equal(fn(sa, a10).range, a10Res, `${a10} - powinno być ${a10Res}`); // 10
		equal(fn(sa, a11).range, a11Res, `${a11} - powinno być ${a11Res}`); // 11
		equal(fn(sa, a12).range, a12Res, `${a12} - powinno być ${a12Res}`); // 12
		equal(fn(sa, a13).range, a13Res, `${a13} - powinno być ${a13Res}`); // 13
		equal(fn(sa, a14).range, a14Res, `${a14} - powinno być ${a14Res}`); // 14

		equal(fn(sb, b1).range, b1Res, `${b1} - powinno być ${b1Res}`); // 15
		equal(fn(sb, b2).range, b2Res, `${b2} - powinno być ${b2Res}`); // 16
		equal(fn(sb, b3).range, b3Res, `${b3} - powinno być ${b3Res}`); // 17
		equal(fn(sb, b4).range, b4Res, `${b4} - powinno być ${b4Res}`); // 18
		equal(fn(sb, b5).range, b5Res, `${b5} - powinno być ${b5Res}`); // 19

		equal(fn(sb, b6).range, b6Res, `${b6} - powinno być ${b6Res}`); // 20
		equal(fn(sb, b7).range, b7Res, `${b7} - powinno być ${b7Res}`); // 21
		equal(fn(sb, b8).range, b8Res, `${b8} - powinno być ${b8Res}`); // 22
		equal(fn(sb, b9).range, b9Res, `${b9} - powinno być ${b9Res}`); // 23
		equal(fn(sb, b10).range, b10Res, `${b10} - powinno być ${b10Res}`); // 24

		equal(fn(sb, b11).range, b11Res, `${b11} - powinno być ${b11Res}`); // 25
		equal(fn(sb, b12).range, b12Res, `${b12} - powinno być ${b12Res}`); // 26
		equal(fn(sb, b13).range, b13Res, `${b13} - powinno być ${b13Res}`); // 27
		equal(fn(sb, b14).range, b14Res, `${b14} - powinno być ${b14Res}`); // 28
		equal(fn(sb, b15).range, b15Res, `${b15} - powinno być ${b15Res}`); // 29
	});
};

export { getRangeRelative };

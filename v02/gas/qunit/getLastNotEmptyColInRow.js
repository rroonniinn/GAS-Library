/* global QUnit, equal */

import { getLastNotEmptyColInRow as fn } from '../getLastNotEmptyColInRow';
import { getIdFromUrl } from '../getIdFromUrl';
import { getSheet } from '../getSheet';

const url =
	'https://docs.google.com/spreadsheets/d/1zxVvTtQAfOKT1jbExBEvh0ZetN5TfPv-TEgy6vHpGs0/edit#gid=349586621';
const sName = 'qunit';

const id = getIdFromUrl(url);
const s = getSheet(sName, id);

const getLastNotEmptyColInRow = () => {
	const r3 = 3;
	const r3Res = 0;
	const r4 = 4;
	const r4Res = 3;
	const r5 = 5;
	const r5Res = 3;
	const r6 = 6;
	const r6Res = 3;
	const r7 = 7;
	const r7Res = 3;
	const r8 = 8;
	const r8Res = 4;
	const r9 = 9;
	const r9Res = 4;
	const r10 = 10;
	const r10Res = 4;
	const r11 = 11;
	const r11Res = 6;
	const r12 = 12;
	const r12Res = 10;
	const r12s = '12';
	const r12sRes = 10;
	const r13 = 13;
	const r13Res = 1;

	QUnit.test('Checking "getLastNotEmptyColInRow" function ', () => {
		equal(fn(s, r3), r3Res, `${r3} - powinno być ${r3Res}`); // 1
		equal(fn(s, r4), r4Res, `${r4} - powinno być ${r4Res}`); // 2
		equal(fn(s, r5), r5Res, `${r5} - powinno być ${r5Res}`); // 3
		equal(fn(s, r6), r6Res, `${r6} - powinno być ${r6Res}`); // 4
		equal(fn(s, r7), r7Res, `${r7} - powinno być ${r7Res}`); // 5
		equal(fn(s, r8), r8Res, `${r8} - powinno być ${r8Res}`); // 6
		equal(fn(s, r9), r9Res, `${r9} - powinno być ${r9Res}`); // 7
		equal(fn(s, r10), r10Res, `${r10} - powinno być ${r10Res}`); // 8
		equal(fn(s, r11), r11Res, `${r11} - powinno być ${r11Res}`); // 9
		equal(fn(s, r12), r12Res, `${r12} - powinno być ${r12Res}`); // 10
		equal(
			fn(s, r12s),
			r12sRes,
			`${r12s} - (string = "12") powinno być ${r12sRes}`
		); // 11
		equal(fn(s, r13), r13Res, `${r13} - powinno być ${r13Res}`); // 12
	});
};

export { getLastNotEmptyColInRow };

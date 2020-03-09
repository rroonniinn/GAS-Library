/* global QUnit, equal */

import { getIdFromUrl } from '../getIdFromUrl';
import { getLastNotEmptyRowInCol as fn } from '../getLastNotEmptyRowInCol';
import { getSheet } from '../getSheet';

const url =
	'https://docs.google.com/spreadsheets/d/1e7G8Yo8Np30bnyXzQm8NNyTZtBIZfK2eMjtd06f1GxM/edit#gid=0';
const sName = 'qunit';

const id = getIdFromUrl(url);
const s = getSheet(sName, id);

const getLastNotEmptyRowInCol = () => {
	// const aMsg = 'powinno być "regular"';

	const c = 'C';
	const cRes = 0;
	const d = 'D';
	const dRes = 3;
	const e = 'E';
	const eRes = 3;
	const f = 'F';
	const fRes = 3;
	const g = 'G';
	const gRes = 3;
	const h = 'H';
	const hRes = 4;
	const i = 'I';
	const iRes = 4;
	const j = 'J';
	const jRes = 4;
	const k = 'K';
	const kRes = 6;
	const l = 'L';
	const lRes = 10;
	const m = 'M';
	const mRes = 1;
	const n = 'N';
	const nRes = 3;

	QUnit.test('Checking "getLastNotEmptyRowInCol" function ', () => {
		equal(fn(s, c), cRes, `${c} - powinno być ${cRes}`); // 1
		equal(fn(s, d), dRes, `${d} - powinno być ${dRes}`); // 2
		equal(fn(s, e), eRes, `${e} - powinno być ${eRes}`); // 3
		equal(fn(s, f), fRes, `${f} - powinno być ${fRes}`); // 4
		equal(fn(s, g), gRes, `${g} - powinno być ${gRes}`); // 5
		equal(fn(s, h), hRes, `${h} - powinno być ${hRes}`); // 6
		equal(fn(s, i), iRes, `${i} - powinno być ${iRes}`); // 7
		equal(fn(s, j), jRes, `${j} - powinno być ${jRes}`); // 8
		equal(fn(s, k), kRes, `${k} - powinno być ${kRes}`); // 9
		equal(fn(s, l), lRes, `${l} - powinno być ${lRes}`); // 10
		equal(fn(s, m), mRes, `${m} - powinno być ${mRes}`); // 11
		equal(fn(s, n), nRes, `${n} - powinno być ${nRes}`); // 12
	});
};

export { getLastNotEmptyRowInCol };

/* global QUnit, ok, equal */

import { getRangeType as fn } from '../getRangeType';

const getRangeType = () => {
	const aMsg = 'powinno być "regular"';
	const a1 = 'A2:B5';
	const a2 = 'A252:B5';
	const a3 = 'AA2:BB5';
	const a4 = 'A253:B5144';
	const a5 = 'A253:2';
	const a6 = 'A253:424';
	const a7 = 'A:3';
	const bMsg = 'powinno być "letNum"';
	const b1 = 'A2';
	const b2 = 'A252';
	const b3 = 'AA2';
	const b4 = 'A253';
	const b5 = 'A253';
	const b6 = 'A253';
	const cMsg = 'powinno być "let"';
	const c1 = 'A';
	const c2 = 'BC';
	const dMsg = 'powinno być "num"';
	const d1 = '1';
	const d2 = 1;
	const d3 = '235';
	const d4 = 235;

	QUnit.test('Checking "getRangeType" function ', () => {
		equal(fn(a1), 'regular', `${a1} - ${aMsg}`);
		equal(fn(a2), 'regular', `${a2} - ${aMsg}`);
		equal(fn(a3), 'regular', `${a3} - ${aMsg}`);
		equal(fn(a4), 'regular', `${a4} - ${aMsg}`);
		equal(fn(a5), 'regular', `${a5} - ${aMsg}`);
		equal(fn(a6), 'regular', `${a6} - ${aMsg}`);
		equal(fn(a7), 'regular', `${a7} - ${aMsg}`);
		equal(fn(b1), 'letNum', `${b1} - ${bMsg}`);
		equal(fn(b2), 'letNum', `${b2} - ${bMsg}`);
		equal(fn(b3), 'letNum', `${b3} - ${bMsg}`);
		equal(fn(b4), 'letNum', `${b4} - ${bMsg}`);
		equal(fn(b5), 'letNum', `${b5} - ${bMsg}`);
		equal(fn(b6), 'letNum', `${b6} - ${bMsg}`);
		equal(fn(c1), 'let', `${c1} - ${cMsg}`);
		equal(fn(c2), 'let', `${c2} - ${cMsg}`);
		equal(fn(d1), 'num', `${d1} - ${dMsg}`);
		equal(fn(d2), 'num', `${d2} - ${dMsg}`);
		equal(fn(d3), 'num', `${d3} - ${dMsg}`);
		equal(fn(d4), 'num', `${d4} - ${dMsg}`);
	});
};

export { getRangeType };

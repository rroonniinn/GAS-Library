/* eslint-disable max-lines-per-function */
/* global QUnit, equal */

import { getRangeRestricted as fn } from '../getRangeRestricted';

const getRangeRestricted = () => {
	const e01Range = 'A1:J';
	const e01Hor = 3;
	const e01Ver = 3;
	const e01Result = 'A1:C3';

	const e02Range = 'D6:8';
	const e02Hor = 1;
	const e02Ver = 1;
	const e02Result = 'D6:D6';

	// Zakres większy niż zakres pierwotny
	const e03Range = 'C3:D4';
	const e03Hor = 5;
	const e03Ver = 5;
	const e03Result = 'C3:G7';

	// Nie podanie offsetu hor i ver
	const e04Range = 'C3:D4';
	const e04Result = 'C3:D4';

	// Nie podanie offsetu hor i ver (inny zapis)
	const e05Range = 'C3:D';
	const e05Result = 'C3:D';

	// Nie podanie offsetu hor i ver (inny zapis cd)
	const e06Range = 'C3:5';
	const e06Result = 'C3:5';

	// Nie podanie offsetu ver
	const e07Range = 'A1:J10';
	const e07Hor = 5;
	const e07Result = 'A1:E10';

	// Nie podanie offsetu ver (inny zapis)
	const e08Range = 'A1:J';
	const e08Hor = 5;
	const e08Result = 'A1:E';

	// Nie podanie offsetu ver (inny zapis cd)
	const e09Range = 'A1:10';
	const e09Hor = 5;
	const e09Result = 'A1:E10';

	// Nie podanie offsetu hor
	const e10Range = 'A1:J10';
	const e10Ver = 5;
	const e10Result = 'A1:J5';

	// Nie podanie offsetu hor (inny zapis)
	const e11Range = 'A1:J';
	const e11Ver = 5;
	const e11Result = 'A1:J5';

	// Nie podanie offsetu hor (inny zapis cd)
	const e12Range = 'A1:10';
	const e12Ver = 5;
	const e12Result = 'A1:5';

	// Przykłady podane w opisie getRangeRelative
	const e13Range = 'A1:C3';
	const e13Hor = 2;
	const e13Result = 'A1:B3';

	const e14Range = 'A1:C3';
	const e14Ver = 2;
	const e14Result = 'A1:C2';

	QUnit.test('Checking "getRangeRestricted" function ', () => {
		equal(
			fn(e01Range, e01Hor, e01Ver),
			e01Result,
			`${e01Range} - powinno być ${e01Result}`
		); // 1
		equal(
			fn(e02Range, e02Hor, e02Ver),
			e02Result,
			`${e02Range} - powinno być ${e02Result}`
		); // 2
		equal(
			fn(e03Range, e03Hor, e03Ver),
			e03Result,
			`${e03Range} - powinno być ${e03Result}`
		); // 3
		equal(
			fn(e04Range),
			e04Result,
			`${e04Range} - powinno być ${e04Result}`
		); // 4
		equal(
			fn(e05Range),
			e05Result,
			`${e05Range} - powinno być ${e05Result}`
		); // 5
		equal(
			fn(e06Range),
			e06Result,
			`${e06Range} - powinno być ${e06Result}`
		); // 6
		equal(
			fn(e07Range, e07Hor),
			e07Result,
			`${e07Range} - powinno być ${e07Result}`
		); // 7
		equal(
			fn(e08Range, e08Hor),
			e08Result,
			`${e08Range} - powinno być ${e08Result}`
		); // 8
		equal(
			fn(e09Range, e09Hor),
			e09Result,
			`${e09Range} - powinno być ${e09Result}`
		); // 9
		equal(
			fn(e10Range, null, e10Ver),
			e10Result,
			`${e10Range} - powinno być ${e10Result}`
		); // 10
		equal(
			fn(e11Range, null, e11Ver),
			e11Result,
			`${e11Range} - powinno być ${e11Result}`
		); // 11
		equal(
			fn(e12Range, null, e12Ver),
			e12Result,
			`${e12Range} - powinno być ${e12Result}`
		); // 12
		equal(
			fn(e13Range, e13Hor),
			e13Result,
			`${e13Range} - powinno być ${e13Result}`
		); // 13
		equal(
			fn(e14Range, null, e14Ver),
			e14Result,
			`${e14Range} - powinno być ${e14Result}`
		); // 14
	});
};

export { getRangeRestricted };

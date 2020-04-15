// @ts-nocheck
/* global QUnit, equal */

import { getIdFromUrl as fn } from '../getIdFromUrl';

const getIdFromUrl = () => {
	const res = '15oy9hOnXCp5KGIpbjRxIm7_Sx0aOhIzPegfbF6Lm6Ck';
	const msg = `powinno być ${res}`;
	const a1 =
		'https://docs.google.com/spreadsheets/d/15oy9hOnXCp5KGIpbjRxIm7_Sx0aOhIzPegfbF6Lm6Ck/edit#gid=1208179718';
	const a2 =
		'https://docs.google.com/spreadsheets/d/15oy9hOnXCp5KGIpbjRxIm7_Sx0aOhIzPegfbF6Lm6Ck/';
	const a3 =
		'https://docs.google.com/spreadsheets/d/15oy9hOnXCp5KGIpbjRxIm7_Sx0aOhIzPegfbF6Lm6Ck';

	/**
	 * A jQuery plugin to make stars fly around your home page.
	 * @function external:QUnit.test
	 */

	QUnit.test('Checking "getIdFromUrl" function ', () => {
		equal(fn(a1), res, `${a1} - ${msg}`);
		equal(fn(a2), res, `${a2} - ${msg}`);
		equal(fn(a3), res, `${a3} - ${msg}`);
	});
};

export { getIdFromUrl };

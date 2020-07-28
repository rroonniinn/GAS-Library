import { pipe } from '../../fp/pipe';
import { getSheet } from '../../gas/getSheet';
import { getSpreadsheet } from '../../gas/getSpreadsheet';
import { paste } from '../../gas/paste';
import { isUrl } from '../../str/isUrl';

const dataBase =
	'https://docs.google.com/spreadsheets/d/1rXcs7IYZ2san9esTpNubaqyyvhFtmpxUhG7VI8qubjU';

const splitData = arr => {
	const numbs = arr.map(([t, m1, m2, m3, m4, m5, m6]) => [
		t,
		m1,
		m2,
		m3,
		m4,
		m5,
		m6,
	]);
	const medians = arr.map(
		([, , , , , , , , , , t, m1, m2, m3, m4, m5, m6]) => [
			t,
			m1,
			m2,
			m3,
			m4,
			m5,
			m6,
		]
	);

	return { numbs, medians };
};

const transformData = (id, results) => arrCombined => {
	const arrs = splitData(arrCombined);

	const dataMedians = arrs.medians.reduce((resul, row) => {
		resul.push(row.filter(cell => cell !== '-'));
		return resul;
	}, []);

	const methods = dataMedians[0].slice(1);
	const targets = dataMedians.slice(1).map(([a]) => a);

	const valuesMedians = dataMedians.slice(1).map(row => row.slice(1));

	const dataNumbs = arrs.numbs.reduce((resul, row) => {
		resul.push(row.filter(cell => cell !== '-'));
		return resul;
	}, []);

	const valuesNumbs = dataNumbs.slice(1).map(row => row.slice(1));

	for (let x = 0; x < methods.length; x++) {
		for (let y = 0; y < targets.length; y++) {
			results.push([
				id,
				'',
				targets[y],
				methods[x],
				valuesNumbs[y][x],
				valuesMedians[y][x],
			]);
		}
	}
};

const reapData = (id, url, results) => {
	pipe(
		() =>
			getSheet('Summary', url)
				// .getRange('AI15:AO23')
				.getRange('Y15:AO23')
				.getValues(),
		transformData(id, results),
		() => console.log(`DONE - ${url}`)
	)();
};

const addExeprimentsData = () => {
	const s = getSheet('Experiments', dataBase);
	const res = [];

	s.getRange('C34:J35') // ------- tutaj wybieraj raporty do wstawienia
		.getValues()
		.filter(([val]) => val !== '')
		.map(([c, , , , , , , j]) => [c, j])
		.forEach(([id, url]) => {
			if (isUrl(url)) {
				reapData(id, url, res);
			}
		});

	paste(s.getParent().getSheetByName('Results'), 'B', res, {
		notRemoveFilers: true,
		restrictCleanup: 'preserve',
		notRemoveEmptys: true,
	});
};

export { addExeprimentsData };

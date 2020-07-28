import { pipe } from '../../fp/pipe';
import { getSheet } from '../../gas/getSheet';
import { getSpreadsheet } from '../../gas/getSpreadsheet';
import { paste } from '../../gas/paste';
import { isUrl } from '../../str/isUrl';

const dataBase =
	'https://docs.google.com/spreadsheets/d/1rXcs7IYZ2san9esTpNubaqyyvhFtmpxUhG7VI8qubjU';

const reapData = (url, results) => {
	pipe(
		() =>
			getSheet('Summary', url)
				.getRange('B6:L9')
				.getValues(),
		data => {
			results.push([data[0][3], data[2][3], data[0][9]]);
		},
		() => console.log(`DONE - ${url}`)
	)();
};

const addExeprimentDays = () => {
	const s = getSheet('Experiments', dataBase);
	const res = [];

	s.getRange('J3:J')
		.getValues()
		.filter(([val]) => val !== '')
		.forEach(([val]) => {
			if (!isUrl(val)) {
				res.push(['-', '-', '-']);
			} else {
				reapData(val, res);
			}
		});

	paste(s, 'G3', res, {
		notRemoveFilers: true,
		restrictCleanup: 'preserve',
		notRemoveEmptys: true,
	});
};

export { addExeprimentDays };

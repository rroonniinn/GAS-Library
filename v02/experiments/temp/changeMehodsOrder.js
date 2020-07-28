import { getSheet } from '../../gas/getSheet';
import { pipe } from '../../fp/pipe';
import { getSpreadsheet } from '../../gas/getSpreadsheet';
import { paste } from '../../gas/paste';

const urls = [
	// 'https://docs.google.com/spreadsheets/d/1efnc2XIoDhuUFOj1OjSCCJEYo-4lySkrLxPSXZRuZH0/edit?usp=sharing',
	// 'https://docs.google.com/spreadsheets/d/1ynxKmhFhh16Xs7VKpJNU3TXrdJts8GPNTVIu67jjA8k/edit#gid=14893054',
	// 'https://docs.google.com/spreadsheets/d/18iF5nldtDXiot8U3zyyHftziABwca5mKZfs8v2_zOLQ',
	// 'https://docs.google.com/spreadsheets/d/1lBA3yt56rs0odGCj-T3aSo-T7-cZbSrDLq0E9BhQf58',
	// 'https://docs.google.com/spreadsheets/d/13OpOgu1xdAKAVg0w6RCUK4kf-3Vt0a0p4bmJpksiUO0/edit?usp=sharing',
	// 'https://docs.google.com/spreadsheets/d/13BrRhr43gOfoYkSOZgPajc4V56iN7nOkPwnw6MNxckI/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/1WRmVpdVtRJCaSiZ7sOJT_YRmr6DLNhf8enKRC_Lu8YA/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/10oFqZoE5Jy81dKrEjRvofc0tbHFVObpprasDV7IKIDE/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/1dChrqiKRj36rg4APMNVra8PMc53CTMsAl3suwwS2w9I/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/17cnS2yi5I1jAW0NQvytGYtAl4Urt_jW5ALrQAKFllUo/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/1qTFdCMHaSKUQtJYw_yMGlOlaV2reZQM0GmZLLvMH4dA/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/1RvAELQnq9ZMmuy16SS6X7dieMEy3KrQNNQkgNSZFbVE/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/11b4pKYJgwFcW2yzjpIxj5ox9LuOxb_OxkQ3cRajA5hI/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/1pFN7aeASBKvaErTB29iLOpOhVENUDFlrn7rHMj1QcnU/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/1xlks7IF6897YFD4lHP8RzRoVIh6z7-F5XnPUMe8UvHw/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/1n71ixrNnU4o5u04zRAN56thCqhcJTTLMrujQZxg5fOo/edit#gid=14893054',
	'https://docs.google.com/spreadsheets/d/13cifqUH5UGUbUBM41-lMUszCfHq7t_jj9Oog2tiKU8c/edit#gid=14893054',
	'https://docs.google.com/spreadsheets/d/1TYHbKoiN0vVbGbFZqIJY-Ed8uBVd5gMKaIZKauR4Wm0/edit#gid=14893054',
	'https://docs.google.com/spreadsheets/d/1zJSfwzoVRihLgwoBKrkRO7wjTJR6wyKEr2-vGabmmpU/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/1FyTNxeOAwMLDT2DXMrz6ULwHVqUd1ogCZU9ZaHUF0Io/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/1rULICmpydHgb8MMO9XM0RqLbwxQnybQpvZtU41VmAQM/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/1RDilTlBoC4bbvUKOiPMEY1iNt6QoOxAo4W6BBroQnvI/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/1fHB29kIsGOgFFKSE9AsZ7Iavp9yBXRZiolB7YXEws-I/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/1ypnMvn9Im73L5KIOtYlCiAEHv1aYt-WNoFm0Dk-CNOw/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/12VaTfoOfCWMeiTOhVkbvl_6azop3dizKA7yeDwxFFjg/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/1m4YJ6SLsNKgsXTHA5SOZGE5u-KdXK5bkDDUSqIMU_d0/edit?usp=sharing',
	'https://docs.google.com/spreadsheets/d/18a1C7wn8BnL-bbGcxAe-dN1Ol1qRluye_LvS3MDsOKc/edit?usp=sharing',
];

const formula =
	'={"Method";ArrayFormula(IFS(D3:D="1 row";"1: 1r";D3:D="5 rows";"2: 5r";D3:D="10 rows";"3. 10r";D3:D="25 rows";"4. 25r";D3:D="50 rows";"5. 50r";D3:D="100 rows";"6. 100r"))}';

const addCol = url => {
	getSheet('data', url)
		.insertColumnAfter(10)
		.getRange('K2')
		.setFormula(formula);

	console.log(`Done - ${url}`);
};

const replaceColumn = url => {
	const ss = getSpreadsheet(url);
	const newDataSheet = ss.getSheetByName('newData');
	const dataSheet = ss.getSheetByName('data');

	pipe(
		() => dataSheet.getRange('K1:K').getValues(),
		data => {
			if (newDataSheet) {
				console.log(
					`!!! newDataSheet FOUND !! NOT DO MUCH - ${url}`
				);
			} else {
				pipe(
					() => dataSheet.getRange('D1:D').setValues(data),
					() => dataSheet.deleteColumn(11),
					() => console.log(`Done - ${url}`)
				)();
			}
		}
	)();
};

const changeMehodsOrder = () => {
	// urls.forEach(addCol);
	urls.forEach(replaceColumn);
};
export { changeMehodsOrder };

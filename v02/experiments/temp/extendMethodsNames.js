import { pipe } from '../../fp/pipe';
import { getSheet } from '../../gas/getSheet';
import { getSpreadsheet } from '../../gas/getSpreadsheet';
import { paste } from '../../gas/paste';

const urls = [
	'https://docs.google.com/spreadsheets/d/19O90DxpzvThqAiKAgbFCMy49BNgiAJjEhVITuPEuU50/edit#gid=14893054',
	// 'https://docs.google.com/spreadsheets/d/18yjX2m468x1GmbN9JtGG3K_bUSXctGiExGbUHCtySv0',
	// 'https://docs.google.com/spreadsheets/d/1uIpx1ONaptCk1GiubCrfq6kswdCI3Jb9pQj8HxiLsJ4/edit#gid=14893054',
	// 'https://docs.google.com/spreadsheets/d/1BbGHtZwklqQuGPN7Q6ngsfueTuhC7qgz3zBlxdA7WOg/edit#gid=14893054',
	// 'https://docs.google.com/spreadsheets/d/1miI9RE1lLJjdMMhwOFqenVu0E_6wxmfTwtNNwUUJvzg/edit#gid=14893054',
	// 'https://docs.google.com/spreadsheets/d/11siZ_PhU92YfPeBunw7hvQ_1uncH1NWU1DFUl_LtEIE/edit#gid=14893054',
	// 'https://docs.google.com/spreadsheets/d/1TDN2QZNqJiCgBS3cNP8_-kqbByAhoWzN4ocNbgdnVag/edit#gid=14893054',
	// 'https://docs.google.com/spreadsheets/d/16NRzL6064nIk4ZZWz7dmJ8XCVgR7UNSV64MSGDQdXjk/edit?usp=sharing',
	// 'https://docs.google.com/spreadsheets/d/1KzxGabzZmVmkJYoNBGEO-8nSeifVG9OR3MzCCGczieQ/edit?usp=sharing',
	// 'https://docs.google.com/spreadsheets/d/16OrGF27TIy2JNENCUF1oYKgXq420VaE7Th9ERhBEsyM/edit?usp=sharing',
	// 'https://docs.google.com/spreadsheets/d/1YEwdHqugiNSlCs1r517murGueMqcu7s4p6XCXO4AMJI/edit?usp=sharing',
	// 'https://docs.google.com/spreadsheets/d/1i08L588f_-T4s95oNWom-Fhv-Dqw6zNjBfV2kR-4qsU/edit?usp=sharing',
	// 'https://docs.google.com/spreadsheets/d/1PxjJi1B4BrOhYWf0zFwGiJrURgdWvpL8um2EK-ldVyI/edit?usp=sharing',
	// 'https://docs.google.com/spreadsheets/d/1bm62LYbOACsQQ9w5CzlXsL430QRQKhztU_7Wee68qpE/edit?usp=sharing',
	// 'https://docs.google.com/spreadsheets/d/1X6N397QGJLiQnIPYfcNlS6sZhVoIjNIT8aDKW6E_ESM/edit?usp=sharing',
	// 'https://docs.google.com/spreadsheets/d/1MIrYnq1_oMqjDTWWSjNE4dNuYPlSq9PeQY--kAS3YwY/edit?usp=sharing',
	// 'https://docs.google.com/spreadsheets/d/1dGuueuJkYPBiunlLtbyhVLkDS6BtjTKO1QDC1-7hzQg/edit?usp=sharing',
	// 'https://docs.google.com/spreadsheets/d/1BdyRjcT1qGUzvuLPSBpPY4uOi3BaWcu_scVVcQ53IxU/edit?usp=sharing',
	// 'https://docs.google.com/spreadsheets/d/1CKUza8PFd6M96YHmMk2ZVekgCo6xO-TD-Sb3ODTfs6E/edit?usp=sharing',
	// 'https://docs.google.com/spreadsheets/d/1JKY4lUrzkgYx6Ad2DY6t514PHPcZf-nXhbsLXaz6SX0/edit?usp=sharing',
];

const changeLength = url => {
	getSheet('helper', url)
		.getRange('H42')
		.setValue(10);

	console.log(`Finishe: ${url}`);
};

const methodUnify = url => {
	const s = getSheet('data', url);
	pipe(
		() =>
			s
				.getRange('D3:D')
				.getValues()
				.map(row => ['Service']),
		data =>
			paste(s, 'D3', data, {
				notRemoveFilers: true,
				restrictCleanup: 'preserve',
				notRemoveEmptys: true,
			}),
		() => console.log(`Finishe: ${url}`)
	)();
};

const extendMethodsNames = () => {
	// urls.forEach(changeLength);
	urls.forEach(methodUnify);
};
export { extendMethodsNames };

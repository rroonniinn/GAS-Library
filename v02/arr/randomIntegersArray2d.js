import { randomIntegersArray } from './randomIntegersArray';

const randomIntegersArray2d = (rows, cols) => {
	const arr = [];
	while (arr.length < rows) {
		arr.push(randomIntegersArray(cols, 0, 1000, false, false, false));
	}
	return arr;
};
export { randomIntegersArray2d };

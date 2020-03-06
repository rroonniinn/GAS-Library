import { letterToColumn } from './letterToColumn';

const getColAndRowFromCellAsNum = str => {
	const regExRes = /(([A-Z]+)([0-9]+?)):/.exec(str);
	if (!regExRes) {
		throw new TypeError(
			`Not valid string to "getColAndRowFromCellAsNum".
			Expected something like "A3:B4", got ${str}`
		);
	}
	return { col: letterToColumn(regExRes[2]), row: Number(regExRes[3]) };
};
export { getColAndRowFromCellAsNum };

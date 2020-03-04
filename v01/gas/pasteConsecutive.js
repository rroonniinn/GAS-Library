import { getSheet } from './getSheet';
import { paste } from './paste';

const pasteConsecutive = (sheet, col, arr) => {
	const sheetObj = typeof sheet === 'object' ? sheet : getSheet(sheet);

	const lastRow = sheet.getRange(`${col}:${col}`).getLastRow();
	paste();

	//
};

export { pasteConsecutive };

import { getCurrentCell } from './gas/getCurrentCell';
import { getCurrentSheet } from './gas/getCurrentSheet';
import { getCurrentSheetAndCell } from './gas/getCurrentSheetAndCell';
import { getDateAsSimpleStr } from './time/getDateAsSimpleStr';

export const v01 = {
	gas: {
		getCurrentCell,
		getCurrentSheet,
		getCurrentSheetAndCell,
	},
	time: {
		getDateAsSimpleStr,
	},
};

import { first } from './arr/first';
import { getHeaderColumns } from './arr/getHeaderColumns';
import { pipe } from './fp/pipe';
import { getSheet } from './gas/getSheet';
import { setProps } from './gas/properties';
import { getDaysDiff } from './time/getDaysDiff';
import { getDateAfter } from './time/getDateAfter';
import { cont } from './utils/cont';
import { RET } from './utils/customReturn';
import { isEmpty } from './utils/isEmpty';

export const v02 = {
	arr: {
		first,
		getHeaderColumns,
	},
	utils: {
		RET,
		cont,
		isEmpty,
	},
	gas: {
		getSheet,
		setProps,
	},
	fp: {
		pipe,
	},
	time: {
		getDaysDiff,
		getDateAfter,
	},
};

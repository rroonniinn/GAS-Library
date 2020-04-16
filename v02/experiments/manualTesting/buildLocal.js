import { buildLocal as fn } from '../buildLocal';
import { EXP_SETUP } from './config';

const buildLocal = {
	a1: () => fn(false)(EXP_SETUP),
};

export { buildLocal };

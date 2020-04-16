import { buildLocal as fn } from '../buildLocal';
import { EXP_SETUP } from './config';

const buildLocal = {
	a1: () => fn(EXP_SETUP, false),
};

export { buildLocal };

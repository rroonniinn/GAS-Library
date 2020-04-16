import { buildStructure as fn } from '../buildStructure';
import { EXP_SETUP } from './config';

const buildStructure = {
	a1: () => fn(EXP_SETUP, false),
};

export { buildStructure };

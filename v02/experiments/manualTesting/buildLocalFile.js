import { buildLocalFile as fn } from '../buildLocalFile';
import { EXP_SETUP } from './config';

const buildLocalFile = {
	a1: () => fn(EXP_SETUP, false),
};

export { buildLocalFile };

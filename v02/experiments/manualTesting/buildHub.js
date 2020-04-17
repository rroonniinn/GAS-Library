import { buildHub as fn } from '../buildHub';
import { getFolder } from '../../gas/getFolder';

import { EXP_SETUP } from './config';

const url =
	'https://drive.google.com/drive/folders/1auxE9U0gpQOaU5oyobzFitiCA6zFWaHS';
const folder = () => getFolder(url);

const buildHub = {
	a1: () => fn(folder())(EXP_SETUP),
};

export { buildHub };

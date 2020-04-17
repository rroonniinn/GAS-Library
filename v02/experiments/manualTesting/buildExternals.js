import { buildExternals as fn } from '../buildExternals';
import { getFolder } from '../../gas/getFolder';

import { EXP_SETUP } from './config';

const url =
	'https://drive.google.com/drive/folders/1g7wQ77tKi_ErC47qWkYNoUo5rk4yzJpa';
const folder = () => getFolder(url);

const buildExternals = {
	a1: () => fn(folder())(EXP_SETUP),
};

export { buildExternals };

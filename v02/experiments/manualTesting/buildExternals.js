import { buildExternals as fn } from '../buildExternals';
import { EXP_SETUP } from './config';
import { getFolder } from '../../gas/getFolder';

const url =
	'https://drive.google.com/drive/folders/1g7wQ77tKi_ErC47qWkYNoUo5rk4yzJpa';
const folder = getFolder(url);

const buildExternals = {
	a1: () => fn(EXP_SETUP)(folder),
};

export { buildExternals };

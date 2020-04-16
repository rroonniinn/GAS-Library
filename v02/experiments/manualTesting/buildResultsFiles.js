import { buildResultsFiles as fn } from '../buildResultsFiles';
import { getIdFromUrl } from '../../gas/getIdFromUrl';
import { EXP_SETUP } from './config';

/**
 * Url z katalogiem:
 */
const url =
	'https://drive.google.com/drive/folders/1gngeZlFt-Jd0yyeeZDCl3M1UAssKRqk7';

const folder = () => DriveApp.getFolderById(getIdFromUrl(url));

const buildResultsFiles = {
	a1: () => fn(folder())(EXP_SETUP),
};

export { buildResultsFiles };

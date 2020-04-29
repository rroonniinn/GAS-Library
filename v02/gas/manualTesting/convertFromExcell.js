import { convertFromExcell as fn } from '../convertFromExcell';

/**
 * Tego nie sprawdzam przez QUnit, bo za dużo roboty
 * z setupem testu. Te testy należy wykonać manualnie
 */
const a =
	'https://drive.google.com/drive/folders/1z0GZpm4hk8142RQG4nIInuSbzs3ALENu';

const convertFromExcell = {
	a1: () => fn(a),
};

export { convertFromExcell };

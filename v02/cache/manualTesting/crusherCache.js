import { crusherCache as obj } from '../crusherCache';
import { disp } from '../../../v01/gas/disp';

/**
 * Tego nie sprawdzam przez QUnit, bo za dużo roboty
 * z setupem testu. Te testy należy wykonać manualnie
 * -
 */

const crusherCache = {
	a1: () => obj.put('testA', 'Jakaś wartość'),
	b1: () => disp(obj.get('testA')),
};

export { crusherCache };

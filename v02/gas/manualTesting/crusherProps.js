import { crusherProps as obj } from '../properties';
import { randomIntegersArray2d } from '../../arr/randomIntegersArray2d';
import { disp } from '../../../v01/gas/disp';

/**
 * Tego nie sprawdzam przez QUnit, bo za dużo roboty
 * z setupem testu. Te testy należy wykonać manualnie
 */

const bigData = randomIntegersArray2d(1000, 20);
const smallData = randomIntegersArray2d(2, 2);

const crusherProps = {
	a1: () => obj.put('testA', bigData),
	a2: () => obj.put('testA', smallData),
	b1: () => disp(obj.get('testA')),
};

export { crusherProps };

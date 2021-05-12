import {
	crusherCache as obj,
	getCache,
	setCache,
	delCache,
} from '../crusherCache';
import { disp } from '../../../v01/gas/disp';

/**
 * Tego nie sprawdzam przez QUnit, bo za dużo roboty
 * z setupem testu. Te testy należy wykonać manualnie
 * -
 */

const crusherCache = {
	a1: () => setCache('testA', 'Jakaś wartość'), // Wartość domyślna czasu
	a2: () => setCache('testA', 'Jakaś wartość', 0.5), // Krótka wartość - 30 sec
	b1: () => disp(getCache('testA')), // Odczyt z cache-a
	b2: () => disp(getCache('abc')), // Odczyt z cache-a klucza nieistniejącego
	c1: () => delCache('testA'), // Usunięcie z cache-a
	// @ts-ignore
	c2: () => delCache(), // Usunięcie z cache-a bez wskazania klucza
	c3: () => delCache('abc'), // Usunięcie z cache-a nieistniejącego klucza
	d1: () => setCache('testA', 'Zmodyfikowana wartość'), // Nadpisanie istniejącego klucza
};

export { crusherCache };

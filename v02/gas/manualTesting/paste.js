import { paste as fn } from '../paste';
import { getIdFromUrl } from '../getIdFromUrl';

/**
 * Tego nie sprawdzam przez QUnit, bo za dużo roboty
 * z setupem testu. Te testy należy wykonać manualnie
 * i sprawdzić czy kolumny się sortują odpowiednio.
 * Przy okazji sprawdzam czy przekazywany jest dalej
 * sam obiket arkusza (ustawiam kolor tabów na czerwono)
 * Plik z testem jest tu: https://docs.google.com/spreadsheets/d/1I7JCxsEJKvdPsoI_5MxvYhRWKoJSRgHYzAe73xNUrEM/edit#gid=853409013
 *
 * W historii zmian jest snapshot od którego należy zacząć (przywraca
 * początkowy stan pól). Zwie się: 'Przygotowanie do testu'
 */

const url =
	'https://docs.google.com/spreadsheets/d/1K9_jdL_h7eff_M-9zxsB9fm3DUPt3Kyo9JJmaTE5QlI/edit#gid=0';
const id = getIdFromUrl(url);
const file = SpreadsheetApp.openById(id);
const s = sheetName => file.getSheetByName(sheetName);

const data = s('Source')
	.getDataRange()
	.getValues();

const t01 = s('t01');

const paste = {
	a1: () => fn(t01, 'B2', data).setTabColor('red'), // Zwykłe wklejenie w B2
	a2: () => fn(t01, 'B', data), // Względne wklejenie do B
	a3: () => fn(t01, '3', data), // Względne wklejenie do 3 wiersza
	a4: () => fn(t01, 'A', data), // Względne wklejenie do kolumny A (powinen usunać wszystko inne)
};

export { paste };

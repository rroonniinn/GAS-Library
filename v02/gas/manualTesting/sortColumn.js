import { sortColumn as fn } from '../sortColumn';
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
	'https://docs.google.com/spreadsheets/d/1I7JCxsEJKvdPsoI_5MxvYhRWKoJSRgHYzAe73xNUrEM/edit#gid=853409013';
const id = getIdFromUrl(url);
const file = SpreadsheetApp.openById(id);
const s = sheetName => file.getSheetByName(sheetName);

const sheetNoHeader = s('a');
const sheetHeader = s('b');

const sortColumn = {
	a1: () => fn(sheetNoHeader, 1, 'az').setTabColor('red'), // Kolumna A posortowana od A - Z (arkusza a)
	a2: () => fn(sheetNoHeader, 'A', 'za').setTabColor('red'), // Kolumna A posortowana od Z - A (arkusza a)
	a3: () => fn(sheetNoHeader, 2, 'asc').setTabColor('red'), // Kolumna B posortowana od A - Z (arkusza a)
	a4: () => fn(sheetNoHeader, 2, 'des').setTabColor('red'), // Kolumna B posortowana od Z - A (arkusza a)
	a5: () => fn(sheetNoHeader, 2).setTabColor('red'), // Kolumna B posortowana od A - Z (brak parametru) (arkusza a)

	b1: () => fn(sheetHeader, 1, 'az').setTabColor('red'), // Kolumna A posortowana od A - Z (arkusza b)
	b2: () => fn(sheetHeader, 'A', 'za').setTabColor('red'), // Kolumna A posortowana od Z - A (arkusza b)
	b3: () => fn(sheetHeader, 2, 'asc').setTabColor('red'), // Kolumna B posortowana od A - Z (arkusza b)
	b4: () => fn(sheetHeader, 2, 'des').setTabColor('red'), // Kolumna B posortowana od Z - A (arkusza b)

	// Inne - powinno być bezbłedów
	e1: () => fn(sheetNoHeader, 4, 'des').setTabColor('red'), // Kolumna poza zakresem (arkusza a)

	// Error - powinno wyrzucić bład
	e2: () => fn(sheetNoHeader, 1, true).setTabColor('red'), // Błędny parametr - true - (sort) (arkusza a)
	e3: () => fn(sheetNoHeader, 1, 'dsdsds').setTabColor('red'), // Błędny parametr - dsdsds - (sort) (arkusza a)
	e4: () => fn(sheetNoHeader, '1', 'az').setTabColor('red'), // Błędny parametr - '1' - (col) (arkusza a)
	e5: () => fn(sheetNoHeader, 'A3', 'az').setTabColor('red'), // Błędny parametr - A3 - (col) (arkusza a)
	e6: () => fn(sheetNoHeader, 'A3:B5', 'az').setTabColor('red'), // Błędny parametr - A3:B5 - (col) (arkusza a)
};

export { sortColumn };

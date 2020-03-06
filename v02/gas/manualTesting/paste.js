import { paste as fn } from '../paste';
import { getIdFromUrl } from '../getIdFromUrl';

/**
 * Tego nie sprawdzam przez QUnit, bo za dużo roboty
 * z setupem testu. Te testy należy wykonać manualnie.
 *
 *
 *
 * Plik z testem jest tu: https://docs.google.com/spreadsheets/d/1I7JCxsEJKvdPsoI_5MxvYhRWKoJSRgHYzAe73xNUrEM/edit#gid=853409013
 * Stan starowy pliku w histori zmian: 'Przygotowanie do testu'
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
const t02 = s('t02'); // header
const t03 = s('t03'); // filter
const t04 = s('t04'); // sort
const t05 = s('t05'); // clear
const t06 = s('t06'); // remove empties

const optA = {
	notRemoveFilers: true,
};

const optB = {
	sort: 1,
};

const optC = {
	sort: 'B',
};

// const optD = { Error
// 	sort: '1',
// };

const optE = {
	sort: 'A',
	sortOrder: 'za',
};

const optF = {
	sort: 'B',
	sortOrder: 'des',
};

const optG = {
	restrictCleanup: 'down',
};
const optH = {
	restrictCleanup: 'right',
};
const optI = {
	restrictCleanup: 'preserve',
};
const optJ = {
	notRemoveEmptys: true,
};

const paste = {
	/**  Test zakresów przekazanych przez usera
	 * ----------------------------------------
	 *
	 * Ustawienia domyślne:
	 * * usuwa istniejące filtry
	 * * nie sortuje
	 * * usuwa istniejące dane na prawo i w doł od lewego górnego rogu
	 * * usuwa puste wiersze i kolumny
	 */

	a1: () => fn(t01, 'A', data), // Względne - pierwsza kolumna (A)
	a2: () => fn(t01, 'B', data), // Względne - środkowa kolumna (B)
	a3: () => fn(t01, 'D', data), // Względne - ostatnia kolumna (D)
	a4: () => fn(t01, 'F', data), // Względne - kolumny poza zakresem (F)

	b1: () => fn(t01, 1, data), // Względne - pierwszy wiersz (1)
	b2: () => fn(t01, 2, data), // Względne - środkowy wiersz (2)
	b3: () => fn(t01, 4, data), // Względne - ostatni wiersz (4)
	b4: () => fn(t01, 7, data), // Względne - wiersza poza zakresem (7)
	b5: () => fn(t01, '1', data), // Względne - wiersz jako string ('1')

	c1: () => fn(t01, 'A1', data), // Bezwzględne do A1
	c2: () => fn(t01, 'B2', data), // Bezwzględne do B2
	c3: () => fn(t01, 'D4', data), // Bezwzględne D4
	c4: () => fn(t01, 'F6', data), // Bezwzględne poza zakresem F6

	// Fallback - Przekazanie zakresu poza pierwszą komórką
	ea1: () => fn(t01, 'A1:B2', data), // Przekazanie pełnego zakresu (A1:B2)
	ea2: () => fn(t01, 'A1:B', data), // Przekazanie pełnego zakresu (A1:B)
	ea3: () => fn(t01, 'A1:2', data), // Przekazanie pełnego zakresu (A1:2)

	/**  Jak wyżej ale w arkuszu w którym są zamrożone komówki (header)
	 * ----------------------------------------
	 *
	 * Ustawienia domyślne:
	 * * usuwa istniejące filtry
	 * * nie sortuje
	 * * usuwa istniejące dane na prawo i w doł od lewego górnego rogu
	 * * usuwa puste wiersze i kolumny
	 */

	d1: () => fn(t02, 'A', data), // Względne - pierwsza kolumna (A)
	d2: () => fn(t02, 'B', data), // Względne - środkowa kolumna (B)
	d3: () => fn(t02, 'D', data), // Względne - ostatnia kolumna (D)
	d4: () => fn(t02, 'F', data), // Względne - kolumny poza zakresem (F)

	e1: () => fn(t02, 1, data), // Względne - pierwszy wiersz (1)
	e2: () => fn(t02, 2, data), // Względne - środkowy wiersz (2)
	e3: () => fn(t02, 4, data), // Względne - ostatni wiersz (4)
	e4: () => fn(t02, 7, data), // Względne - wiersza poza zakresem (7)
	e5: () => fn(t02, '1', data), // Względne - wiersz jako string ('1')

	f1: () => fn(t02, 'A1', data), // Bezwzględne do A1
	f2: () => fn(t02, 'B2', data), // Bezwzględne do B2
	f3: () => fn(t02, 'D4', data), // Bezwzględne D4
	f4: () => fn(t02, 'F6', data), // Bezwzględne poza zakresem F6

	/**  Nie usuwanie filtrów - ciekawe... Wygląda na to, że mimo filtrów
	 * wkleja tak jak należy (a do tego utrzymuje filtry!)
	 * ----------------------------------------
	 *
	 * Ustawienia domyślne:
	 * * nie usuwa istniejące filtry
	 * * nie sortuje
	 * * usuwa istniejące dane na prawo i w doł od lewego górnego rogu
	 * * usuwa puste wiersze i kolumny
	 */

	g1: () => fn(t03, 'A', data, optA), // Filter on - Wzgl - pierwsza kolumna (A)
	g2: () => fn(t03, 'E', data, optA), // Filter on - Wzgl - ostatnia kolumna (E)
	g3: () => fn(t03, 1, data, optA), // Filter on - Wzgl - pierwszy wiersz (1)
	g4: () => fn(t03, 7, data, optA), // Filter on - Wzgl - wiersza poza zakresem (7)
	g5: () => fn(t03, 'A1', data, optA), // Filter on - Bezwzgl do A1
	g6: () => fn(t03, 'F6', data, optA), // Filter on - Bezwzgl do F6

	/**  Sortowanie
	 * W przypadku istnienia headerów - ich nie soruje - bardzo dobrze
	 * ----------------------------------------
	 *
	 * Ustawienia domyślne:
	 * * usuwa istniejące filtry
	 * * sortuje
	 * * usuwa istniejące dane na prawo i w doł od lewego górnego rogu
	 * * usuwa puste wiersze i kolumny
	 */

	h1: () => fn(t04, 'A', data, optB), // Sort 1 - pierwsza kolumna (A)
	h2: () => fn(t04, 'A', data, optC), // Sort B - pierwsza kolumna (A)
	h3: () => fn(t04, 'A', data, optE), // Sort 'A', order 'za' - pierwsza kolumna (A)
	h4: () => fn(t04, 'A', data, optF), // Sort 'B', order 'des' - pierwsza kolumna (A)

	/**  RestrictCleanup
	 *
	 * ----------------------------------------
	 *
	 * Ustawienia domyślne:
	 * * usuwa istniejące filtry
	 * * nie sortuje
	 * * usuwa dane w zależności od ustawień
	 * * usuwa puste wiersze i kolumny
	 */

	i1: () => fn(t05, 'A', data, optG), // Clean 'down' - pierwsza kolumna (A)
	i2: () => fn(t05, 'A', data, optH), // Clean 'right' - pierwsza kolumna (A)
	i3: () => fn(t05, 'A', data, optI), // Clean 'preserve' - pierwsza kolumna (A)

	i4: () => fn(t05, '2', data, optG), // Clean 'down' - drugi wiersz (2)
	i5: () => fn(t05, '2', data, optH), // Clean 'right' - drugi wiersz (2)
	i6: () => fn(t05, '2', data, optI), // Clean 'preserve' - drugi wiersz (2)

	i7: () => fn(t05, 'A3', data, optG), // Clean 'down' - A3
	i8: () => fn(t05, 'A3', data, optH), // Clean 'right' - A3
	i9: () => fn(t05, 'A3', data, optI), // Clean 'preserve' - A3

	/**  notRemoveEmpties
	 *
	 * ----------------------------------------
	 *
	 * Ustawienia domyślne:
	 * * usuwa istniejące filtry
	 * * nie sortuje
	 * * usuwa istniejące dane na prawo i w doł od lewego górnego rogu
	 * * nie usuwa pustych komórek / wierszy
	 */

	j1: () => fn(t06, 'A', data, optJ), // Nie usuwa empties - pierwsza kolumna (A)
	j2: () => fn(t06, '2', data, optJ), // Nie usuwa empties - drugi wiersz (2)
	j3: () => fn(t06, 'A3', data, optJ), // Nie usuwa empties - A3
};

export { paste };

import { getSheet } from '../getSheet';
import { pasteS as fn } from '../pasteS';

/**
 * Tego nie sprawdzam przez QUnit, bo za dużo roboty
 * z setupem testu. Te testy należy wykonać manualnie.

 */

const url =
	'https://docs.google.com/spreadsheets/d/1DaT9es2rmKWPDHAvjHGJpFJLsT59SaPbUV9P5zSCUas/edit#gid=0';

const s = sheetName => getSheet(sheetName, url);

const data = () =>
	s('Source')
		.getDataRange()
		.getValues();

const t01 = () => s('t01');
const t02 = () => s('t02'); // header
const t03 = () => s('t03'); // filter
const t04 = () => s('t04'); // sort
const t05 = () => s('t05'); // clear
const t06 = () => s('t06'); // remove empties

const optG = {
	cleanup: 'down',
};
const optH = {
	cleanup: 'right',
};
const optI = {
	cleanup: 'everything',
};
const optJ = {
	removeBlanks: true,
};

const pasteS = {
	/**  Test zakresów przekazanych przez usera
	 * ----------------------------------------
	 *
	 * Zachowanie domyślne:
	 * * nie usuwa żadnych danych istniejących
	 * * nie usuwa pozostałych po wklejeniu pustych wierszy i kolumn
	 */

	a1: () => fn(t01(), 'A', data()), // Względne - pierwsza kolumna (A)
	a2: () => fn(t01(), 'B', data()), // Względne - środkowa kolumna (B)
	a3: () => fn(t01(), 'D', data()), // Względne - ostatnia kolumna (D)
	a4: () => fn(t01(), 'F', data()), // Względne - kolumny poza zakresem (F)

	b1: () => fn(t01(), 1, data()), // Względne - pierwszy wiersz (1)
	b2: () => fn(t01(), 2, data()), // Względne - środkowy wiersz (2)
	b3: () => fn(t01(), 4, data()), // Względne - ostatni wiersz (4)
	b4: () => fn(t01(), 7, data()), // Względne - wiersza poza zakresem (7)
	b5: () => fn(t01(), '1', data()), // Względne - wiersz jako string ('1')

	c1: () => fn(t01(), 'A1', data()), // Bezwzględne do A1
	c2: () => fn(t01(), 'B2', data()), // Bezwzględne do B2
	c3: () => fn(t01(), 'D4', data()), // Bezwzględne D4
	c4: () => fn(t01(), 'F6', data()), // Bezwzględne poza zakresem F6

	// Fallback - Przekazanie zakresu poza pierwszą komórką
	ea1: () => fn(t01(), 'A1:B2', data()), // Przekazanie pełnego zakresu (A1:B2)
	ea2: () => fn(t01(), 'A1:B', data()), // Przekazanie pełnego zakresu (A1:B)
	ea3: () => fn(t01(), 'A1:2', data()), // Przekazanie pełnego zakresu (A1:2)

	/**  Jak wyżej ale w arkuszu w którym są zamrożone komówki (header)
	 * ----------------------------------------
	 *
	 * Zachowanie domyślne:
	 * * nie usuwa żadnych danych istniejących
	 * * nie usuwa pozostałych po wklejeniu pustych wierszy i kolumn
	 */

	d1: () => fn(t02(), 'A', data()), // Względne - pierwsza kolumna (A)
	d2: () => fn(t02(), 'B', data()), // Względne - środkowa kolumna (B)
	d3: () => fn(t02(), 'D', data()), // Względne - ostatnia kolumna (D)
	d4: () => fn(t02(), 'F', data()), // Względne - kolumny poza zakresem (F)

	e1: () => fn(t02(), 1, data()), // Względne - pierwszy wiersz (1)
	e2: () => fn(t02(), 2, data()), // Względne - środkowy wiersz (2)
	e3: () => fn(t02(), 4, data()), // Względne - ostatni wiersz (4)
	e4: () => fn(t02(), 7, data()), // Względne - wiersza poza zakresem (7)
	e5: () => fn(t02(), '1', data()), // Względne - wiersz jako string ('1')

	f1: () => fn(t02(), 'A1', data()), // Bezwzględne do A1
	f2: () => fn(t02(), 'B2', data()), // Bezwzględne do B2
	f3: () => fn(t02(), 'D4', data()), // Bezwzględne D4
	f4: () => fn(t02(), 'F6', data()), // Bezwzględne poza zakresem F6

	/**  RestrictCleanup
	 *
	 * ----------------------------------------
	 *
	 * Ustawienia domyślne:
	 * * usuwa istniejące dane w zależności od ustawień
	 * * nie usuwa pozostałych po wklejeniu pustych wierszy i kolumn
	 */

	i1: () => fn(t05(), 'A', data(), optG), // Clean 'down' - pierwsza kolumna (A)
	i2: () => fn(t05(), 'A', data(), optH), // Clean 'right' - pierwsza kolumna (A)
	i3: () => fn(t05(), 'A', data(), optI), // Clean 'everything' - pierwsza kolumna (A)

	i4: () => fn(t05(), '2', data(), optG), // Clean 'down' - drugi wiersz (2)
	i5: () => fn(t05(), '2', data(), optH), // Clean 'right' - drugi wiersz (2)
	i6: () => fn(t05(), '2', data(), optI), // Clean 'everything' - drugi wiersz (2)

	i7: () => fn(t05(), 'A3', data(), optG), // Clean 'down' - A3
	i8: () => fn(t05(), 'A3', data(), optH), // Clean 'right' - A3
	i9: () => fn(t05(), 'A3', data(), optI), // Clean 'everything' - A3

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

	j1: () => fn(t06(), 'A', data(), optJ), // Nie usuwa empties - pierwsza kolumna (A)
	j2: () => fn(t06(), '2', data(), optJ), // Nie usuwa empties - drugi wiersz (2)
	j3: () => fn(t06(), 'A3', data(), optJ), // Nie usuwa empties - A3
};

export { pasteS };

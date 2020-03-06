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

	a5: () => fn(t01, 'B2', data), // Zwykłe wklejenie w B2

	// Errors / Fallback:
	// Przekazanie zakresu poza pierwszą komórką
	ea1: () => fn(t01, 'A1:B2', data), // Przekazanie pełnego zakresu (A1:B2)
	ea2: () => fn(t01, 'A1:B', data), // Przekazanie pełnego zakresu (A1:B)
	ea3: () => fn(t01, 'A1:2', data), // Przekazanie pełnego zakresu (A1:2)
};

export { paste };

/**
 * BUGI:
 * - jeśli odpala się względne (bezwzględne również) poza istniejącym
 * zakresem to czyści ostatni wiersz (jeśli względne wiersze) lub kolumnę
 * (jeśli względne kolumny) istniejących danych
 * Soluton: jeśli wymiary wypadają poza arkusz nie powinien dokonywać
 * czyszczenia (bo i tak nie ma tak jeszcze danych)
 *
 */

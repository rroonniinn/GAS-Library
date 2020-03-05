import { clearContent as fn } from '../clearContent';
import { getIdFromUrl } from '../getIdFromUrl';

/**
 * Tego nie sprawdzam przez QUnit, bo za dużo roboty
 * z setupem testu. Te testy należy wykonać manualnie
 * i spradzić czy pola zaznaczone na pomarańczowo zostały
 * pozbawione treści. Przy okazji sprawdzam czy przekazywany jest dalej
 * sam obiket arkusza (ustawiam kolior tabów na czerwono)
 * Plik z testem jest tu: https://docs.google.com/spreadsheets/d/1svsSi_EWG2HVW2nGTuvzB9aaxLAnS8Ur9H7Qlpx0eCo/edit#gid=463786433
 *
 * W historii zmian jest snapshot od którego należy zacząć (przywraca
 * początkowy stan pól). Zwie się: 'Przygotowanie do testu'
 */

const clearContent = () => {
	const url =
		'https://docs.google.com/spreadsheets/d/1svsSi_EWG2HVW2nGTuvzB9aaxLAnS8Ur9H7Qlpx0eCo/edit#gid=1740330035';
	const id = getIdFromUrl(url);

	const file = SpreadsheetApp.openById(id);
	const s = sheetName => file.getSheetByName(sheetName);

	const a1 = 'A'; // -> 'A2:J'
	const a2 = 'B'; // -> 'B3:J'
	const a3 = 'I'; // -> 'I10:J'
	const a4 = 'J'; // -> 'J11:J' - Został dodany dodatkowy wiersz na dole (11 - ty)
	const a5 = 'C'; // -> 'C1:J'
	const a6 = 1; // -> 'B1:10'
	const a7 = 2; // -> 'C2:10'
	const a8 = 3; // -> 'A3:10'
	const a9 = 9; // -> 'J9:10'
	const a10 = 10; // -> 'K10:10' - Została dodana dodatkowa kolumna (K)
	const a11 = 'B1'; // -> 'B1:J'
	const a12 = 'C4'; // -> 'C4:J'
	const a13 = 'A1'; // -> 'A1:J'
	const a14 = 'E10'; // -> 'E10:J'
	const a15 = 'J10'; // -> 'J10:J'
	const a16 = 'K11'; // zakres poza arkuszem -> 'K11:K' - Dodała się kolumna (K) i wiers (11)
	const a17 = 'C3:E5'; // -> 'C3:E5'
	const a18 = 'H8:K11'; // zakres poza arkuszem -> 'H8:K11' ? -  Dodała się kolumna (K) i wiers (11)

	fn(s('a1'), a1).setTabColor('red');
	fn(s('a2'), a2).setTabColor('red');
	fn(s('a3'), a3).setTabColor('red');
	fn(s('a4'), a4).setTabColor('red');
	fn(s('a5'), a5).setTabColor('red');
	fn(s('a6'), a6).setTabColor('red');
	fn(s('a7'), a7).setTabColor('red');
	fn(s('a8'), a8).setTabColor('red');
	fn(s('a9'), a9).setTabColor('red');
	fn(s('a10'), a10).setTabColor('red');
	fn(s('a11'), a11).setTabColor('red');
	fn(s('a12'), a12).setTabColor('red');
	fn(s('a13'), a13).setTabColor('red');
	fn(s('a14'), a14).setTabColor('red');
	fn(s('a15'), a15).setTabColor('red');
	fn(s('a16'), a16).setTabColor('red');
	fn(s('a17'), a17).setTabColor('red');
	fn(s('a18'), a18).setTabColor('red');
};

export { clearContent };

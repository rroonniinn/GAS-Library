/* eslint-disable max-lines */
// const $ = {
// 	currentFile: SpreadsheetApp.getActive(),
// 	sheets: SpreadsheetApp.getActive().getSheets(),
// 	activeSheet: SpreadsheetApp.getActiveSheet(),

// 	toast(msg, tittle = 'Alert') {
// 		// Wyświetlanie komunikatu
// 		this.currentFile.toast(msg, tittle);
// 	},
// 	// Wyświetla Browser.msg DONE
// 	alert(val) {
// 		Browser.msgBox(String(val));
// 	},
// 	getSheetByName(name) {
// 		return this.currentFile.getSheetByName(name);
// 	},
// 	getSheetByIndex(i) {
// 		return this.sheets[i];
// 	},
// 	getSheetsNames(): string[] {
// 		// Tablica z nazwami arkuszy
// 		const arr = [];
// 		for (const sheet of this.sheets) {
// 			arr.push(sheet.getSheetName());
// 		}
// 		return arr;
// 	},
// 	addSheet(name: string) {
// 		// Dodawanie nowego arkusza
// 		this.getSheetsNames().indexOf(name) < 0
// 			? this.currentFile.insertSheet(name)
// 			: this.toast('Spreadsheet with this name already exist', 'Alert');
// 		return true;
// 	},
// 	getRangeInSheet(sheet, type) {
// 		// sheet - number - index arkusza
// 		// sheet - string - nazwa arkusza
// 		// type - total - cały zakres
// 		// type - data - tylko zakres danych
// 		// zwraca range

// 		const { sheets } = this;

// 		// error handling
// 		if (['number', 'string'].indexOf(typeof sheet) < 0) {
// 			throw `Wrong type of argument - ${typeof sheet} / Acceptable: 'number' or 'string'`;
// 		}
// 		if (['data', 'total'].indexOf(type) < 0) {
// 			throw `Wrong type of argument - ${typeof type} / Acceptable: 'data' or 'total'`;
// 		}

// 		if (typeof sheet === 'number' && sheet >= sheets.length) {
// 			throw `Index (${sheet}) to big`;
// 		} else if (typeof sheet === 'string' && this.getSheetsNames().indexOf(sheet) < 0) {
// 			throw `There is no '${sheet}' sheet within the spreadsheet`;
// 		}

// 		const thisSheet = typeof sheet === 'number' ? this.getSheetByIndex(sheet) : this.getSheetByName(sheet);

// 		if (type === 'data') {
// 			return thisSheet.getDataRange();
// 		}
// 		const maxRow = thisSheet.getMaxRows();
// 		const maxCol = thisSheet.getMaxColumns();
// 		return thisSheet.getRange(1, 1, maxRow, maxCol);
// 	},
// 	getTotalRangeIn(sheet) {
// 		return this.getRangeInSheet(sheet, 'total');
// 	},
// 	getDataRangeIn(sheet) {
// 		return this.getRangeInSheet(sheet, 'data');
// 	},
// 	// zamiana zwkłej tablicy w 2D
// 	arr1Dto2D(arr, plane = 'ver') {
// 		// plane - ver (pionow), hor (poziomo)
// 		if (plane === 'ver') {
// 			return arr.reduce((newArr, cell) => {
// 				newArr.push([cell]);
// 				return newArr;
// 			}, []);
// 		}
// 		return arr.reduce(
// 			(newArr, cell) => {
// 				newArr[0].push(cell);
// 				return newArr;
// 			},
// 			[[]]
// 		);
// 	},
// 	// zamiana tablicy 2D na 1D (flat)
// 	arr2Dto1D(arr) {
// 		return arr.reduce((arr, row) => arr.concat(row));
// 	},
// 	// funkcja zameinająca nagłówek (np. A) ma numer kolumny (np. 1) DONE
// 	// src: https://stackoverflow.com/questions/21229180/convert-column-index-into-corresponding-column-letter/21231012#21231012
// 	letterToColumn(letter) {
// 		let column = 0;
// 		const { length } = letter;
// 		for (let i = 0; i < length; i++) {
// 			column += (letter.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
// 		}
// 		return column;
// 	},
// 	// Zamiana numeru kolumny na literę
// 	// https://stackoverflow.com/questions/21229180/convert-column-index-into-corresponding-column-letter
// 	columnToLetter(column) {
// 		let temp;
// 		let letter = '';
// 		while (column > 0) {
// 			temp = (column - 1) % 26;
// 			letter = String.fromCharCode(temp + 65) + letter;
// 			column = (column - temp - 1) / 26;
// 		}
// 		return letter;
// 	},
// 	// wklejenie tablicy 2D ******** DONE
// 	paste(sheet, col, row, arr) {
// 		// sheet - nazwa arkusza str lub arkusz jako obiekt
// 		// col - lewa kolumna zakresu - string np. 'A'
// 		// row - wiersz lewego górnego zakresu do wklejenia
// 		// arr - tablica 2D
// 		const colNumber = this.letterToColumn(col);
// 		const sheetObj = typeof sheet === 'object' ? sheet : $.getSheetByName(sheet);
// 		const range = sheetObj.getRange(row, colNumber, arr.length, arr[0].length);
// 		range.setValues(arr);
// 		return true;
// 	},
// 	// Usuwa puste wiersze i kolumny (na razie nie działa na Arrayformula)
// 	removeEmptyRowCol(sheet) {
// 		/*
// 			sheet - obiekt arkusza
// 		*/

// 		const maxDataRow = sheet.getLastRow();
// 		const maxTotalRow = sheet.getMaxRows();
// 		const rowDif = maxTotalRow - maxDataRow;

// 		const maxDataColumn = sheet.getLastColumn();
// 		const maxTotalColumn = sheet.getMaxColumns();
// 		const colDif = maxTotalColumn - maxDataColumn;

// 		if (rowDif > 0) sheet.deleteRows(maxDataRow + 1, rowDif);
// 		if (colDif > 0) sheet.deleteColumns(maxDataColumn + 1, colDif);
// 	},
// 	copySheetToFile(
// 		sourceFile, // {} - obiekt - plik z którego kopujemy
// 		sheetToCypy: string, // string - nazwa arkusza do skopiowania
// 		targetFile, // {} - obiekt - plik do którego kopujemy
// 		replace: boolean, // boolean - co ma robić jeśli arkusz o takiej nazwie już istnieje - true ma go zamnieć, false ma nie kopiować / nie zmienać
// 		newSheetIndex = 0 // number - pozycja na której ma się znależć nowy arkusz - jeśłi nie podana będzie na końcu
// 	) {
// 		// 1. Czy taki arkusz już istnieje?
// 		const sheetsInTarget = targetFile.getSheets().map(sheet => sheet.getName()); // Pobieramy nazwy arkuszy istniejących
// 		const existing: number = sheetsInTarget.indexOf(sheetToCypy); // Sprawdzmy potencjalńą pozycję arkusza
// 		if (existing > -1 && replace === true) targetFile.deleteSheet(targetFile.getSheetByName(sheetToCypy)); // Usuń arkusz
// 		if (existing > -1 && replace === false) return false; // wyjdz z funkcji

// 		// 2. Skopiuj i umieść w odpowiednim miejscu
// 		if (sourceFile.getSheetByName(sheetToCypy) == null) {
// 			throw 'W pliku źródłowym brak arkusza o podanej nazwie';
// 		}
// 		sourceFile
// 			.getSheetByName(sheetToCypy)
// 			.copyTo(targetFile)
// 			.setName(sheetToCypy)
// 			.activate(); // czynienie aktywnym aby przesunąć go na wybraną pozycję

// 		if (newSheetIndex > 0) {
// 			targetFile.moveActiveSheet(newSheetIndex);
// 		}
// 		return true;
// 	},
// 	/**
// 	 * Aplikuje zasadę dataValidation w oparciu o dane w postaci tablicy
// 	 * @param {object} sheet - Obiekt arkusza do którego ma zostać dodana walidacja.
// 	 * @param {string} range - Range (adres) komórki do której ma być dodana walidacj (np. A1)
// 	 * @param {arr} arr - tablica 1D z pozycjami dostępnymi w dropdownei walidowanej komórki.
// 	 */
// 	applyDataValidation(sheet, range, arr) {
// 		sheet.getRange(range).setDataValidation(
// 			SpreadsheetApp.newDataValidation()
// 				.requireValueInList(arr)
// 				.build()
// 		);
// 	},
// 	// Metody dla dat
// 	Date: {
// 		// Zwraca obiekt daty ustawiony na 1 dzień miesiąca w którym wypada przekazana w argumencie data (nie mutuje przekaznego argumentu)
// 		getFirstDay(dateObj) {
// 			// dateObj - obiekt daty
// 			return new Date(dateObj.getFullYear(), dateObj.getMonth(), 1);
// 		},
// 		// Zwraca obiekt daty ustawiony na ostatni dzień miesiąca w którym wypada przekazana w argumencie data (nie mutuje przekaznego argumentu)
// 		getLastDay(dateObj) {
// 			// dateObj - obiekt daty
// 			return new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0);
// 		},
// 		// Zwraca datę przesuniętą o liczbę dni wskazaną w argumencie
// 		getDateAfter(date, days) {
// 			// date - zarówno obiekt daty jak i string np. "2019-01-01"
// 			const result = new Date(date);
// 			result.setDate(result.getDate() + days);
// 			return result;
// 		},
// 		// Zwraca różnicę w dniach między dwoma datami
// 		getDaysDiff(a, b) {
// 			// a, b - zarówno obiekt daty jak i string np. "2019-01-01"
// 			const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// 			// weryfikacja czy a,b to stringi czy obiekty
// 			const dateA = typeof a === 'object' ? a : new Date(a);
// 			const dateB = typeof b === 'object' ? b : new Date(b);

// 			// Discard the time and time-zone information.
// 			const utc1 = Date.UTC(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
// 			const utc2 = Date.UTC(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());

// 			// Kolejność podawanych day bez znaczenia
// 			const timeDiff = Math.abs(utc2 - utc1);

// 			return Math.floor(timeDiff / _MS_PER_DAY);
// 		},
// 		// Zwraca liczbę dni w miesiącu z danego roku
// 		getDaysInMonth(year, month) {
// 			// month, year strings / month - 1 dla stycznia, 2 dla lutego itp.
// 			return new Date(year, month, 0).getDate();
// 		},
// 		// Zwraca boolean jeśli data jest dzisiejsza
// 		isToday(someDate) {
// 			const today = new Date();
// 			return (
// 				someDate.getDate() == today.getDate() &&
// 				someDate.getMonth() == today.getMonth() &&
// 				someDate.getFullYear() == today.getFullYear()
// 			);
// 		},
// 		// Zwraca prosty string daty z obeiktu np. 2019-2-20
// 		getSimpleStr(dateObj, connector = '-') {
// 			/*
// 				dateObj - object daty
// 				connector - str - łącznik pomniędzy elementami daty (np. -)
// 			*/
// 			const year = dateObj.getFullYear();
// 			const month = Number(dateObj.getMonth()) + 1;
// 			const day = dateObj.getDate();

// 			// Sprawdzymy ile znaków ma wynik i dodajemy 0 jeśli jeden (tylko dla liczb max dwucyfowych)
// 			function padding(number) {
// 				/*
// 					number - cyfra
// 				*/
// 				const str = String(number);
// 				if (str.length > 2) throw 'Liczba 3 cyfrowa nie wchodzi do teh funkcji!';
// 				const paddedStr = str.length > 1 ? str : '0'.concat(str);
// 				return paddedStr;
// 			}

// 			return `${year}${connector}${padding(month)}${connector}${padding(day)}`;
// 		},
// 	},
// 	// Metody dla stringów
// 	Str: {
// 		proper(str, opt = 0) {
// 			/*
// 				str - string
// 				opt - opcja, jeśli wpiszesz tam cokolwiek, to każda pierwsza litera wyrazu będzie duża = np. Jaś Ma Kota
// 			*/

// 			function capitalize(s) {
// 				return s.charAt(0).toUpperCase() + s.slice(1);
// 			}

// 			// Obsługa błędu
// 			if (typeof str !== 'string') return '';

// 			// Zamiana całości na lowercase
// 			const lower = str.toLowerCase();

// 			if (opt === 0) {
// 				// Standard: pierwsza litera stringu duża
// 				return capitalize(lower);
// 			}
// 			// Weryfikacja czy zdanie czy pojedyńczy wyraz
// 			if (lower.indexOf(' ') < 0) {
// 				return capitalize(lower);
// 			}
// 			const arr = lower.split(' ');
// 			const capitalizedArr = arr.map(word => capitalize(word));
// 			return capitalizedArr.join(' ');
// 		},
// 	},
// };

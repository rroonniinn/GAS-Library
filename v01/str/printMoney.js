/**
 * Zwraca string reprezentujący kwotę wraz z walutą - np. '34 342,02 zł'
 * Wzięte stąd: https://stackoverflow.com/questions/16637051/adding-space-between-numbers
 * @memberof Lib_Str
 * @param {number} number Kwota jako number
 * @param {string} [currency='zł'] Symbol waluty
 * @returns {string} Zmieniony string - np. '34 342,02 zł'
 */

const printMoney = (number, currency = 'zł') => {
	const realNumb = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	const realNumbPl = realNumb.replace('.', ',');
	return `${realNumbPl} ${currency}`;
};

export { printMoney };

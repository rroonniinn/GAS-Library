/**
 * Zwraca prosty string daty z obeiktu np. 2019-02-20
 *
 * @param {object|string} dateObj Obiekt daty lub string daty
 * @param {string} [connector='-'] Lącznik
 * @returns {string} np. 2019-02-20
 */

const getDateAsSimpleStr = (dateObj, connector = '-') => {
	/*
		dateObj - object daty
		connector - str - łącznik pomniędzy elementami daty (np. -)
	*/

	const date =
		typeof dateObj.getMonth === 'function'
			? dateObj
			: new Date(dateObj);

	const year = date.getFullYear();
	const month = String(Number(date.getMonth()) + 1);
	const day = String(date.getDate());

	return `${year}${connector}${month.padStart(
		2,
		'0'
	)}${connector}${day.padStart(2, '0')}`;
};

export { getDateAsSimpleStr };

/**
 * Zwraca boolean jeśli data jest dzisiejsza
 * @memberof Lib_Date
 *
 */

const isToday = someDate => {
	const today = new Date();
	return (
		someDate.getDate() === today.getDate() &&
		someDate.getMonth() === today.getMonth() &&
		someDate.getFullYear() === today.getFullYear()
	);
};
export { isToday };

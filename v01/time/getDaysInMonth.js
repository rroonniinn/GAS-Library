/**
 * Zwraca liczbę dni w miesiącu z danego roku
 * month, year strings / month - 1 dla stycznia, 2 dla lutego itp.
 * @memberof Lib_Date
 *
 * @returns {string} Data w odpwiednim formacie - np. 19.01.20
 */

const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();
export { getDaysInMonth };

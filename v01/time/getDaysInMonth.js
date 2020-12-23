/**
 * Zwraca liczbę dni w miesiącu z danego roku
 * month, year strings / month - 1 dla stycznia, 2 dla lutego itp.
 * @param {number} year
 * @param {number} month
 * @returns {number} Liczba dni we wskazanym miesiącu
 */

const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();
export { getDaysInMonth };

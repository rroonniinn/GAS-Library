/**
 * Zwraca true / false jako rezultat poprównania dwóch przekazanych obiektów dat
 *
 * @param {object} dateA Obiekt daty
 * @param {object} dateB Obiekt daty
 * @returns {boolean} True jeśli daty są takie same
 */
const areDatesEqual = (dateA, dateB) => dateA.toDateString() === dateB.toDateString();

export { areDatesEqual };

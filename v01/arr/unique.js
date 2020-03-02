/**
 * Zwraca tablice tylko unikatowych wartości
 * przyjmując tablicę z powtarzającymi się wartościami
 *
 * @param {Array} arr Tablica z powtarzającymi się wartościami
 * @returns {Array} Tablica tylko z unikatowymi wartościami (nie sortowana)
 */
const unique = arr => [...new Set(arr)];
export { unique };

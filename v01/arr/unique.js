/**
 * Zwraca tablice tylko unikatowych wartości
 * przyjmując tablicę z powtarzającymi się wartościami
 *
 * @param {array} arr Tablica 1D z powtarzającymi się wartościami
 * @returns {array} Tablica tylko z unikatowymi wartościami (nie sortowana)
 */

export const unique = arr => [...new Set(arr)];

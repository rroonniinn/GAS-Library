/**
 * Łączy dwie tablice w jedną składającą się z obu leżących obok siebie.
 * Obie muszą mieć taką samą wysokość. Zostawia jedną kolumnę przerwy
 * pomiędzy
 * @param {array[]} tableA
 * @param {array[]} tableB
 * @returns {array[]}
 */

const mergeTablesHor = (tableA, tableB) =>
	tableA.map((row, i) => [...row, '', ...tableB[i]]);

export { mergeTablesHor };

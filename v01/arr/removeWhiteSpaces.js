/**
 * Funkcja do zastosowania jako callback dla map dla tablic 2d,
 * lub jako zwykła funkcja dla tablic 1d.
 * Usuwa whitespacy z każdej komórki wierasz zawierającej stringi
 *
 * @param {Array} row Wiersz tablicy 2d lub tablica 1d
 */
export const removeWhitespaces = row =>
	row.map(cell => (typeof cell === 'string' ? cell.trim() : cell));

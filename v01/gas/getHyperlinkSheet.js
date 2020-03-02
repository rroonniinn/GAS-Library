/**
 * Zwraca formułę gotową do wklejenia do komórki z hyperlinkiem
 * do dokumentu Sheets dla pliku o przekazanym id.
 *
 * @param {String} fileId Id pliku
 * @param {String} [linkDesc='Link'] Opcjonalny tekst odnośnika
 * @returns {String}
 */

const getHyperlinkSheet = (fileId, linkDesc = 'Link') => {
	const url = `https://docs.google.com/spreadsheets/d/${fileId}`;
	return `=HYPERLINK("${url}";"${linkDesc}")`;
};

export { getHyperlinkSheet };

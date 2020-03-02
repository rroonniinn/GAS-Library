/**
 * Zwraca formułę gotową do wklejenia do komórki z hyperlinkiem
 * do dokumentu Docs dla pliku o przekazanym id.
 *
 * @param {String} fileId Id pliku
 * @param {String} [linkDesc='Link'] Opcjonalny tekst odnośnika
 * @returns {String}
 */

const getHyperlinkDoc = (fileId, linkDesc = 'Link') => {
	const url = `https://docs.google.com/document/d/${fileId}`;
	return `=HYPERLINK("${url}";"${linkDesc}")`;
};

export { getHyperlinkDoc };

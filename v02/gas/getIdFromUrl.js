/**
 * Zwraca ID folderu lub pliku z przekazanego URL-a,
 * @param {string} url URL folderu lub pliku
 * @returns {string} ID
 */

const getIdFromUrl = url => {
	// folder
	if (url.lastIndexOf('folders') > -1) {
		return /folders\/(.+)/.exec(url)[1];
	}
	// file
	// return /d\/(.+)\//.exec(url)[1];
	return /d\/([^/]+)/.exec(url)[1];
};
export { getIdFromUrl };

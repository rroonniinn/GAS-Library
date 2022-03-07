/**
 * Umieszcza przekazany kod jako string w przekazanym node-ie.
 * Usuwa wcześniej znajdującą się w nim zawartość.
 * Jeśli jako html zostanie przekazany `null` (lub w ogóle nie będzie
 * przekazanego argumentu), wtedy tylko usuwa
 * już istniejącą zawartość nie dodając nowej.
 * @param {HTMLElement} parent
 * @param {string|null} [html]
 */

export const insertHtml = (parent, html) => {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}

	if (html) {
		parent.insertAdjacentHTML('beforeend', html);
	}
};

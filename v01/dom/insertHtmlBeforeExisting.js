/**
 * Umieszcza przekazany kod jako string w przekazanym node-ie.
 * Nowy node zostaje dodany na początku istniejącej zawartości
 * @param {HTMLElement} parent
 * @param {string|null} html
 */

export const insertHtmlBeforeExisting = (parent, html) => {
	parent.insertAdjacentHTML('afterbegin', html);
};

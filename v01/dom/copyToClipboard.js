import { getById } from './getById';

/**
 * Ustawia eventListener na element o przekazanym id, który kopiuje po
 * kliknięciu zawartość textContent tegoż elementu do pamięci podręcznej
 * @param {string} htmlElementId Id elementu html na który ma zostać zaaplikowana akcja
 */

export const copyToClipboard = htmlElementId => {
	const docNumbEl = getById(htmlElementId);
	if (docNumbEl) {
		docNumbEl.addEventListener('click', () => {
			const docNumb = docNumbEl.textContent;
			navigator.clipboard.writeText(docNumb);
		});
	}
};

/**
 * Zwraca wartość tekstu (nie value) zaznaczonej opcji w selekcji
 * @param {HTMLSelectElement} select
 */

export const selectGetSelectedText = select =>
	select.options[select.selectedIndex].text;

/**
 * Zwraca wartość value (nie tekstu) pierwszej zaznaczonej opcji w selekcji
 * @param {HTMLSelectElement} select
 */

export const selectGetSelectedValue = select =>
	select.selectedOptions[0].value;

import { getById } from './getById';

/**
 * Zwraca poprawny z punktu widzenia jsDoc typ - Select
 * @param {string} id
 * @returns {HTMLSelectElement}
 */

export const getSelect = id =>
	/** @type {HTMLSelectElement} */ (getById(id));

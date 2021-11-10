import { getById } from './getById';

/**
 * Zwraca poprawny z punktu widzenia jsDoc typ - Button
 * @param {string} id
 * @returns {HTMLButtonElement}
 */

export const getButton = id =>
	/** @type {HTMLButtonElement} */ (getById(id));

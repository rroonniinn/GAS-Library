import { getById } from './getById';

/**
 * Zwraca poprawny z punktu widzenia jsDoc typ - Input
 * @param {string} id
 * @returns {HTMLInputElement}
 */

export const getInput = id =>
	/** @type {HTMLInputElement} */ (getById(id));

import { getById } from './getById';

/**
 * Zwraca poprawny z punktu widzenia jsDoc typ - TextArea
 * @param {string} id
 * @returns {HTMLTextAreaElement}
 */

export const getTextArea = id =>
	/** @type {HTMLTextAreaElement} */ (getById(id));

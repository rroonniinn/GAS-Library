/**
 * Zwraca string informujący w jakim środowisku został odpalony sidebar.
 * Służy do testowania lokalnego sidebaru
 * @returns {'local'|'gas'}
 */

export const getExecutionContext = () =>
	window.location.hostname.includes('googleusercontent')
		? 'gas'
		: 'local';

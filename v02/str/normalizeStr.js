const norm = str => str.replace(/ /g, '').toLowerCase();

/**
 * Zwraca string bez spacji napisany małymi literami
 * @memberof Lib_Str
 *
 * @param {any} val String lub number
 * @returns {string} String bez spacji napisany małymi literami
 */

const normalizeStr = val =>
	typeof val !== 'string' ? norm(String(val)) : norm(val);

export { normalizeStr };

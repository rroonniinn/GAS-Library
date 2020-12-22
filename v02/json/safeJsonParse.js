/**
 * W miarę bezpieczne odparsowanie JSONA, które nie wysypuje się
 * jeśli będziemy próbować odparsować coś innego
 * @param {*} v Wartość odparsowana
 * @returns {*}
 */

const safeJsonParse = v => {
	if (typeof v !== 'string') return v;
	if (!v) return v;

	try {
		return JSON.parse(v);
	} catch (e) {
		return v;
	}
};

export { safeJsonParse };

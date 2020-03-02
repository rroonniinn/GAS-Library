/* eslint-disable no-param-reassign */
/* eslint-disable no-extend-native */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
if (!String.prototype.includes) {
	Object.defineProperty(String.prototype, 'includes', {
		value(search, start) {
			if (typeof start !== 'number') {
				start = 0;
			}

			if (start + search.length > this.length) {
				return false;
			}
			return this.indexOf(search, start) !== -1;
		},
	});
}

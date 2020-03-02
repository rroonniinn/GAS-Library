/* eslint-disable no-extend-native */

/**
 * Console log dla wszystkich obiektów
 *
 */

if (!Object.prototype.log) {
	Object.defineProperty(Object.prototype, 'log', {
		value(desc = '') {
			if (desc) {
				console.log(`${desc}: `, this);
			} else {
				console.log(this);
			}
		},
		configurable: true,
		writable: true,
	});
}

/* eslint-disable no-extend-native */

/**
 * Customowa metoda wyświetlająca zawartość obiketu jako Browser.msg
 * Użycie: obj.disp();
 *
 */
if (!Object.prototype.disp) {
	Object.defineProperty(Object.prototype, 'disp', {
		value() {
			Browser.msgBox(String(this));
			return this;
		},
		configurable: true,
		writable: true,
	});
}

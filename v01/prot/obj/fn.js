/* eslint-disable no-extend-native */

/**
 * Umożliwia wpięcie dowolnej funkcji do chainowania - zwraca rezultat zaaplikowania przekazanej funkcji na obiekcie
 *
 */

if (!Object.prototype.fn) {
	Object.defineProperty(Object.prototype, 'fn', {
		value(funk) {
			return funk(this);
		},
		configurable: true,
		writable: true,
	});
}

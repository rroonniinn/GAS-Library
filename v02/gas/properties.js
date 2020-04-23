/* eslint-disable max-params */
import { CrusherPluginCacheService } from '../gas-mcpher/CrusherPluginCacheService';

/**
 * Cache Object
 * @typedef {Object} CacheObject
 * @property {object} init Metoda do inicjacji obiektu (nie używana pub)
 * @property {function} get Pobieranie danych z cacha
 * @property {function} put Wprowadzanie danych do cacha
 */
/**
 * Obiekt do obsługi cachowania z biblioteki mcpher
 * @type {CacheObject} obj
 */
const crusherProps = {
	init: new CrusherPluginCacheService().init({
		store: PropertiesService.getScriptProperties(),
	}),

	/**
	 * Pobieranie danych z cacha
	 * @param {string|number} key Klucz danych z cacha
	 */
	get(key) {
		console.log(`Pobieram z Propsów cr-${key}`);
		return this.init.get(`cr-${key}`);
	},

	/**
	 * @param {string} key Klucz danych z cacha
	 * @param {any} vals Dane do wprowadzenia
	 */
	put(key, vals, t) {
		this.init.put(`cr-${key}`, vals);
	},
};

export { crusherProps };

/* eslint-disable max-params */
import { CrusherPluginPropertyService } from '../gas-mcpher/CrusherPluginPropertyService';

/**
 * Cache Object
 * @typedef {Object} CacheObject
 * @property {object} init Metoda do inicjacji obiektu (nie używana pub)
 * @property {function} get Pobieranie danych z propsów
 * @property {function} put Wprowadzanie danych do propsów
 * @property {function} del Usuwa dane z propsów
 */

/**
 * Obiekt do obsługi cach-owania z biblioteki McPher
 * @type {CacheObject} obj
 */

const crusherProps = {
	init: new CrusherPluginPropertyService().init({
		store: PropertiesService.getScriptProperties(),
	}),

	/**
	 * Pobieranie danych z propsów
	 * @param {string|number} key Klucz danych
	 */

	get(key) {
		console.log(`Pobieram z Propsów pr-${key}`);
		return this.init.get(`pr-${key}`);
	},

	/**
	 * Wprowadzanie danych do propsów
	 * @param {string} key Klucz danych
	 * @param {any} val Dane do wprowadzenia
	 */

	put(key, val) {
		this.init.put(`pr-${key}`, val);
	},

	/**
	 * Usuwa wskazany klucz z propsów
	 * @param {string} key Klucz danych
	 */

	del(key) {
		this.init.remove(`pr-${key}`);
	},
};

const getProps = propName => crusherProps.get(propName);
const setProps = (propName, val) => crusherProps.put(propName, val);
const delProps = propName => crusherProps.del(propName);

// crusherProps jest eksportowany tylko z powodu legacy code
export { crusherProps, getProps, setProps, delProps };

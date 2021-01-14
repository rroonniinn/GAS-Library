/* eslint-disable max-params */
import { CrusherPluginPropertyService } from '../gas-mcpher/CrusherPluginPropertyService';

/**
 * Cache Object
 * @typedef {Object} CacheObject
 * @property {object} init Metoda do inicjacji obiektu (nie używana pub)
 * @property {function} get Pobieranie danych z propsa
 * @property {function} put Wprowadzanie danych do propsa
 * @property {function} del Usuwa dane z propsa
 */
/**
 * Obiekt do obsługi cachowania z biblioteki mcpher
 * @type {CacheObject} obj
 */
const crusherProps = {
	init: new CrusherPluginPropertyService().init({
		store: PropertiesService.getScriptProperties(),
	}),

	/**
	 * Pobieranie danych z cacha
	 * @param {string|number} key Klucz danych z cacha
	 */
	get(key) {
		console.log(`Pobieram z Propsów cr-${key}`);
		return this.init.get(`pr-${key}`);
	},

	/**
	 * @param {string} key Klucz danych z cacha
	 * @param {any} vals Dane do wprowadzenia
	 */
	put(key, vals) {
		this.init.put(`pr-${key}`, vals);
	},

	/**
	 * @param {string} key Klucz danych z cacha
	 * @param {any} vals Dane do wprowadzenia
	 */
	del(key) {
		this.init.remove(`pr-${key}`);
	},
};

const getProps = propName => crusherProps.get(propName);
const setProps = (propName, val) => crusherProps.put(propName, val);
const delProps = (propName) => crusherProps.del(propName);

// crusherProps jest exportowany tylko z powodu legacy code
export { crusherProps, getProps, setProps, delProps };

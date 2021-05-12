/* eslint-disable max-params */
import { CrusherPluginCacheService } from '../gas-mcpher/CrusherPluginCacheService';

/**
 * Cache Object
 * @typedef {Object} CacheObject
 * @property {object} init Metoda do inicjacji obiektu (nie używana pub)
 * @property {function} get Pobieranie danych z cache-a
 * @property {function} put Wprowadzanie danych do cache-a
 * @property {function} del Usuwa dane z cache-a
 */

/**
 * Obiekt do obsługi cach-owania z biblioteki McPher
 * @type {CacheObject} obj
 */

const crusherCache = {
	init: new CrusherPluginCacheService().init({
		store: CacheService.getScriptCache(),
	}),

	/**
	 * Pobieranie danych z cache-a
	 * @param {string|number} key Klucz danych z cache-a
	 */

	get(key) {
		const res = this.init.get(`cr-${key}`);
		console.log(
			`Pobieram z Cacha cr-${key}. Dane ${
				res ? 'dostępne' : 'NIE dostępne'
			}`
		);
		return res;
	},

	/**
	 * Wprowadzanie danych do cache-a
	 * @param {string} key Klucz danych z cache-a
	 * @param {any} val Dane do wprowadzenia
	 * @param {number} t Czas przechowywania danych w minutach (max 6 * 60 co daje 6h)
	 */

	put(key, val, t) {
		console.log(`Wprowadzam do Cacha cr-${key}`);
		this.init.put(`cr-${key}`, val, 60 * t);
	},

	/**
	 * Usuwa wskazany klucz z cache-a
	 * @param {string} key Klucz danych
	 */

	del(key) {
		console.log(`Usuwam z Cacha cr-${key}`);
		this.init.remove(`cr-${key}`);
	},
};

/**
 * Wyeksportowana funkcja pobierająca dane z cache-a
 * @param {string} cacheKey Klucz pod jakim dane mają być dostępne
 */

const getCache = cacheKey => crusherCache.get(cacheKey);

/**
 * Wyeksportowana funkcja ustawiająca dane w cache-u
 * @param {string} cacheKey Klucz pod jakim dane mają być dostępne
 * @param {*} val Dane do zapisania
 * @param {number} minutes Liczba minut trzymania danych w cache-u (domyślnie 30 min)
 */

const setCache = (cacheKey, val, minutes = 30) =>
	crusherCache.put(cacheKey, val, minutes);

/**
 * Wyeksportowana funkcja usuwająca dane z cache-a
 * @param {string} cacheKey Klucz do usunięcia
 */

const delCache = cacheKey => crusherCache.del(cacheKey);

// crusherCache jest eksportowany tylko z powodu legacy code
export { crusherCache, getCache, setCache, delCache };
